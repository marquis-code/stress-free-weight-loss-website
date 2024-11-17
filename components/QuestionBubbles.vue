<template>
  <div class="relative w-screen h-screen overflow-hidden w-full">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      :style="bubble.style"
      :class="'bubble bubble-' + index"
    >
      {{ bubble.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Register GSAP Draggable plugin
gsap.registerPlugin(Draggable);

// Text for the bubbles
const bubbleTexts = [
  'SFWL',
  'Ready to drop those extra pounds?',
  'What’s holding you back from losing weight?',
  'Do you dream of a healthier you?',
  'Can your favorite foods fit into weight loss?',
  'Struggling to stay on track?',
  'What’s your biggest weight loss challenge?',
  'Can small changes lead to big results?',
  'Do you want to lose weight without starving?',
  // 'What’s the secret to lasting weight loss?',
  // 'Ever wonder if exercise is enough?',
  // 'Can you lose weight while eating out?',
  // 'Do you feel stuck in your weight loss journey?',
  // 'What’s the best way to burn fat fast?',
  // 'Can stress stop you from losing weight?',
  // 'How do you stay consistent with your goals?',
  // 'Is losing weight about diet or exercise?',
  // 'What motivates you to lose weight?',
  // 'Do you need help creating a weight loss plan?',
  // 'Are you ready to take control of your health?',
  // 'What’s the key to staying motivated?',
  // 'Can weight loss improve your energy levels?',
  // 'Is it possible to enjoy weight loss?',
  // 'What’s your first step to a healthier you?',
  // 'Can you really lose weight without dieting?',
  // 'Do you want to feel lighter and more confident?',
  // 'What keeps you from starting your weight loss journey?',
  // 'Could today be the day you change your life?',
  // 'What’s the best way to track your progress?',
];

// Utility function to generate random colors
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const bubbles = ref([]);

const initializeBubbles = () => {
  const parentWidth = window.innerWidth;
  const parentHeight = window.innerHeight;

  // Spread text into bubbles and assign random colors
  bubbles.value = bubbleTexts.map((text) => ({
    text,
    style: {
      width: "250px", // Increased size for readability
      height: "250px",
      top: `${Math.random() * 70}vh`, // Random position within viewport
      left: `${Math.random() * 70}vw`,
      backgroundColor: generateRandomColor(), // Assign random color
      fontSize: "18px", // Font size for better visibility
      color: "#FFF", // Ensure text contrast
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
      position: "absolute",
    },
  }));
};

const startAnimations = async () => {
  await nextTick(); // Ensure DOM elements are rendered

  bubbles.value.forEach((bubble, index) => {
    const element = document.querySelector(`.bubble-${index}`);
    if (!element) return;

    // Add rotation and scaling animations
    gsap.to(element, {
      rotation: 360,
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      duration: 5,
      ease: "power1.inOut",
    });

    // Enable draggable functionality
    Draggable.create(element, {
      bounds: "body", // Constrain within viewport
      onPress: () => {
        gsap.to(element, { scale: 1.3, duration: 0.3 }); // Highlight on drag
      },
      onRelease: () => {
        gsap.to(element, { scale: 1, duration: 0.3 }); // Restore size after drag
      },
    });
  });
};

onMounted(() => {
  initializeBubbles();
  startAnimations();
});
</script>

<style scoped>
.bubble {
  cursor: grab;
  will-change: transform;
  z-index: 999;
}

.bubble:active {
  cursor: grabbing;
}
</style>
