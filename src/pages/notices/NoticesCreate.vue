<template>
    <!-- Título de la izquierda -->
    <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-5">Crear noticia ✨</h1>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" enctype="multipart/form-data">
        <div class="space-y-4">

            <!-- Título -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="title">Título de la noticia
                    <span class="text-rose-500">*</span>
                </label>
                <input type="text" id="title" v-model="form.title" class="form-input w-full" required />
            </div>

            <!-- Slug -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="title">Slug de la noticia</label>
                <input type="text" id="title" v-model="form.slug" class="form-input w-full bg-slate-100" disabled />
            </div>

            <!-- Descripción -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="description">Descripción de la noticia</label>
                <textarea id="description" v-model="form.description" class="form-input w-full" rows="4"
                    required>
                </textarea>
            </div>

            <!-- Imagen de la noticia -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="image">Imagen de la noticia
                </label>
                <input type="file" id="image" @change="handleChangeFile($event)" class="form-input w-full" required />
            </div>
            
            <!-- Vista previa de la imagen -->
            <div v-if="imagePreview" class="">
                <label class="block text-sm font-medium mb-1" for="image">Vista previa de la imagen
                </label>
                <img :src="imagePreview" class="w-48 object-cover" />
            </div>

            <!-- Estado de la noticia -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="status">Estado de la noticia
                    <span class="text-rose-500">*</span>
                </label>
                <select id="status" v-model="form.status" class="form-select w-full">
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>

            <!-- Button submit and cancel-->
            <div class="flex justify-between">
                <router-link :to="{ name: 'app.notices' }"
                    class="btn bg-rose-500 hover:bg-rose-600 text-white">Cancelar</router-link>
                <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path
                            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span class="ml-2">Agregar noticia</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useNoticeStore } from '../../store/notices';

const storeNotice = useNoticeStore();

const imagePreview = ref(null);

const form = ref({
    title: '',
    slug: '',
    description: '',
    image: '',
    status: 'activo',
});

const handleChangeFile = (e) => {
    form.value.image = e.target.files[0];

    // Vista previa de la imagen
    const reader = new FileReader();
    reader.readAsDataURL(form.value.image);
    reader.onload = () => {
        imagePreview.value = reader.result;
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
        await storeNotice.createNotice(form.value);
        resetForm();
    } catch (error) {
        console.log(error);
    }
}

const resetForm = () => {
    form.title = '';
    form.slug = '';
    form.description = '';
    form.image = '';
    form.status = 'activo';
}
</script>