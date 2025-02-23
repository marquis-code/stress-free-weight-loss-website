// pages/index.vue
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Main layout container -->
    <div class="flex">
      <!-- Sidebar -->
      <TheSidebar :is-open="isSidebarOpen" @toggle="toggleSidebar" />
      
      <!-- Main content -->
      <div class="flex-1 transition-all duration-300"
           :class="{ 'lg:ml-64': isSidebarOpen }">
        <!-- Top navigation bar -->
        <nav class="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 class="text-xl font-semibold">Inventory</h1>
          <div class="flex items-center gap-4">
            <button class="text-gray-600 hover:text-gray-900">
              <MagnifyingGlassIcon class="w-6 h-6" />
            </button>
            <button class="text-gray-600 hover:text-gray-900">
              <BellIcon class="w-6 h-6" />
              <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </nav>

        <!-- Inventory content -->
        <InventoryTable @select-item="openProductDrawer" />
      </div>

      <!-- Product drawer -->
      <ProductDrawer 
        :is-open="isDrawerOpen"
        :product="selectedProduct"
        @close="closeProductDrawer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/vue/24/outline'
import type  InventoryItem from '@/types/dashboard'

// State management
const isSidebarOpen = ref(true)
const isDrawerOpen = ref(false)
const selectedProduct = ref<InventoryItem | null>(null)

// Event handlers
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const openProductDrawer = (item: InventoryItem) => {
  selectedProduct.value = item
  isDrawerOpen.value = true
}

const closeProductDrawer = () => {
  isDrawerOpen.value = false
  selectedProduct.value = null
}
</script>

<style scoped>
/* Add any page-specific styles here */
</style>