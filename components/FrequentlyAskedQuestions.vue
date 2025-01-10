<template>
    <main>
        <div class="bg-white py-16">
            <div class="mx-auto max-w-7xl px-6 py-10 sm:pt-10 lg:px-8 lg:py-10">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="lg:col-span-5" data-aos="fade-up">
                        <h2 class="text-2xl font-bold leading-10 tracking-tight">Frequently asked questions</h2>
                        <p class="mt-6 max-w-2xl text-base leading-7 text-gray-800">Have a different question and can’t find the answer you’re looking for? Reach out to our support team by <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">sending us an email</a> and we’ll get back to you as soon as we can.</p>
                    </div>
                    <div class="lg:col-span-7 lg:mt-0 space-y-8 pt-6 md:pt-0" data-aos="fade-up">
                        <div v-for="item in faqs" :key="item.id" class="overflow-hidden border-b">
                            <button
                                class="w-full text-left py-2 transition-colors duration-300 flex justify-between items-center pb-9"
                                @click="toggle(item.id)">
                                <p class="text-gray-800 font-semibold text-base md:text-lg">
                                    {{ item.question }}
                                </p>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg v-if="isClose(item.id)" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                    <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                    <svg v-if="isOpen(item.id)" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>
                            <div v-if="isOpen(item.id)" class="overflow-hidden transition-max-height duration-500 pb-3"
                                :style="{ maxHeight: isOpen(item.id) ? `${maxHeight}px` : '0' }">
                                <p class="p-1 lg:p-4 text-gray-700 text-sm font-light md:text-base rounded-lg">
                                    {{ item.answer }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template> 

<script lang="ts" setup>
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


const openId = ref(null)
const maxHeight = ref(0)

const toggle = (id: any) => {
    openId.value = openId.value === id ? null : id
    maxHeight.value = openId.value ? 200 : 0
}

const isOpen = (id: any) => {
    return openId.value === id
}

const isClose = (id: any) => {
    return openId.value !== id
}
</script>
