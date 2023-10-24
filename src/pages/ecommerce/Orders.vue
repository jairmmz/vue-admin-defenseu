<template>
  <!-- Page header -->
  <div class="sm:flex sm:justify-between sm:items-center mb-8">

    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
      <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Orders ✨</h1>
    </div>

    <!-- Right: Actions  -->
    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <!-- Delete button -->
      <DeleteButton :selectedItems="selectedItems" />
      <!-- Dropdown -->
      <DateSelect />
      <!-- Filter button -->
      <FilterButton align="right" />
      <!-- Add order button -->
      <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
          <path
            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span class="hidden xs:block ml-2">Add Order</span>
      </button>
    </div>

  </div>

  <!-- Table -->
  <OrdersTable @change-selection="updateSelectedItems($event)" />

  <!-- Pagination -->
  <div class="mt-8">
    <PaginationClassic />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DeleteButton from '../../partials/actions/DeleteButton.vue'
import DateSelect from '../../components/DateSelect.vue'
import FilterButton from '../../components/DropdownFilter.vue'
import OrdersTable from '../../partials/orders/OrdersTable.vue'
import PaginationClassic from '../../components/PaginationClassic.vue'

const selectedItems = ref([])

const updateSelectedItems = (selected) => {
  selectedItems.value = selected
}
</script>