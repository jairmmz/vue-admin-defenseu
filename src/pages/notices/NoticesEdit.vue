<template>
    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-5">Editar noticia ✨</h1>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" enctype="multipart/form-data">
        <div class="space-y-4">

            <!-- Título -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="title">Título de la noticia</label>
                <input v-model="form.title" type="text" id="title" name="title" class="form-input w-full" required />
            </div>

            <!-- Slug -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="slug">Slug de la noticia</label>
                <input v-model="form.slug" type="text" id="slug" name="slug" class="form-input w-full bg-slate-200" disabled />
            </div>

            <!-- Descripción -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="description">Descripción de la noticia</label>
                <textarea v-model="form.description" id="description" title="description" class="form-input w-full" rows="4" required>
                </textarea>
            </div>

            <!-- Imagen de la noticia -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="image">Imagen de la noticia</label>
                <input type="file" @change="handleChangeFile($event)" id="image" title="image" class="form-input w-full" />
            </div>
            <div v-if="fileUrl">
                <!-- Vista previa de la imagen -->
                <span class="block text-sm font-medium mb-1">Vista previa de la imagen</span>
                <a :href="fileUrl" target="_blank">
                    <img :src="fileUrl" class="w-48 object-cover" />
                </a>
            </div>

            <!-- Estado de la noticia -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="status">Estado del documento
                    <span class="text-rose-500">*</span>
                </label>
                <select v-model="form.status" id="status" title="status" class="form-select w-full">
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>

            <div class="flex justify-between">
                <router-link :to="{ name: 'app.documents' }"
                    class="btn bg-rose-500 hover:bg-rose-600 text-white">Cancelar</router-link>
                <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path
                            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span class="ml-2">Actualizar noticia</span>
                </button>
            </div>
        </div>
    </form>
</template>


<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useNoticeStore } from '../../store/notices';

const route = useRoute();
const store = useNoticeStore();
const fileName = ref(null);
const fileUrl = ref(null);

const form = ref({
    title: null,
    description: null,
    slug: null,
    image: null,
    status: 'activo',
});

onMounted(async () => {
    form.value = await store.getNotice(route.params.id);
    if(form.value.image) {
        fileUrl.value = `${import.meta.env.VITE_API_BASE_URL}/assets/images/${form.value.image}`;
        fileName.value = form.value.image;
        form.value.image = null;
    }
});

const handleChangeFile = (e) => {
    form.value.image = e.target.files[0];
    if (form.value.image) {
        fileUrl.value = URL.createObjectURL(form.value.image);
        fileName.value = form.value.image.name;
    } else {
        form.value.image = null;
    }
}

const handleSlugChange = computed(() => {
    return form.value.slug = form.value.title.toLowerCase().replace(/ /g, '-');
})

watch(() => form.value.title, () => {
    form.value.slug = handleSlugChange.value;
})

const handleSubmit = async () => {
    try {
        await store.updateNotice(form.value);
    } catch (error) {
        console.log(error);
    }
}
</script>