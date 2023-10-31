<template>
    <div class="flex flex-wrap items-center -m-1.5">
        <!-- Danger Modal -->
        <div class="m-1.5">
            <!-- Start -->
            <ModalBlank id="danger-modal" :modalOpen="dangerModalOpen" @close-modal="dangerModalOpen = false">
                <div class="p-5 text-center space-x-4">
                    <!-- Icon -->
                    <div class="w-10 h-10 rounded-full inline-block text-center shrink-0 bg-rose-100">
                        <svg class="w-10 h-10 shrink-0 fill-current text-rose-500" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                        </svg>
                    </div>
                    <!-- Content -->
                    <div>
                        <!-- Modal header -->
                        <div class="mb-2">
                            <div class="text-lg font-semibold text-slate-800">¿Está seguro que desea eliminar la noticia?</div>
                        </div>
                        <!-- Modal content -->
                        <div class="text-md mb-10">
                            <div class="space-y-2">
                                <p>{{ notice.title }}</p>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex flex-wrap justify-end space-x-2">
                            <button class="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
                                @click.stop="dangerModalOpen = false">Cancelar</button>
                            <button @click="deleteNotice" class="btn-sm bg-rose-500 hover:bg-rose-600 text-white">Sí, eliminar</button>
                        </div>
                    </div>
                </div>
            </ModalBlank>
            <!-- End -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useNoticeStore } from '../../store/notices';
import ModalBlank from '../../components/ModalBlank.vue';

const store = useNoticeStore();

const dangerModalOpen = ref(false);

const notice = computed(() => store.$state.currentNotice)

watch(() => store.$state.modalDeleteNotice, (value) => {
    dangerModalOpen.value = value;
});

const deleteNotice = async () => {
    try {
        await store.deleteNotice(notice.value.id);
    } catch (error) {
        console.log(error);
    }
}

</script>

<style scoped></style>