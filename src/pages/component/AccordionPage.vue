<template>
  <!-- Page header -->
  <div class="mb-8">
    <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Accordion ✨</h1>
  </div>

  <div class="border-t border-slate-200">

    <!-- Components -->
    <div class="space-y-8 mt-8">

      <!-- Basic Accordion -->
      <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-6">Basic Accordion</h2>
        <AccordionBasic title="Accordion Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </AccordionBasic>
      </div>

      <!-- Table Row with Accordion -->
      <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-6">Table Row with Accordion</h2>
        <!-- Start -->
        <div class="rounded-sm border border-slate-200">
          <div class="overflow-x-auto">
            <table class="table-auto w-full divide-y divide-slate-200">
              <AccordionTableItem v-for="item in items" :key="item.id" :item="item" />
            </table>
          </div>
        </div>
        <!-- End -->
      </div>

      <!-- Rich Table Row with Accordion -->
      <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-6">Rich Table Row with Accordion</h2>
        <!-- Start -->
        <div class="rounded-sm border border-slate-200">
          <div class="overflow-x-auto">
            <table class="table-auto w-full divide-y divide-slate-200">
              <AccordionTableRichItem v-for="item in items2" :key="item.id" :item="item" />
            </table>
          </div>
        </div>
        <!-- End -->
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import AccordionBasic from '../../components/AccordionBasic.vue'
import AccordionTableItem from '../../components/AccordionTableItem.vue'
import AccordionTableRichItem from '../../components/AccordionTableRichItem.vue'

import Image01 from '../../images/user-40-07.jpg'

const items = ref([
  {
    id: '0',
    image: Image01,
    customer: 'Mark Cameron',
    total: '$129.00',
    status: 'Refunded',
    items: '1',
    location: '🇲🇽 New Mexico, MX',
    type: 'Subscription',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
])

const items2 = ref([
  {
    id: '0',
    image: Image01,
    customer: 'Mark Cameron',
    email: 'mark.cameron@app.com',
    location: '🇬🇧 London, UK',
    date: '22/01/2021',
    amount: '+249.88',
    descriptionTitle: 'Excepteur sint occaecat cupidatat.',
    descriptionBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
])
</script>