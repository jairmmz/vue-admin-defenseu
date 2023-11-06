<template>
    <!-- Header Page -->
    <FrontendHeader />

    <!-- Content Page -->
    <main>
        <router-view />
    </main>
    
    <!-- Footer -->
    <FrontendFooter />
</template>

<script setup>
import FrontendFooter from '../layouts/FrontendFooter.vue';
import FrontendHeader from '../layouts/FrontendHeader.vue';

</script>

<style scoped></style>