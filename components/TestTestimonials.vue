<!-- TestimonialSection.vue -->
<template>
    <div class="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                :src="currentTestimonial.image"
                alt="testimonial image"
                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl transition-opacity duration-1000 ease-in-out"
                :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
              />
            </div>
          </div>
          <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure class="relative isolate pt-6 sm:pt-12">
              <blockquote class="text-xl/8 font-semibold text-white sm:text-2xl/9 transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }">
                <p>{{ currentTestimonial.text }}</p>
              </blockquote>
              <figcaption class="mt-8 text-base transition-opacity duration-1000 ease-in-out" :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }">
                <div class="font-semibold text-white">{{ currentTestimonial.name }}</div>
                <div class="mt-1 text-gray-400">{{ currentTestimonial.position }}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  // List of testimonials with random text, images, and author details
  const testimonials = ref([
    {
      text: "It went well. I did not have a reason to be concerned or worried even the journey was a long one. The driver was polite and careful with his driving.",
      name: "Halimah",
      position: "CEO of Workcation",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: "I had a great time riding with Nextride, The driver arrived on time and he was thoroughly professional throughout the journey. Thank you. Looking forward to using Nextride again :)",
      name: "Jamiu",
      position: "Manager at TechWorld",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: "I Had a seamless ride with Nextride, even though I had to delay the driver a bit he patiently waited for me and he was very polite and friendly, the car was clean and comfortable which made my trip awesome.",
      name: "Nura",
      position: "Designer at CreativeStudio",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: "Nextride provided a smooth journey. Despite a slight delay on my end, the driver patiently waited, displaying politeness and friendliness. The clean and comfortable car added to the overall awesomeness of my trip.",
      name: "Doyin",
      position: "Designer at CreativeStudio",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    }
  ])
  
  const currentIndex = ref(0)
  const currentTestimonial = ref(testimonials.value[currentIndex.value])
  const isVisible = ref(true)
  let interval: number
  
  // Update the current testimonial at intervals
  const updateTestimonial = () => {
    isVisible.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
      currentTestimonial.value = testimonials.value[currentIndex.value]
      isVisible.value = true
    }, 1000) // Transition duration matches the CSS duration
  }
  
  // Start interval on mount and cleanup on unmount
  onMounted(() => {
    interval = setInterval(updateTestimonial, 5000) // Change every 5 seconds
  })
  
  onBeforeUnmount(() => {
    clearInterval(interval)
  })
  </script>
  
  <style scoped>
  .opacity-0 {
    opacity: 0;
  }
  .opacity-100 {
    opacity: 1;
  }
  </style>
  