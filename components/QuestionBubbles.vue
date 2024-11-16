<template>
    <div class="relative w-screen h-screen overflow-hidden">
      <div
        v-for="(bubble, index) in bubbles"
        :key="index"
        :class="bubble.class"
        :style="bubble.style"
        class="bubble z-[99999px] rounded-full p-2 flex items-center justify-center text-base text-center font-bold"
      >
        {{ bubble.text }}
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import gsap from 'gsap';
  
  // Define bubbles with their initial random positions
  const bubbles = ref(
    Array.from({ length: 12 }, (_, index) => ({
    text: [
    'SFWL',
  'Ready to drop those extra pounds?',
  'What’s holding you back from losing weight?',
  'Do you dream of a healthier you?',
  'Can your favorite foods fit into weight loss?',
  'Struggling to stay on track?',
  'What’s your biggest weight loss challenge?',
  'Can small changes lead to big results?',
  'Do you want to lose weight without starving?',
  'What’s the secret to lasting weight loss?',
  'Ever wonder if exercise is enough?',
  'Can you lose weight while eating out?',
  'Do you feel stuck in your weight loss journey?',
  'What’s the best way to burn fat fast?',
  'Can stress stop you from losing weight?',
  'How do you stay consistent with your goals?',
  'Is losing weight about diet or exercise?',
  'What motivates you to lose weight?',
  'Do you need help creating a weight loss plan?',
  'Are you ready to take control of your health?',
  'What’s the key to staying motivated?',
  'Can weight loss improve your energy levels?',
  'Is it possible to enjoy weight loss?',
  'What’s your first step to a healthier you?',
  'Can you really lose weight without dieting?',
  'Do you want to feel lighter and more confident?',
  'What keeps you from starting your weight loss journey?',
  'Could today be the day you change your life?',
  'What’s the best way to track your progress?',
][index],
      class: [
        'bg-gray-600 text-gray-100 w-60 h-60',
        'bg-indigo-600 text-indigo-100 w-60 h-60',
        'bg-pink-600 text-pink-100 w-60 h-60',
        'bg-purple-600 text-purple-100 w-60 h-60',
        'bg-green-600 text-green-100 w-60 h-60',
        'bg-blue-600 text-blue-100 w-60 h-60',
        'bg-orange-600 text-orange-100 w-60 h-60',
        'bg-yellow-600 text-yellow-100 w-60 h-60',
        'bg-red-600 text-red-100 w-60 h-60',
        'bg-teal-600 text-teal-100 w-60 h-60',
        'bg-gray-600 text-gray-100 w-60 h-60',
        'bg-indigo-600 text-indigo-100 w-60 h-60',
      ][index],
      style: {
        top: `${Math.random() * 90}vh`, // Random vertical position
        left: `${Math.random() * 90}vw`, // Random horizontal position
      },
    }))
  );
  
  const animateBubbles = () => {
    // Animate each bubble
    bubbles.value.forEach((_, index) => {
      const bubbleElement = document.querySelectorAll('.bubble')[index];
      gsap.to(bubbleElement, {
        x: () => Math.random() * 200 - 100, // Move randomly in X
        y: () => Math.random() * 200 - 100, // Move randomly in Y
        duration: 5, // Slow motion
        ease: 'power1.inOut',
        repeat: -1, // Infinite
        yoyo: true, // Move back and forth
      });
    });
  };
  
  // Start animations on mount
  onMounted(() => {
    animateBubbles();
  });
  </script>
  
  <style scoped>
  .bubble {
    position: absolute;
  }
  </style>
  