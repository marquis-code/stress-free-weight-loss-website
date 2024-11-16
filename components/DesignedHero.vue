<template>
  <section
    class="relative relative isolate overflow-hidden bg-gray-50 min-h-screen container mx-auto my-4 rounded-3xl flex items-center justify-center"
  >
    <svg
      class="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <div
      class="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center"
    >
      <!-- Left: Carousel -->
      <div
        class="relative overflow-hidden border-[10px] border-gray-900 rounded-lg shadow-lg"
      >
        <div
          class="flex transition-transform duration-[10000ms] ease-linear"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="w-full h-80 lg:h-96 object-cover"
          />
        </div>
      </div>

      <!-- Right: Dynamic Text -->
      <div>
        <h1 class="text-2xl font-bold leading-tight mb-6">
          {{ currentContent.title }}
        </h1>
        <p class="text-gray-600 mb-8">{{ currentContent.description }}</p>
        <ul class="space-y-6">
          <li
            v-for="(item, index) in currentContent.features"
            :key="index"
            class="flex items-start space-x-4"
          >
            <div class="text-blue-600 text-xl">
              <component :is="item.icon" />
            </div>
            <div>
              <h3 class="font-semibold text-lg">{{ item.title }}</h3>
              <p class="text-gray-500">{{ item.description }}</p>
            </div>
          </li>
        </ul>
        <div class="mt-4">
      <a
        class="group relative inline-block focus:outline-none focus:ring"
        href="#coaching-options"
      >
        <span
          class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        ></span>

        <span
          class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
        >
          Apply now > 
        </span>
      </a>
    </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import image1 from "@/assets/weight1.jpg";
import image2 from "@/assets/weight2.jpg";
import image3 from "@/assets/weight3.jpg";
import image4 from "@/assets/weight4.jpg";
import image5 from "@/assets/weight5.jpg";
import image6 from "@/assets/weight6.jpg";
import image7 from "@/assets/weight7.jpg";
import image8 from "@/assets/weight8.jpg";
import image9 from "@/assets/personalized-diet1.jpg";
import image10 from "@/assets/personalized-diet2.jpg";
import image11 from "@/assets/personalized-diet3.jpg";
import image12 from "@/assets/personalized-diet4.jpg";

// Image and content data arrays
const images = [
  { src: image1, alt: "Fitness 1" },
  { src: image2, alt: "Fitness 2" },
  { src: image3, alt: "Fitness 3" },
  { src: image4, alt: "Fitness 3" },
  { src: image5, alt: "Fitness 3" },
  { src: image6, alt: "Fitness 3" },
  { src: image7, alt: "Fitness 3" },
  { src: image8, alt: "Fitness 3" },
  { src: image9, alt: "Fitness 3" },
  { src: image10, alt: "Fitness 3" },
  { src: image11, alt: "Fitness 3" },
  { src: image12, alt: "Fitness 3" },
];

const content = [
  {
    title: "Discover Personalized Nutrition Plans for Your Unique Needs",
    description:
      "Our nutrition experts design tailored meal plans to help you achieve your weight loss goals while meeting your individual needs.",
    features: [
      {
        //   icon: CloudIcon,
        title: "Tailored Meal",
        description:
          " Enjoy delicious and satisfying meals designed to support your weight loss journey.",
      },
      {
        //   icon: LockClosedIcon,
        title: "Personalized Support",
        description:
          "Receive guidance and motivation from our experienced professionals throughout your weight loss journey.",
      },
    ],
  },
  {
    title: "Customized Fitness Programs for Optimal Results",
    description:
      "Our fitness programs are designed to help you achieve your weight loss goals with personalized exercise routines. Whether you're a beginner or an experienced fitness enthusiast, our certified trainers will create a plan tailored to your needs and preferences.",
    features: [
      {
        //   icon: LockClosedIcon,
        title: "Push to deploy",
        description: "Stay secure while you achieve your fitness goals.",
      },
      {
        //   icon: CloudIcon,
        title: "Easy Access",
        description: "Connect with trainers and plans wherever you are.",
      },
    ],
  },
  {
    title: "Track Your Progress and Stay Connected with Our Mobile Apps",
    description:
      "Our mobile apps provide you with the tools you need to easily track your weight loss progress and stay connected with our coaching team and fellow members..",
    features: [
      {
        //   icon: LockClosedIcon,
        title: "Easy Tracking",
        description:
          "Effortlessly log your food intake, monitor physical activity, and stay connected with our coaches and peers.",
      },
      {
        //   icon: CloudIcon,
        title: "Stay Connected",
        description:
          "oin our online forums and support groups to share experiences and celebrate successes together.",
      },
    ],
  },
  {
    title: "Sustained Weight Loss Support for a Healthier You",
    description:
      "At Stress-Free Weight Loss, we believe in providing ongoing support to help you maintain your weight loss achievements and live a healthier life. Our post-program maintenance services are designed to keep you on track and ensure long-term success..",
    features: [
      {
        //   icon: LockClosedIcon,
        title: "Ongoing Support ",
        description:
          "Access to alumni programs, follow-up consultations, and support groups for continued motivation.",
      },
    ],
  },
  {
    title: "Join Our Supportive Weight Loss Community Today",
    description:
      "Discover the power of group coaching and community support in achieving your weight loss goals. Our Stress-Free Weight Loss program provides personalized nutrition plans, fitness programs, and one-on-one coaching, all within a supportive community that celebrates your successes and keeps you accountable.",
    features: [
      {
        //   icon: LockClosedIcon,
        title: "Benefits",
        description:
          "Personalized Nutrition Plans, Customized Fitness Programs, Dedicated Coaching Sessions, Supportive Community",
      },
      {
        //   icon: CloudIcon,
        title: "Support",
        description:
          "Regular Group Meetings, Online Forums, Share Experiences, Offer Support, Celebrate Successes",
      },
    ],
  },
  {
    title:
      "Regular Group Meetings, Online Forums, Share Experiences, Offer Support, Celebrate Successes",
    description:
      "Our Behavioral Therapy services are designed to help you break free from emotional eating patterns and manage stress effectively. With personalized counseling sessions, our experienced professionals will guide you towards developing healthy habits and a positive mindset for long-term success.",
    features: [
      {
        //   icon: LockClosedIcon,
        title: "Break Free",
        description:
          "Overcome emotional eating and stress to achieve your weight loss goals.",
      },
      {
        //   icon: CloudIcon,
        title: "Find Balance",
        description:
          "Learn techniques to manage stress and create a healthy relationship with food.",
      },
    ],
  },
];

const currentIndex = ref(0);
const currentContent = ref(content[0]);

// Update carousel and content synchronously
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    currentContent.value = content[currentIndex.value % content.length];
  }, 5000); // 5 seconds interval
});
</script>

<style scoped>
/* Customize the carousel animation */
.flex {
  will-change: transform;
}
</style>
