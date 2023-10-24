<template>
  <!-- Page header -->
  <div class="mb-8">
    <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Pagination ✨</h1>
  </div>

  <div class="border-t border-slate-200">

    <!-- Components -->
    <div class="space-y-8 mt-8">

      <!-- Option 1 -->
      <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-6">Option 1</h2>
        <div class="px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
          <PaginationNumeric />
        </div>
      </div>

      <!-- Option 2 -->
      <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-6">Option 2</h2>
        <div class="px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
          <PaginationClassic />
        </div>
      </div>

      <!-- Option 3 -->
      <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-6">Option 3</h2>
        <div class="px-6 py-8 bg-slate-50 border border-slate-200 rounded-sm">
          <PaginationNumeric2 />
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PaginationNumeric from '../../components/PaginationNumeric.vue'
import PaginationClassic from '../../components/PaginationClassic.vue'
import PaginationNumeric2 from '../../components/PaginationNumeric2.vue'

</script>