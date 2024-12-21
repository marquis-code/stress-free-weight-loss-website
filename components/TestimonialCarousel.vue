<template>
    <div class="overflow-hidden bg-gray-100 py-10">
      <div class="relative flex flex-col gap-10">
        <!-- First Row -->
        <div
          class="flex gap-5 animate-slide-right"
          :style="{ animationDuration: `${animationSpeed}s` }"
        >
          <div
            v-for="(testimonial, index) in firstRow"
            :key="'first-' + index"
            class="testimonial-card h- w-80"
          >
            <blockquote>
              <p class="break-words text-sm">{{ testimonial.text }}</p>
            </blockquote>
            <footer class="flex items-center gap-2 mt-4">
              <img
                class="w-10 h-10 rounded-full"
                :src="testimonial.image"
                :alt="testimonial.name"
              />
              <div>
                <strong>{{ testimonial.name }}</strong>
                <!-- <small class="text-sm text-gray-500">
                  {{ testimonial.role }}
                </small> -->
              </div>
            </footer>
          </div>
        </div>
  
        <!-- Second Row -->
        <div
          class="flex gap-5 whitespace-nowrap animate-slide-left"
          :style="{ animationDuration: `${animationSpeed}s` }"
        >
          <div
            v-for="(testimonial, index) in secondRow"
            :key="'second-' + index"
            class="testimonial-card h-44 w-80"
          >
            <blockquote>
              <p class="break-words">{{ testimonial.text }}</p>
            </blockquote>
            <footer class="flex items-center gap-2 mt-4">
              <img
                class="w-10 h-10 rounded-full"
                :src="testimonial.image"
                :alt="testimonial.name"
              />
              <div>
                <strong>{{ testimonial.name }}</strong>
                <small class="text-sm text-gray-500">
                  {{ testimonial.role }}
                </small>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const animationSpeed = 20 // Adjust speed in seconds
  
  const firstRow = ref([
    {
      text: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    }
    // Add more testimonials
  ])
  
  const secondRow = ref([
  {
      text: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: 'Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.',
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    },
    {
      text: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: 'Chijioke (General Show)',
      role: 'Filmmaker',
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    }
  ])
  </script>
  
  <style scoped>
  .testimonial-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  @keyframes slide-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes slide-left {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-slide-right {
    animation: slide-right linear infinite;
  }
  
  .animate-slide-left {
    animation: slide-left linear infinite;
  }
  </style>
  