<template>
    <div
      v-if="show"
      class="fixed z-[9999999] top-0 left-0 w-screen h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden"
    >
      <div class="container flex flex-col items-center">
        <!-- SVG Animation -->
        <svg
          id="svg-stage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-40 -180 1250 1100"
          opacity="0"
          class="w-[80%] max-w-[750px]"
        >
          <path
            class="mp"
            fill="none"
            stroke="url(#grad)"
            stroke-width="4"
            stroke-dasharray="1000"
            stroke-dashoffset="1000"
            d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
          />
          <g class="plane">
            <path fill="url(#grad)" opacity="0.3" d="m82.8 35 215.9 94.6L79 92l3.8-57Z" />
            <path fill="url(#grad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
            <path fill="url(#grad)" opacity="0.3" d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z" />
            <path fill="url(#grad)" d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z" />
          </g>
          <defs>
            <linearGradient id="grad" x1="154" x2="160" y1="49" y2="132" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="rgb(255, 135, 9)" />
              <stop offset="1" stop-color="rgb(247, 189, 248)" />
            </linearGradient>
          </defs>
        </svg>
  
        <!-- Welcome Text -->
        <p class="mt-8 text-center text-white text-lg sm:text-xl lg:text-2xl font-semibold">
          Welcome to Stress-Free Weight Loss with Dr. Ada
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import gsap from 'gsap';
  import { MotionPathPlugin } from 'gsap/all';
  
  // Register GSAP Plugins
  gsap.registerPlugin(MotionPathPlugin);
  
  // Splash screen visibility
  const show = ref(true);
  
  onMounted(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } });
  
    // Animate the plane along the motion path
    tl.fromTo(
      '.plane',
      {
        scale: 0.6,
      },
      {
        duration: 4,
        scale: 1.2,
        motionPath: {
          path: '.mp',
          align: '.mp',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      },
      0
    )
      .to('#svg-stage', { duration: 0.7, opacity: 1 }, 0.25)
      .fromTo(
        '.mp',
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 3.8 },
        0.28
      )
      .to('.mp', { duration: 2, strokeDasharray: '94% 94%', ease: 'power2' }, '-=2')
      .to('#svg-stage', { duration: 0.7, opacity: 0 }, '-=0.9');
  
    // Hide splash screen after 6 seconds
    setTimeout(() => {
      show.value = false;
    }, 6000);
  });
  
  // Cleanup animation on unmount
  onUnmounted(() => {
    gsap.killTweensOf('.plane');
    gsap.killTweensOf('.mp');
    gsap.killTweensOf('#svg-stage');
  });
  </script>
  
  <style scoped>
  /* No additional scoped styles are required */
  </style>
  