<template>
    <!-- Page content -->
    <div class="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

        <!-- Content -->
        <div>
            <div class="mb-3">
                <router-link class="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    :to="{ name: 'notices' }">&lt;- Regresar atrás</router-link>
            </div>
            <header class="mb-4">
                <!-- Title -->
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-2">{{ currentNotice.title }}</h1>
            </header>

            <!-- Image -->
            <figure class="mb-6">
                <img class="w-full rounded-sm" :src="currentNotice.image ? getFileUrl(currentNotice.image) : 'http://localhost:5173/src/images/applications-image-01.jpg'" width="640" height="360"
                    alt="Product" />
            </figure>

            <!-- Product content -->
            <div>
                <h2 class="text-xl leading-snug text-slate-800 font-bold mb-2">Descripción</h2>
                <p class="mb-6">{{ currentNotice.description }}</p>
            </div>
        </div>

        <!-- Sidebar -->
        <div>
            <div class="bg-white p-5 shadow-lg rounded-sm border border-slate-200 lg:w-72 xl:w-80">
                <div class="text-sm text-slate-800 font-semibold mb-3">
                    <h2 class="text-1xl">Otras noticias</h2>
                </div>
                <ul class="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">
                    <!-- Related item -->
                    <li v-for="notice in notices" :key="notice.id" class="flex flex-col items-center">
                        <img class="rounded-sm" :src="notice.image ? getFileUrl(notice.image) : 'http://localhost:5173/src/images/applications-image-01.jpg'" width="200" height="142"
                            alt="Product 03" />
                        <div class="grow">
                            <h3 class="text-1xl font-semibold text-slate-800 mb-1">{{ notice.title }}</h3>
                            <div class="text-sm mb-2">{{ notice.description }}
                            </div>
                        </div>
                        <router-link :to="{ name:'notices.detail', params: { id: notice.id }}"
                        class="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                            Ir a la noticia
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
import { useNoticeStore } from '../../store/notices';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const store = useNoticeStore()
const { currentNotice, notices } = storeToRefs(store);
const route = useRoute();

onMounted(async () => {
    await store.getNotice(route.params.id);
    await store.getNotices();
})
const getFileUrl = (filename) => {
    return `${import.meta.env.VITE_API_BASE_URL}/assets/images/${filename}`;
}

</script>