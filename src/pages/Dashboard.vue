<template>
  <!-- Welcome banner -->
  <WelcomeBanner />

  <!-- Dashboard actions -->
  <div class="sm:flex sm:justify-between sm:items-center mb-8">

    <!-- Left: Avatars -->
    <DashboardAvatars />

    <!-- Right: Actions -->
    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

      <!-- Filter button -->
      <FilterButton align="right" />
      <!-- Datepicker built with flatpickr -->
      <Datepicker align="right" />
      <!-- Add view button -->
      <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
        <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
          <path
            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span class="hidden xs:block ml-2">Add View</span>
      </button>
    </div>

  </div>

  <!-- Cards -->
  <div class="grid grid-cols-12 gap-6">
    <!-- Line chart (Real Time Value) -->
    <DashboardCard05 />
    <!-- Doughnut chart (Top Countries) -->
    <DashboardCard06 />
    <!-- Table (Top Channels) -->
    <DashboardCard07 />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner.vue'
import DashboardAvatars from '../partials/dashboard/DashboardAvatars.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Datepicker from '../components/Datepicker.vue'
import DashboardCard05 from '../partials/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../partials/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../partials/dashboard/DashboardCard07.vue'

</script>