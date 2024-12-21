<template>
    <!-- component -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->
    <main class="bg-gray-900 pt-20">
        <div class="mx-auto max-w-4xl text-center bg-gray-900 z-50">
            <h2 class="text-base/7 font-semibold text-white">Pricing</h2>
            <p
                class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl"
            >Choose the right plan</p>
        </div>
        <main class="bg-gray-900 pt-60 lg:pt-96 items-center">
            <div
                class="container mx-auto lg:flex space-y-10 lg:space-y-0 justify-center lg:gap-x-32 pl-56 lg:pl-60"
            >
                <main class>
                    <!-- <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400"></div> -->

                    <div
                        class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0"
                    >
                        <div class="flex justify-end">
                            <div class="h-4 w-4 rounded-full bg-gray-900"></div>
                        </div>

                        <!-- <header class="text-center text-xl font-extrabold text-gray-600">2021.09.01</header> -->

                        <div>
                            <p class="text-center text-2xl font-extrabold text-gray-900">Basic Plan</p>
                            <p class="text-center text-2xl font-extrabold text-[#FE5401]">₦ 139,000</p>
                        </div>

                        <ul class="list-disc pl-5 text-sm space-y-2 text-gray-700">
                            <li>Daily consultation for 60 days</li>
                            <li>Daily Meal Review for 60 days</li>
                            <li>Daily Activity for 60 days</li>
                        </ul>

                        <footer class="mb-10 flex justify-center">
                            <NuxtLink
                                to="/questionaire"
                                class="group relative mt-16 inline-block focus:outline-none focus:ring mt-10"
                            >
                                <span
                                    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                                ></span>

                                <span
                                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                                >Get started</span>
                            </NuxtLink>
                        </footer>
                    </div>
                </main>

                <main class>
                    <!-- <div class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-2xl bg-gray-400"></div> -->

                    <div
                        class="h-96 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 space-y-6 rounded-2xl bg-gray-100 p-6 transition duration-300 hover:rotate-0"
                    >
                        <div class="flex justify-end">
                            <div class="h-4 w-4 rounded-full bg-gray-900"></div>
                        </div>

                        <!-- <header class="text-center text-xl font-extrabold text-gray-600">2021.09.01</header> -->

                        <div>
                            <p
                                class="text-center text-2xl font-extrabold text-gray-900"
                            >Premium Plan</p>
                            <p class="text-center text-2xl font-extrabold text-[#FE5401]">₦ 339,000</p>
                        </div>

                        <ul class="list-disc pl-5 text-sm space-y-2 text-gray-700">
                            <li>Basic plan plus</li>
                            <li>Dietician consultation with personalized meal plan</li>
                            <li>Weight loss Surgical Consultation</li>
                            <li>Medical Weight Loss consultation</li>
                            <li>Weely Online Fitness coaching</li>
                        </ul>

                        <footer class="flex justify-center">
                            <NuxtLink
                                to="/questionaire"
                                class="group relative -mt-2 inline-block focus:outline-none focus:ring mt-10"
                            >
                                <span
                                    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                                ></span>

                                <span
                                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                                >Get started</span>
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