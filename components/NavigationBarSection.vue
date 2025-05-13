<template>
    <header class="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300" 
            :class="[scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4']">
      <nav class="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
        <!-- Left section (visible on desktop) -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-start">
          <NuxtLink href="#coaching-plans" class="text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
            Coaching
          </NuxtLink>
          <NuxtLink href="#features" class="ml-8 text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
            Features
          </NuxtLink>
        </div>
        
        <!-- Center logo -->
        <div class="flex-1 flex justify-center">
          <a href="#" class="transition-transform duration-300 hover:scale-105">
            <span class="sr-only">SFWL</span>
            <img 
              :class="[scrolled ? 'h-14 w-auto' : 'h-20 w-auto']" 
              class="transition-all duration-300" 
              src="@/assets/logo.png" 
              alt="SFWL Logo"
            >
          </a>
        </div>
        
        <!-- Right section (visible on desktop) -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink href="#services" class="text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
            Services
          </NuxtLink>
          <NuxtLink href="#testimonials" class="ml-8 text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
            Testimonials
          </NuxtLink>
          <NuxtLink href="#contact-form" class="ml-8 text-sm/6 font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </NuxtLink>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button 
            @click="toggleMobileMenu" 
            type="button" 
            class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-expanded="false"
          >
            <span class="sr-only">{{ isOpen ? 'Close menu' : 'Open menu' }}</span>
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              aria-hidden="true" 
              data-slot="icon"
            >
              <path 
                v-if="!isOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </nav>
      
      <!-- Mobile menu -->
      <div 
        class="fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-col h-full overflow-y-auto">
          <!-- Mobile menu header -->
          <div class="flex items-center justify-between p-6">
            <a href="#" class="transition-transform duration-300 hover:scale-105">
              <span class="sr-only">SFWL</span>
              <img class="h-14 w-auto" src="@/assets/logo.png" alt="SFWL Logo">
            </a>
            <button 
              @click="toggleMobileMenu" 
              type="button" 
              class="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <span class="sr-only">Close menu</span>
              <svg 
                class="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                aria-hidden="true" 
                data-slot="icon"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          <!-- Mobile menu links -->
          <div class="flex-1 flex flex-col justify-center px-6 py-8">
            <div class="space-y-6">
              <NuxtLink 
                v-for="(link, index) in navLinks" 
                :key="link.href"
                @click="closeMobileMenu" 
                :href="link.href" 
                class="block text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-all duration-300 transform hover:translate-x-2"
                :style="{ transitionDelay: `${index * 50}ms` }"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Mobile menu footer -->
          <div class="p-6 border-t border-gray-200">
            <NuxtLink 
              @click="closeMobileMenu" 
              href="#contact-form" 
              class="flex items-center justify-center w-full py-3 px-4 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // State
  const isOpen = ref(false)
  const scrolled = ref(false)
  
  // Navigation links
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Coaching', href: '#coaching-plans' },
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' }
  ]
  
  // Methods
  const toggleMobileMenu = () => {
    isOpen.value = !isOpen.value
    
    // Prevent scrolling when menu is open
    if (isOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
  
  const closeMobileMenu = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }
  
  // Handle scroll events to change navbar appearance
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial scroll position
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = '' // Ensure scroll is restored
  })
  </script>
  
  <style scoped>
  /* Optional: Add any additional styles here */
  .router-link-active {
    color: #4f46e5;
  }
  
  /* Animation for mobile menu links */
  .translate-x-full {
    transform: translateX(100%);
  }
  
  /* Prevent content shift when scrollbar disappears */
  @media (min-width: 1024px) {
    body {
      overflow-y: scroll;
    }
  }
  </style>