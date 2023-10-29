<template>
    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-5">Crear documento ✨</h1>
    </div>
    <form @submit.prevent="handleSubmit" method="POST" enctype="multipart/form-data">
        <div class="space-y-4">
            <!-- Título -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="title">Título del documento</label>
                <input type="text" id="title" v-model="form.title" class="form-input w-full" required />
            </div>
            <!-- Descripción -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="description">Descripción del documento</label>
                <textarea id="description" v-model="form.description" class="form-input w-full" rows="4"
                    required>
                </textarea>
            </div>
            <!-- Archivo documento -->
            <div class="">
                <label class="block text-sm font-medium mb-1" for="file">Archido del documento (PDF, DOC.)</label>
                <input type="file" id="file" @change="handleChangeFile($event)" class="form-input w-full" required />
            </div>
            <!-- Fecha de documento y estado -->
            <div class="md:flex space-y-4 md:space-y-0 md:space-x-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium mb-1" for="date_document">Fecha del documento</label>
                    <input type="date" id="date_document" v-model="form.date_document" class="form-input w-full" required />
                </div>
                <div class="flex-1">
                    <label class="block text-sm font-medium mb-1" for="status">Estado del documento
                        <span class="text-rose-500">*</span>
                    </label>
                    <select id="status" v-model="form.status" class="form-select w-full">
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
                    <span class="ml-2">Agregar documento</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useDocumentStore } from '../../store/documents';

const store = useDocumentStore();

const form = {
    title: '',
    description: '',
    file: '',
    date_document: '',
    status: 'activo',
};

const handleChangeFile = (e) => {
    form.file = e.target.files[0];
}

const handleSubmit = async () => {
    try {
        await store.createDocument(form);
    } catch (error) {
        console.log(error);
    }
}
</script>