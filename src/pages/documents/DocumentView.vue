<template>
    <!-- View Document Modal -->
    <div class="flex flex-wrap items-center -m-1.5">

        <!-- Modal Document-->
        <div class="m-1.5">
            <!-- Start -->
            <ModalBasic id="feedback-modal" :modalOpen="feedbackModalOpen" @close-modal="feedbackModalOpen = false"
                title="Vista del documento">
                <!-- Modal content -->
                <div class="px-5 py-4">
                    <div class="space-y-3">
                        <div>
                            <label class="block text-sm font-medium mb-1" for="name">Título</label>
                            <input class="form-input w-full bg-slate-100 px-2 py-1" type="text" :value="document.title" disabled />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="feedback">Descripción</label>
                            <textarea id="feedback" class="form-textarea w-full bg-slate-100 px-2 py-1" rows="4"
                                disabled>{{ document.description }}</textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Archivo</label>
                            <a :href="getFileUrl(document.file)" target="_blank" class="inline-block w-full p-1 bg-slate-100 hover:text-blue-600">{{ document.file }}</a>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Fecha del documento</label>
                            <input type="date" class="form-input w-full bg-slate-100 px-2 py-1" :value="document.date_document" disabled>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1" for="email">Estado</label>
                            <span class="inline-block w-full px-2 py-1 bg-slate-100">{{ document.status }}</span>
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
import { useDocumentStore } from '../../store/documents';
import ModalBasic from '../../components/ModalBasic.vue';

const store = useDocumentStore();

const feedbackModalOpen = ref(false);

const document = computed(() => store.$state.currentDocument)

watch(() => store.$state.modalViewDocument, (value) => {
    feedbackModalOpen.value = value;
});

const getFileUrl = (filename) => {
    return `${import.meta.env.VITE_API_BASE_URL}/assets/documents/${filename}`;
}
</script>

<style scoped></style>