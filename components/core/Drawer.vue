<template>
    <div v-if="show" class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
  
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full lg:pl-10 sm:pl-16">
          <!--
            Slide-over panel, show/hide based on slide-over state.
  
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
          <div class="pointer-events-auto w-screen max-w-2xl">
            <form class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="flex-1">
                <!-- Header -->
                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between space-x-3">
                  <div class="flex justify-between  w-full">
                    <slot name="header"></slot>
                    <button @click="emit('close')" type="button" class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                  </div>
                    
                    <!-- <div class="space-y-1">
                      <h2 class="text-base font-semibold text-gray-900" id="slide-over-title">New Activity</h2>
                      <p class="text-sm text-gray-500">Get started by filling in the information below to create your new project.</p>
                    </div> -->
                    <div class="flex h-7 items-center">
                      <button @click="emit('close')" type="button" class="relative text-gray-400 hover:text-gray-500">
                        <span class="absolute -inset-2.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <!-- Divider container -->
                 <slot name="content"></slot>
              </div>
  
              <!-- Action buttons -->
              <!-- <div class="shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                <div class="flex justify-end space-x-3">
                  <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                  <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                </div>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
 const props = defineProps({
    show: {
        type: Boolean
    }
 })

 const emit = defineEmits(['close'])
</script>

