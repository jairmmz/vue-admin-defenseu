<template>
    <!-- Page header -->
    <div class="sm:flex sm:justify-between sm:items-center mb-5">

        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Noticias ✨</h1>
        </div>

        <!-- Right: Actions  -->
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <!-- Search form -->
            <SearchForm placeholder="Buscar noticia" />
            <!-- Create invoice button -->
            <router-link :to="{ name: 'app.notices.create' }" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path
                        d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="hidden xs:block ml-2">Crear noticia</span>
            </router-link>
        </div>

    </div>

    <!-- More actions -->
    <div class="sm:flex sm:justify-between sm:items-center mb-5">

        <!-- Left side -->
        <div class="mb-4 sm:mb-0">
            <ul class="flex flex-wrap -m-1">
                <li class="m-1">
                    <button
                        class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">Todos
                        <span class="ml-1 text-indigo-200">67</span>
                    </button>
                </li>
                <li class="m-1">
                    <button
                        class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Activos
                        <span class="ml-1 text-slate-400">34</span>
                    </button>
                </li>
                <li class="m-1">
                    <button
                        class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Inactivos
                        <span class="ml-1 text-slate-400">19</span>
                    </button>
                </li>
            </ul>
        </div>

        <!-- Right side -->
        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <!-- Delete button -->
            <DeleteButton :selectedItems="selectedItems" />
            <!-- Dropdown -->
            <DateSelect />
            <!-- Filter button -->
            <FilterButton align="right" />
        </div>

    </div>

    <!-- Table -->
    <NoticesTable @change-selection="updateSelectedItems($event)" title="Noticias" />

    <!-- Pagination -->
    <div class="mt-8">
        <PaginationClassic />
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { useNoticeStore } from '../../store/notices'
import { storeToRefs } from 'pinia';
import SearchForm from '../../components/SearchForm.vue'
import DeleteButton from '../../partials/actions/DeleteButton.vue'
import DateSelect from '../../components/DateSelect.vue'
import FilterButton from '../../components/DropdownFilter.vue'
import NoticesTable from './NoticesTable.vue'
import PaginationClassic from '../../components/PaginationClassic.vue'

const store = useNoticeStore()
const { isOpenNotification, typeNotification, messageNotification } = storeToRefs(store);

const selectedItems = ref([])

const updateSelectedItems = (selected) => {
    selectedItems.value = selected
}
</script>