<template>
    <main>
      <div class="bg-white py-16 overflow-hidden relative">
        <!-- Background decoration -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full opacity-30 blur-3xl"></div>
        
        <div class="mx-auto max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10 relative z-10">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <!-- Left column with title and contact info -->
            <div 
              class="lg:col-span-5" 
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            >
              <h2 class="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
              <p class="mt-6 max-w-2xl text-base leading-7 text-gray-800">
                Have a different question and can't find the answer you're looking for? Reach out to our support team by 
                <a href="https://wa.me/2347030338088" class="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                  sending us a WhatsApp message
                </a> and we'll get back to you as soon as we can.
              </p>
              
              <!-- Illustration -->
              <div 
                class="hidden lg:block mt-12"
                v-motion
                :initial="{ opacity: 0, scale: 0.8 }"
                :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 800 } }"
              >
                <!-- <img src="/faq-illustration.svg" alt="FAQ Illustration" class="w-full max-w-xs mx-auto" /> -->
              </div>
            </div>
            
            <!-- Right column with FAQ items -->
            <div class="lg:col-span-7 lg:mt-0 space-y-8 pt-6 md:pt-0">
              <TransitionGroup 
                name="faq-list" 
                tag="div" 
                class="space-y-8"
                v-motion
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 800 } }"
              >
                <div 
                  v-for="(item, index) in faqs" 
                  :key="item.id" 
                  class="overflow-hidden border-b border-gray-100"
                  v-motion
                  :initial="{ opacity: 0, x: 40 }"
                  :enter="{ opacity: 1, x: 0, transition: { delay: 300 + (index * 150), duration: 800 } }"
                >
                  <button
                    class="w-full text-left py-2 transition-colors duration-300 flex justify-between items-center pb-9 hover:text-indigo-500"
                    @click="toggle(item.id)"
                    :aria-expanded="isOpen(item.id)"
                    :aria-controls="`faq-answer-${item.id}`"
                  >
                    <p class="text-gray-800 font-semibold text-base md:text-lg transition-all duration-300" 
                       :class="{ 'text-indigo-500': isOpen(item.id) }">
                      {{ item.question }}
                    </p>
                    <span class="relative h-5 w-5 shrink-0 transition-transform duration-300" 
                          :class="{ 'rotate-180': isOpen(item.id) }">
                      <svg 
                        class="h-6 w-6 transition-opacity duration-300" 
                        :class="{ 'opacity-0': isOpen(item.id), 'opacity-100': !isOpen(item.id) }"
                        fill="none" 
                        viewBox="0 0 24 24"
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                      <svg 
                        class="absolute top-0 left-0 h-6 w-6 transition-opacity duration-300" 
                        :class="{ 'opacity-100': isOpen(item.id), 'opacity-0': !isOpen(item.id) }"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5"
                        stroke="currentColor" 
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </button>
                  <Transition
                    name="faq-answer"
                    @enter="setHeight"
                    @before-leave="beforeLeave"
                    @leave="leave"
                  >
                    <div 
                      v-if="isOpen(item.id)" 
                      class="overflow-hidden transition-all duration-500 pb-3 bg-gray-50 rounded-lg"
                      :id="`faq-answer-${item.id}`"
                      ref="answerRefs"
                    >
                      <p class="p-4 text-gray-700 text-sm font-light md:text-base">
                        {{ item.answer }}
                      </p>
                    </div>
                  </Transition>
                </div>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template> 
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  const faqs = [
      {
          id: 1, 
          question: 'What\'s the most effective diet for weight loss?', 
          answer: `The most effective diet for weight loss is one that you can sustain over time. Focus on a balanced approach that includes lean proteins, whole grains, fruits, vegetables, and healthy fats. Avoid extreme diets that are hard to maintain and prioritize a plan that fits your lifestyle.`
      },
      {
          id: 2, 
          question: 'How many calories should I eat to lose weight?', 
          answer: `The number of calories you should eat depends on your age, gender, activity level, and weight-loss goals. A common guideline is to create a calorie deficit of 500–1000 calories per day to lose about 0.5–1 kilogram (1–2 pounds) per week. Use a calorie calculator to determine your personalized needs.`
      },
      {
          id: 3,
          question: `Is it better to focus on diet or exercise for weight loss?`,
          answer: `Both diet and exercise are important for weight loss, but diet tends to have a greater impact. Combining a healthy diet with regular physical activity is the best approach for long-term success. Start by making small, sustainable changes to both your eating habits and your activity level.`
      },
      {
          id: 4,
          question: `What are some healthy snacks for weight loss?`,
          answer: `Healthy snacks for weight loss include options like fresh fruit, unsalted nuts, low-fat yogurt, hard-boiled eggs, and vegetables with hummus. These snacks are nutrient-dense and help keep you full between meals without adding excess calories.`
      },
      {
          id: 5,
          question: `How can I lose weight without feeling hungry all the time?`,
          answer: `To avoid feeling hungry while losing weight, focus on eating high-fiber foods like fruits, vegetables, and whole grains, as well as lean proteins. These foods help you feel fuller for longer. Drinking plenty of water, eating smaller meals more frequently, and getting enough sleep can also help manage hunger.`
      }
  ];
  
  const openId = ref<number | null>(null);
  const answerRefs = ref<HTMLElement[]>([]);
  
  // Improved animation functions
  const setHeight = (el: HTMLElement) => {
    // Set initial height to 0
    el.style.height = '0';
    
    // Force a reflow
    void el.offsetHeight;
    
    // Set the height to the scroll height to trigger the animation
    el.style.height = `${el.scrollHeight}px`;
    
    // After animation completes, set height to auto to allow for content changes
    const onTransitionEnd = () => {
      el.style.height = 'auto';
      el.removeEventListener('transitionend', onTransitionEnd);
    };
    
    el.addEventListener('transitionend', onTransitionEnd);
  };
  
  const beforeLeave = (el: HTMLElement) => {
    // Set height to the current scroll height before animating to 0
    el.style.height = `${el.scrollHeight}px`;
    
    // Force a reflow
    void el.offsetHeight;
  };
  
  const leave = (el: HTMLElement) => {
    // Animate to height 0
    el.style.height = '0';
  };
  
  const toggle = (id: number) => {
    openId.value = openId.value === id ? null : id;
  };
  
  const isOpen = (id: number) => {
    return openId.value === id;
  };
  
  // Auto-open the first FAQ item on mount for demonstration
  onMounted(() => {
    // Uncomment to auto-open first item
    // setTimeout(() => {
    //   openId.value = 1;
    // }, 1000);
  });
  </script>
  
  <style scoped>
  /* Transition for the FAQ list */
  .faq-list-enter-active,
  .faq-list-leave-active {
    transition: all 0.5s ease;
  }
  .faq-list-enter-from,
  .faq-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  
  /* Transition for the FAQ answers */
  .faq-answer-enter-active,
  .faq-answer-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  
  .faq-answer-enter-from,
  .faq-answer-leave-to {
    height: 0;
    opacity: 0.8;
  }
  
  /* Pulse animation for the WhatsApp link */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  a.text-indigo-400:hover {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  </style>
  