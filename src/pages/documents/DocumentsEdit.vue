<template>
    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-5">Editar documento ✨</h1>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" enctype="multipart/form-data">
        <div class="space-y-4">
            <!-- Título -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="title">Título del documento</label>
                <input v-model="form.title" type="text" id="title" name="title" class="form-input w-full" required />
            </div>
            <!-- Descripción -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="description">Descripción del documento</label>
                <textarea v-model="form.description" id="description" title="description" class="form-input w-full" rows="4" required>
                </textarea>
            </div>
            <!-- Archivo documento -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="file">Archido del documento (PDF, DOC.)</label>
                <input type="file" @change="handleChangeFile($event)" id="file" title="file" class="form-input w-full" />
            </div>
            <div>
                <!-- Vista previa del file -->
                <span class="block text-sm font-medium mb-1">Vista previa del documento</span>
                <a :href="fileUrl" target="_blank">{{ fileName }}</a>
            </div>
            <!-- Fecha de documento y estado -->
            <div class="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium mb-1" for="date_document">Fecha del documento</label>
                    <input type="date" v-model="form.date_document" id="date_document" title="date_document" class="form-input w-full" required />
                </div>
                <div class="flex-1">
                    <label class="block text-sm font-medium mb-1" for="status">Estado del documento
                        <span class="text-rose-500">*</span>
                    </label>
                    <select v-model="form.status" id="status" title="status" class="form-select w-full">
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-between">
                <router-link :to="{ name: 'app.documents' }"
                    class="btn bg-rose-500 hover:bg-rose-600 text-white">Cancelar</router-link>
                <button type="submit" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path
                            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span class="ml-2">Actualizar documento</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDocumentStore } from '../../store/documents';

const route = useRoute();
const store = useDocumentStore();

const fileName = ref(null);
const fileUrl = ref(null);

const form = ref({
    title: null,
    description: null,
    file: null,
    date_document: null,
    status: 'activo',
});

onMounted(async () => {
    form.value = await store.getDocument(route.params.id);
    if(form.value.file) {
        fileUrl.value = `${import.meta.env.VITE_API_BASE_URL}/assets/documents/${form.value.file}`;
        fileName.value = form.value.file;
        form.value.file = null;
    }
});

const handleChangeFile = (e) => {
    form.value.file = e.target.files[0];
    if (form.value.file) {
        fileUrl.value = URL.createObjectURL(form.value.file);
        fileName.value = form.value.file.name;
    } else {
        form.value.file = null;
    }
}

const handleSubmit = async () => {
    try {
        await store.updateDocument(form.value);
        // console.log(form.value);
    } catch (error) {
        console.log(error);
    }
}
</script>