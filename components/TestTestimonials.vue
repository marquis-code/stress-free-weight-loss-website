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
      text: "Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months.",
      name: "Halimah",
      position: "CEO of Workcation",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: "Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly.",
      name: "Jamiu",
      position: "Manager at TechWorld",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: "Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.",
      name: "Nura",
      position: "Designer at CreativeStudio",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: "I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.",
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
  