<template>
    <!-- component -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->
<main class="bg-gray-900 pt-20">
    <div class="mx-auto max-w-4xl text-center bg-gray-900 z-50">
    <h2 class="text-base/7 font-semibold text-white">Pricing</h2>
    <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Choose the right plan</p>
  </div>
<main class="bg-gray-900 pt-60 lg:pt-96 items-center">

<div class="container mx-auto lg:flex space-y-10 lg:space-y-0 justify-center lg:gap-x-32 pl-56 lg:pl-60">
    <main class="">
    <!-- <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400"></div> -->

    <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-gray-900"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">2021.09.01</header>

        <div>
            <p class="text-center text-5xl font-extrabold text-gray-900">Basic Coaching</p>
            <p class="text-center text-4xl font-extrabold text-[#FE5401]">{Individual and Group}</p>
        </div>

        <footer class="mb-10 flex justify-center">
            <!-- <button @click="router.push('/questionaire')" class="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                <span>Start</span>
                <i class="fas fa-hand-peace text-xl"></i>
            </button> -->
            <NuxtLink to="/questionaire" class="group relative inline-block focus:outline-none focus:ring mt-10">
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
  Get started
  </span>
</NuxtLink>
        </footer>
    </div>
</main>

<main class="">
    <!-- <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400"></div> -->

    <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-gray-900"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">2021.09.01</header>

        <div>
            <p class="text-center text-5xl font-extrabold text-gray-900">Medium Coaching</p>
            <p class="text-center text-4xl font-extrabold text-[#FE5401]">{Individual and Group}</p>
        </div>

        <footer class="mb-10 flex justify-center">
            <!-- <button @click="router.push('/questionaire')" class="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                <span>Start</span>
                <i class="fas fa-hand-peace text-xl"></i>
            </button> -->
            <NuxtLink to="/questionaire" class="group relative inline-block focus:outline-none focus:ring mt-10">
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
  Get started
  </span>
</NuxtLink>
        </footer>
    </div>
</main>

<main class="">
    <!-- <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400"></div> -->

    <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0">
        <div class="flex justify-end">
            <div class="h-4 w-4 rounded-full bg-gray-900"></div>
        </div>

        <header class="text-center text-xl font-extrabold text-gray-600">2021.09.01</header>

        <div>
            <p class="text-center text-5xl font-extrabold text-gray-900">Premium Coaching</p>
            <p class="text-center text-4xl font-extrabold text-[#FE5401]">{Individual}</p>
        </div>

        <footer class="mb-10 flex justify-center">
            <!-- <button @click="router.push('/questionaire')" class="flex items-baseline gap-2 rounded-lg bg-[#FE5401] px-4 py-2.5 text-xl font-bold text-white hover:bg-[#FF7308]">
                <span>Start</span>
                <i class="fas fa-hand-peace text-xl"></i>
            </button> -->
            <NuxtLink to="/questionaire" class="group relative inline-block focus:outline-none focus:ring mt-10">
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
  Get started
  </span>
</NuxtLink>
        </footer>
    </div>
</main>
</div>
</main>
</main>
</template>

<script setup lang="ts">
const router = useRouter()
</script>