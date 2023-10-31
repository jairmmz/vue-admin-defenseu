<template>
    <div class="bg-white shadow-lg rounded-sm border border-slate-200 relative">
        <header class="px-5 py-4">
            <h2 class="font-semibold text-slate-800">{{ title }}</h2>
        </header>
        <div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="table-auto w-full">
                    <!-- Table header -->
                    <thead
                        class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
                        <tr>
                            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                                <div class="flex items-center">
                                    <label class="inline-flex">
                                        <span class="sr-only">Seleccionar todo</span>
                                        <input class="form-checkbox" type="checkbox" v-model="selectAll"
                                            @click="checkAll" />
                                    </label>
                                </div>
                            </th>
                            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div class="font-semibold text-left">Título</div>
                            </th>
                            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div class="font-semibold text-left">Archivo</div>
                            </th>
                            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div class="font-semibold text-left">Fecha de publicación</div>
                            </th>
                            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div class="font-semibold text-left">Estado</div>
                            </th>
                            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div class="font-semibold text-left">Acción</div>
                            </th>
                        </tr>
                    </thead>
                    <!-- Table body -->
                    <tbody class="text-sm divide-y divide-slate-200">
                        <Notices v-for="notice in notices" :key="notice.id" :notice="notice"
                            v-model:selected="selected" :value="notice.id" />
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    <!-- Modal View Notice -->
    <NoticeView />

    <!-- Modal Delete Notice -->
    <NoticeModalDelete />
</template>
  
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useNoticeStore } from '../../store/notices';
import Notices from './NoticesTableItem.vue';
import NoticeView from './NoticeView.vue';
import NoticeModalDelete from './NoticeModalDelete.vue';

defineProps({
    selectedItems: {
        type: Array,
        default: () => [],
    },
    title: {
        type: String,
        default: '',
    }
});

const store = useNoticeStore();
const notices = computed(() => store.$state.notices);
const emit = defineEmits(['change-selection']);

const selectAll = ref(false);
const selected = ref([]);

onMounted(async () => {
    await store.getNotices();
})

const checkAll = () => {
    selected.value = []
    if (!selectAll.value) {
        selected.value = notices.value.map(notice => notice.id)
    }
}

watch(selected, () => {
    selectAll.value = notices.value.length === selected.value.length ? true : false
    emit('change-selection', selected.value)
})

</script>