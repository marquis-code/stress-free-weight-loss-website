<!-- <template>
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
   -->
<!-- 
   <template>
  <div class="relative w-screen h-screen overflow-hidden">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      :class="bubble.class"
      :style="bubble.style"
      class="bubble rounded-full p-2 flex items-center justify-center text-xs text-center font-bold"
    >
      {{ bubble.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Register GSAP plugins
gsap.registerPlugin(Draggable);

const parentWidth = window.innerWidth;
const parentHeight = window.innerHeight;

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
    ][index % 12],
    class: [
      'bg-gray-600 text-gray-100 w-20 h-20',
      'bg-indigo-600 text-indigo-100 w-20 h-20',
      'bg-pink-600 text-pink-100 w-20 h-20',
      'bg-purple-600 text-purple-100 w-20 h-20',
      'bg-green-600 text-green-100 w-20 h-20',
      'bg-blue-600 text-blue-100 w-20 h-20',
      'bg-orange-600 text-orange-100 w-20 h-20',
      'bg-yellow-600 text-yellow-100 w-20 h-20',
      'bg-red-600 text-red-100 w-20 h-20',
      'bg-teal-600 text-teal-100 w-20 h-20',
    ][index % 10],
    style: {
      top: `${Math.random() * (parentHeight - 80)}px`, // Random vertical position
      left: `${Math.random() * (parentWidth - 80)}px`, // Random horizontal position
    },
  }))
);

const animateBubbles = () => {
  bubbles.value.forEach((_, index) => {
    const bubbleElement = document.querySelectorAll('.bubble')[index];

    const bounds = {
      maxX: parentWidth - 80, // Adjust for bubble size
      maxY: parentHeight - 80,
    };

    const randomVelocity = () => Math.random() * 200 + 100;

    const moveBubble = () => {
      const velocityX = randomVelocity() * (Math.random() > 0.5 ? 1 : -1);
      const velocityY = randomVelocity() * (Math.random() > 0.5 ? 1 : -1);

      gsap.to(bubbleElement, {
        x: `+=${velocityX}`,
        y: `+=${velocityY}`,
        duration: 2,
        ease: 'power1.inOut',
        modifiers: {
          x: (x) => {
            const posX = parseFloat(x);
            if (posX < 0) return `0px`;
            if (posX > bounds.maxX) return `${bounds.maxX}px`;
            return `${posX}px`;
          },
          y: (y) => {
            const posY = parseFloat(y);
            if (posY < 0) return `0px`;
            if (posY > bounds.maxY) return `${bounds.maxY}px`;
            return `${posY}px`;
          },
        },
        onComplete: moveBubble,
      });
    };

    moveBubble();
  });
};

const enableDrag = () => {
  const bubbleElements = document.querySelectorAll('.bubble');
  Draggable.create(bubbleElements, {
    bounds: 'body', // Constrain drag within the parent container
    zIndexBoost: true,
    onDragStart() {
      gsap.to(this.target, {
        scale: 1.2, // Slightly enlarge bubble while dragging
        duration: 0.3,
      });
    },
    onDragEnd() {
      gsap.to(this.target, {
        scale: 1, // Reset scale when dragging ends
        duration: 0.3,
      });
    },
  });
};

onMounted(() => {
  animateBubbles();
  enableDrag();
});
</script>

<style scoped>
.bubble {
  position: absolute;
  cursor: grab;
  z-index: 99999;
  will-change: transform;
}
.bubble:active {
  cursor: grabbing;
}
</style> -->

<!-- <template>
  <div class="relative w-screen h-screen overflow-hidden">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      :class="bubble.class"
      :style="bubble.style"
      class="bubble rounded-full p-2 flex items-center justify-center text-base text-center font-bold"
    >
      {{ bubble.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Register GSAP plugins
gsap.registerPlugin(Draggable);

const bubbles = ref([]);

const initializeBubbles = () => {
  const parentWidth = window.innerWidth;
  const parentHeight = window.innerHeight;

  const margin = 100; // Ensure bubbles are not too close to the edges

  // Initialize bubble data with random positions within central viewable area
  bubbles.value = Array.from({ length: 10 }, (_, index) => ({
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
    ][index % 10],
    class: [
      'bg-gray-600 text-gray-100 w-40 h-40',
      'bg-indigo-600 text-indigo-100 w-40 h-40',
      'bg-pink-600 text-pink-100 w-40 h-40',
      'bg-purple-600 text-purple-100 w-40 h-40',
      'bg-green-600 text-green-100 w-40 h-40',
      'bg-blue-600 text-blue-100 w-40 h-40',
      'bg-orange-600 text-orange-100 w-40 h-40',
      'bg-yellow-600 text-yellow-100 w-40 h-40',
      'bg-red-600 text-red-100 w-40 h-40',
      'bg-teal-600 text-teal-100 w-40 h-40',
    ][index % 10],
    style: {
      top: `${margin + Math.random() * (parentHeight - margin * 2)}px`, // Stay within central vertical area
      left: `${margin + Math.random() * (parentWidth - margin * 2)}px`, // Stay within central horizontal area
      zIndex: 99999, // Very high z-index to stay on top
    },
  }));
};

const animateBubbles = () => {
  const bounds = {
    minX: 100, // Margin on the left
    maxX: window.innerWidth - 100, // Margin on the right
    minY: 100, // Margin on the top
    maxY: window.innerHeight - 100, // Margin on the bottom
  };

  const randomVelocity = () => Math.random() * 150 + 100;

  bubbles.value.forEach((_, index) => {
    const bubbleElement = document.querySelectorAll('.bubble')[index];

    const moveBubble = () => {
      const velocityX = randomVelocity() * (Math.random() > 0.5 ? 1 : -1);
      const velocityY = randomVelocity() * (Math.random() > 0.5 ? 1 : -1);

      gsap.to(bubbleElement, {
        x: `+=${velocityX}`,
        y: `+=${velocityY}`,
        duration: 3,
        ease: 'power1.inOut',
        modifiers: {
          x: (x) => {
            const posX = parseFloat(x);
            if (posX < bounds.minX) return `${bounds.minX}px`;
            if (posX > bounds.maxX) return `${bounds.maxX}px`;
            return `${posX}px`;
          },
          y: (y) => {
            const posY = parseFloat(y);
            if (posY < bounds.minY) return `${bounds.minY}px`;
            if (posY > bounds.maxY) return `${bounds.maxY}px`;
            return `${posY}px`;
          },
        },
        onComplete: moveBubble,
      });
    };

    moveBubble();
  });
};

const enableDrag = () => {
  const bubbleElements = document.querySelectorAll('.bubble');
  Draggable.create(bubbleElements, {
    bounds: {
      top: 100,
      left: 100,
      width: window.innerWidth - 200, // Keep drag within central horizontal area
      height: window.innerHeight - 200, // Keep drag within central vertical area
    },
    zIndexBoost: true,
    onDragStart() {
      gsap.to(this.target, {
        scale: 1.2, // Slightly enlarge bubble while dragging
        duration: 0.3,
      });
    },
    onDragEnd() {
      gsap.to(this.target, {
        scale: 1, // Reset scale when dragging ends
        duration: 0.3,
      });
    },
  });
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    initializeBubbles();
    setTimeout(() => {
      animateBubbles();
      enableDrag();
    }, 100); // Delay to ensure DOM is rendered
  }
});
</script>

<style scoped>
.bubble {
  position: absolute;
  cursor: grab;
  z-index: 99999;
  will-change: transform;
}
.bubble:active {
  cursor: grabbing;
}
</style> -->

<!-- <template>
  <div class="relative w-screen h-screen overflow-hidden">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      :style="bubble.style"
      :class="'bubble bubble-' + index"
    >
      {{ bubble.text }}
    </div>
    <div class="info"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { TimelineMax } from 'gsap/all';

const bubbles = ref([]);

const initializeBubbles = () => {
  bubbles.value = Array.from({ length: 10 }, (_, index) => ({
    text: `Bubble ${index + 1}`,
    style: {
      width: "150px",
      height: "150px",
      top: `${Math.random() * 80}vh`,
      left: `${Math.random() * 80}vw`,
      backgroundColor: "#fff",
    },
  }));
};

const mediaQueries = [
  { id: "x-small", media: "(max-width: 400px)", color: "#E91E63" },
  { id: "small", media: "(min-width: 400px) and (max-width: 700px)", color: "#673ab7" },
  { id: "medium", media: "(min-width: 700px) and (max-width: 1000px)", color: "#2196F3" },
  { id: "large", media: "(min-width: 1000px) and (max-width: 1300px)", color: "#4caf50" },
  { id: "x-large", media: "(min-width: 1300px)", color: "#ffc107" },
];

const startAnimations = async () => {
  await nextTick(); // Ensure DOM elements are rendered

  bubbles.value.forEach((bubble, index) => {
    const element = document.querySelector(`.bubble-${index}`);
    if (!element) {
      console.error(`Bubble element .bubble-${index} not found`);
      return;
    }

    const info = document.querySelector(".info");
    const startWidth = parseFloat(getComputedStyle(element).width);
    const startHeight = parseFloat(getComputedStyle(element).height);

    const animation = new TimelineMax({
      paused: true,
      onComplete: function () {
        this.reversed(true);
      },
      onReverseComplete: function () {
        this.reversed(false);
      },
    });

    mediaQueries.forEach((query) => {
      const list = matchMedia(query.media);
      list.addEventListener("change", (event) => {
        if (event.matches) {
          info.innerHTML = query.id + ": " + query.media;
          gsap.to(element, {
            backgroundColor: query.color,
            duration: 0.25,
          });
        }
      });
    });

    const buildAnimation = () => {
      const vw = window.innerWidth - 10;
      const vh = window.innerHeight - 10;

      animation
        .to(element, {
          rotation: 180,
          scaleX: startWidth / vw,
          scaleY: startHeight / vh,
          ease: "power1.inOut",
          duration: 4,
          yoyo: true,
          repeat: -1,
        })
        .resume();
    };

    buildAnimation();
    window.addEventListener("resize", buildAnimation);
  });
};

onMounted(() => {
  initializeBubbles();
  startAnimations();
});
</script>

<style scoped>
.bubble {
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  z-index: 9999;
}

.info {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
  font-size: 16px;
  font-weight: 700;
  padding: 15px;
  z-index: 10000;
}
</style>
 -->


 <!-- <template>
  <div class="relative w-screen h-screen overflow-hidden">
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
import { TimelineMax } from 'gsap/all';

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
];

const bubbles = ref([]);

const initializeBubbles = () => {
  const parentWidth = window.innerWidth;
  const parentHeight = window.innerHeight;

  // Spread text into bubbles
  bubbles.value = bubbleTexts.map((text, index) => ({
    text,
    style: {
      width: "250px", // Increased size
      height: "250px",
      top: `${Math.random() * 70}vh`, // Adjusted random placement
      left: `${Math.random() * 70}vw`,
      backgroundColor: "#fff",
      fontSize: "18px", // Increased font size for readability
    },
  }));
};

const startAnimations = async () => {
  await nextTick(); // Ensure DOM elements are rendered

  bubbles.value.forEach((bubble, index) => {
    const element = document.querySelector(`.bubble-${index}`);
    if (!element) return;

    gsap.to(element, {
      rotation: 360, // Full rotation
      scale: 1.1, // Slightly zoom in and out
      yoyo: true,
      repeat: -1,
      duration: 5,
      ease: "power1.inOut",
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
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  padding: 20px;
  z-index: 9999;
  color: black; /* Ensure text is visible on white background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add subtle shadow */
}
</style> -->


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
