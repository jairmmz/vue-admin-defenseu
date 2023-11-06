<template>
    <div class="pt-10 m-5">
        <!-- Page header -->
        <div class="mb-5">
            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Noticias ✨</h1>
        </div>

        <!-- Page content -->
        <div>
            <div class="mt-8">
                <div class="grid grid-cols-12 gap-6">
                    <NoticeList />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import NoticeList from './NoticeList.vue';
</script>