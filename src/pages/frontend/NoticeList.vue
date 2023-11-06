<template>
    <!-- Card 1 -->
    <div v-for="notice in notices" :key="notice.id"
        class="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
        <div class="flex flex-col h-full">
            <!-- Image -->
            <img class="w-full" :src="notice.image ? getUrlImage(notice.image) : 'http://localhost:5173/src/images/applications-image-01.jpg'" width="286" height="160"
                alt="Application 01" />
            <!-- Card Content -->
            <div class="grow flex flex-col p-5">
                <!-- Card body -->
                <div class="grow">
                    <!-- Header -->
                    <header class="mb-3">
                        <h3 class="text-lg text-slate-800 font-semibold">{{ notice.title }}</h3>
                        <span>{{ notice.description }}</span>
                    </header>
                </div>
                <!-- Card footer -->
                <div>
                    <router-link :to="{ name:'notices.detail', params: { id: notice.id }}" class="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white">Ver noticia</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue'
import { useNoticeStore } from '../../store/notices'
import { storeToRefs } from 'pinia';

const store = useNoticeStore()
const { notices } = storeToRefs(store);

onMounted(async () => {
    await store.getNotices();
})

const getUrlImage = (image) => {
    return `${import.meta.env.VITE_API_BASE_URL}/assets/images/${image}`;
}
</script>