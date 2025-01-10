<template>
    <div class="w-full overflow-hidden bg-gray-25 py-32">
        <section class="pl-4 lg:pl-32">
        <div class="inline-block px-4 py-2.5 mb-6 bg-gray-100 rounded-full">
        <span class="text-green-500 font-medium">Testimonials</span>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-medium text-gray-900 mb-4 -mt-2">
        Don’t just take our word for it
      </h1>
      
      <p class="text-gray-600  mb-16">
        Hear from some of our amazing customers who have benefited from our program.
      </p>
     </section>
      <div class="relative">
        <!-- First row - Left to Right -->
        <div 
          class="flex animate-scroll-left"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials1" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-sm font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icon/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-10 h-10 rounded-full border object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 text-sm font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Second row - Right to Left -->
        <div 
          class="flex animate-scroll-right mt-6"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials2" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-sm font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icon/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 text-sm font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import user from '@/assets/icon/user-avatar.svg'
  interface Testimonial {
    id: number;
    content: string;
    name: string;
    role: string;
    avatar: string;
  }
  
  const testimonials1: Testimonial[] = [
    {
      id: 1,
      content: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: user 
    },
    {
      id: 2,
      content: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: 'Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.',
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    // Add more testimonials to ensure continuous scroll
  ];
  
  const testimonials2: Testimonial[] = [
  {
      id: 1,
      content: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: 'Thank you so much Dr Ada i started the weight loss program with 110kg and today am currently on 102.5kg. Looking forward to loosing more weight.Thank you you  so much Dr Ada.',
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 1,
      content: 'Thank you so much for for adding me. i appreciate you for a job welldone. In making me loose 20kg in  4 1/2 months',
      name: "Enioluwa Adeoluwa",
      role: "Content Creator and EU Ambassador",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: 'Thank you so much Dr Ada. I started the coaching program in 120kg and in 4 months i have lost 18kg. i went to get new clothes today and it fits pefectly',
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      content: `I was so happy when i saw i'm now weighing 75kg. My trousers and clothes fit better and i no longer feel unnecessarily hungry. i have some Kgs to go, i won't stop until i hit my goal.`,
      name: "Nego Amos",
      role: "General Manager of Marygallup Consultancy",
      avatar: user 
      // avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
  ];

  const pauseScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'paused';
};

const resumeScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'running';
};
  </script>
  
  <style scoped>
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .animate-scroll-left {
    animation: scroll-left linear infinite;
    animation-play-state: running;
  }
  
  .animate-scroll-right {
    animation: scroll-right linear infinite;
    animation-play-state: running;
  }
  
  /* Add subtle hover effect to cards */
  .group:hover .hover\:shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  </style>