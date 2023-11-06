<template>
    <div>
        <div class="mb-3">
            <router-link class="text-sm font-medium text-indigo-500 hover:text-indigo-600" :to="{ name: 'notices' }">&lt;-
                Regresar atrás</router-link>
        </div>
        <header class="mb-4">
            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-2">{{ currentNotice.title }}</h1>
        </header>

        <!-- Image -->
        <figure class="mb-6">
            <img class="w-full rounded-sm"
                :src="currentNotice.image ? getFileUrl(currentNotice.image) : 'http://localhost:5173/src/images/applications-image-01.jpg'"
                width="640" height="360" alt="Product" />
        </figure>

        <!-- Product content -->
        <div>
            <h2 class="text-xl leading-snug text-slate-800 font-bold mb-2">Descripción</h2>
            <p class="mb-6">{{ currentNotice.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNoticeStore } from '../../store/notices';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const store = useNoticeStore()
const { currentNotice } = storeToRefs(store);
const route = useRoute();

onMounted(async () => {
    await store.getNotice(route.params.id);
})

const getFileUrl = (filename) => {
    return `${import.meta.env.VITE_API_BASE_URL}/assets/images/${filename}`;
}
</script>