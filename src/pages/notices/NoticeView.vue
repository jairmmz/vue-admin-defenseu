<template>
    <!-- View Notices Modal -->
    <div class="flex flex-wrap items-center -m-1.5">

        <!-- Modal Notice-->
        <div class="m-1.5">
            <!-- Start -->
            <ModalBasic id="feedback-modal" :modalOpen="feedbackModalOpen" @close-modal="feedbackModalOpen = false"
                title="Vista de la noticia">
                <!-- Modal content -->
                <div class="px-5 py-4">
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm font-medium mb-1" for="name">Título</label>
                            <input class="form-input w-full bg-slate-100 px-2 py-1" type="text" :value="notice.title" disabled />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="feedback">Descripción</label>
                            <textarea id="feedback" class="form-textarea w-full bg-slate-100 px-2 py-1" rows="4"
                                disabled>{{ notice.description }}</textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Archivo</label>
                            <a :href="getFileUrl(notice.image)" target="_blank" class="inline-block w-full p-1 bg-slate-100 hover:text-blue-600">{{ notice.image }}</a>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Fecha de la noticia</label>
                            <input type="date" class="form-input w-full bg-slate-100 px-2 py-1" :value="notice.created_at" disabled />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Estado</label>
                            <span class="inline-block w-full px-2 py-1 bg-slate-100">{{ notice.status }}</span>
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="px-5 py-4 border-t border-slate-200">
                    <div class="flex flex-wrap justify-end space-x-2">
                        <button @click.stop="feedbackModalOpen = false"
                            class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Cerrar</button>
                    </div>
                </div>
            </ModalBasic>
            <!-- End -->
        </div>

    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useNoticeStore } from '../../store/notices.js';
import ModalBasic from '../../components/ModalBasic.vue';

const store = useNoticeStore();

const feedbackModalOpen = ref(false);

const notice = computed(() => store.$state.currentNotice)

watch(() => store.$state.modalViewNotice, (value) => {
    feedbackModalOpen.value = value;
});

const getFileUrl = (filename) => {
    return `${import.meta.env.VITE_API_BASE_URL}/assets/images/${filename}`;
}
</script>

<style scoped></style>