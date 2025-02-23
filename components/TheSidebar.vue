<template>
    <aside class="w-64 h-screen bg-[#1C1C28] text-gray-300 fixed left-0 top-0 z-50 transition-transform duration-300"
           :class="{ '-translate-x-full': !isSidebarOpen }">
      <div class="p-4 flex items-center gap-2 border-b border-gray-700">
        <span class="text-xl font-semibold">Mate</span>
      </div>
      
      <nav class="p-4">
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.name"
              class="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer"
              :class="{ 'bg-gray-700': item.name === 'Inventory' }">
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </nav>
    </aside>
    
    <button @click="toggleSidebar" 
            class="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 p-2 rounded-md">
      <Bars3Icon class="w-6 h-6 text-white" />
    </button>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import {
    HomeIcon,
    ShoppingCartIcon,
    ClipboardIcon,
    CreditCardIcon,
    UsersIcon,
    BellIcon,
    QuestionMarkCircleIcon,
    Cog6ToothIcon,
    Bars3Icon
  } from '@heroicons/vue/24/outline'
  
  const isSidebarOpen = ref(false)
  
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Orders', icon: ShoppingCartIcon },
    { name: 'Inventory', icon: ClipboardIcon },
    { name: 'Payments', icon: CreditCardIcon },
    { name: 'Customers', icon: UsersIcon },
    { name: 'Notifications', icon: BellIcon },
    { name: 'Help & Support', icon: QuestionMarkCircleIcon },
    { name: 'Settings', icon: Cog6ToothIcon },
  ]
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }
  </script>
  