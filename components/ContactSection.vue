<template>
    <main>
        <div class="relative isolate bg-white">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48" data-aos="fade-up">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div
                            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true">
                                <defs>
                                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%"
                                        y="-1" patternUnits="userSpaceOnUse">
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" stroke-width="0" fill="white" />
                                <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                                </svg>
                                <rect width="100%" height="100%" stroke-width="0"
                                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                            </svg>
                        </div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900" data-aos="fade-up">Get in touch
                        </h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up">We're here to answer any
                            questions you may have or
                            discuss your project needs.</p>
                        <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only" data-aos="fade-up">Address</span>
                                    <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg>
                                </dt>
                                <dd data-aos="fade-up">Luth, Idi-araba, Mushin Lagos.</dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only" data-aos="fade-up">Telephone</span>
                                    <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </dt>
                                <dd><a class="hover:text-gray-900" href="tel:+1 (416) 220-9659" data-aos="fade-up">+1
                                    +234 (814) - 734 - 1598</a></dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Email</span>
                                    <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </dt>
                                <dd><a class="hover:text-gray-900" href="mailto:SwlDrAda@gmail.com">SwlDrAda@gmail.com</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <!-- <form @submit.prevent="handleSubmit" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                    data-aos="fade-up">
                    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label for="first-name"
                                    class="block text-sm font-semibold leading-6 text-gray-900">First
                                    name</label>
                                <div class="mt-2.5">
                                    <input type="text" v-model="formData.firstName" name="first-name" id="first-name"
                                        autocomplete="given-name"
                                        class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last
                                    name</label>
                                <div class="mt-2.5">
                                    <input type="text" v-model="formData.lastName" name="last-name" id="last-name"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="email"
                                    class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div class="mt-2.5">
                                    <input type="email" v-model="formData.email" name="email" id="email"
                                        autocomplete="email"
                                        class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="phone-number"
                                    class="block text-sm font-semibold leading-6 text-gray-900">Phone
                                    number</label>
                                <div class="mt-2.5">
                                    <input type="tel" v-model="formData.phoneNumber" name="phone-number"
                                        id="phone-number" autocomplete="tel"
                                        class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Tell us
                                    more about your project</label>
                                <div class="mt-2.5">
                                    <textarea name="message" v-model="formData.tell_us_more_about_your_project"
                                        id="message" rows="4"
                                        class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 flex justify-end">
                            <button type="submit" :disabled="!isFormEmpty || processing"
                                class="rounded-md bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-25 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                {{ processing ? 'processing' : 'Send message' }}</button>
                        </div>
                    </div>
                </form> -->
                <form @submit.prevent="handleSubmit" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" data-aos="fade-up">
  <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <!-- First Name -->
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div class="mt-2.5">
          <input
            type="text"
            v-model="formData.firstName"
            name="first-name"
            id="first-name"
            autocomplete="given-name"
            placeholder="Enter your first name"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Last Name -->
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div class="mt-2.5">
          <input
            type="text"
            v-model="formData.lastName"
            name="last-name"
            id="last-name"
            autocomplete="family-name"
            placeholder="Enter your last name"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div class="mt-2.5">
          <input
            type="email"
            v-model="formData.email"
            name="email"
            id="email"
            autocomplete="email"
            placeholder="Enter your email address"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Phone Number -->
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div class="mt-2.5">
          <input
            type="tel"
            v-model="formData.phoneNumber"
            name="phone-number"
            id="phone-number"
            autocomplete="tel"
            placeholder="Enter your phone number"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Age -->
      <div>
        <label for="age" class="block text-sm font-semibold leading-6 text-gray-900">Age</label>
        <div class="mt-2.5">
          <input
            type="number"
            v-model="formData.age"
            name="age"
            id="age"
            placeholder="Enter your age"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Gender -->
      <div>
        <label for="gender" class="block text-sm font-semibold leading-6 text-gray-900">Gender</label>
        <div class="mt-2.5">
          <select
            v-model="formData.gender"
            name="gender"
            id="gender"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>
        </div>
      </div>

      <!-- Weight Loss Goal -->
      <div class="sm:col-span-2">
        <label for="weight-loss-goal" class="block text-sm font-semibold leading-6 text-gray-900">Weight Loss Goal</label>
        <div class="mt-2.5">
          <input
            type="text"
            v-model="formData.weight_loss_goal"
            name="weight-loss-goal"
            id="weight-loss-goal"
            placeholder="What is your weight loss goal?"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Activity Level -->
      <div class="sm:col-span-2">
        <label for="activity-level" class="block text-sm font-semibold leading-6 text-gray-900">Activity Level</label>
        <div class="mt-2.5">
          <input
            type="text"
            v-model="formData.current_activity_level"
            name="activity-level"
            id="activity-level"
            placeholder="Describe your current activity level"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <!-- Diet Preferences or Restrictions -->
      <div class="sm:col-span-2">
        <label for="diet-preferences" class="block text-sm font-semibold leading-6 text-gray-900">Diet Preferences</label>
        <div class="mt-2.5">
          <textarea
            name="diet-preferences"
            v-model="formData.diet_preferences"
            id="diet-preferences"
            rows="3"
            placeholder="Do you have any diet preferences or restrictions?"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>

      <!-- Medical Conditions or Concerns -->
      <div class="sm:col-span-2">
        <label for="medical-conditions" class="block text-sm font-semibold leading-6 text-gray-900">Medical Conditions</label>
        <div class="mt-2.5">
          <textarea
            name="medical-conditions"
            v-model="formData.additional_questions"
            id="medical-conditions"
            rows="3"
            placeholder="Any medical conditions or concerns we should know about?"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>

      <!-- Preferred Communication Method -->
      <div>
        <label for="communication-method" class="block text-sm font-semibold leading-6 text-gray-900">Preferred Communication Method</label>
        <div class="mt-2.5">
          <select
            v-model="formData.preferred_communication_method"
            name="communication-method"
            id="communication-method"
            class="block w-full rounded-md border-[0.6px] border-gray-600 px-3.5 py-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected>Select a communication method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="mt-8 flex justify-end w-full">
      <button
        type="submit"
        :disabled="!isFormEmpty || processing"
        class="rounded-md bg-indigo-600 disabled:cursor-not-allowed w-full disabled:opacity-25 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {{ processing ? 'Processing...' : 'Send Message' }}
      </button>
    </div>
  </div>
</form>

            </div>
        </div>
        <CoreBaseModal :show="showModal" @update:show="showModal = $event">
            <section class="max-w-2xl px-3 py-6 mx-auto">
                <main class="mt-8 space-y-6">
                    <img class="object-cover w-full h-56 rounded-lg md:h-72"
                        src="@/assets/weight9.jpg"
                        alt="">

                    <h2 class="mt-6 text-gray-800 font-semibold text-lg">Hello {{
                    capitalizeFirstLetter(formData.firstName) }} {{
                    capitalizeFirstLetter(formData.lastName)
                        }},</h2>

                    <p class="mt-2 leading-loose text-gray-800 text-sm">
                        Thank you for reaching out to Stress-Free Weight Loss with Dr. Ada! We’re excited to connect with you and learn more about your weight loss goals. A member of our team will be in touch within the next 24 hours to discuss how we can support you on your journey to a healthier and happier lifestyle. We look forward to working with you to achieve amazing results!
                    </p>

                    <p class="mt-2 text-gray-800 text-sm">
                        Best regards, <br>
                        The SWL Team.
                    </p>
                </main>
            </section>
        </CoreBaseModal>
    </main>
</template>

<script setup lang="ts">
  import { useCustomToast } from '@/composables/core/useCustomToast'
  const { showToast } = useCustomToast();
const processing = ref(false)
const formData = ref({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      age: '',
      gender: '',
      weight_loss_goal: '',
      current_activity_level: '',
      diet_preferences: '',
      additional_questions: '',
      preferred_communication_method: '',
});

async function handleSubmit() {
    processing.value = true
    const url = 'https://swl-enquires.onrender.com/api/auth/signup';  // Your API endpoint
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData.value)
        });

        if (!response.ok) {
            showToast({
            title: "Error",
            message: "Network response was not ok.'",
            toastType: "error",
            duration: 3000
          });
            throw new Error('Network response was not ok.');
        }

        const result = await response.json();
        showModal.value = true
        formData.value.firstName = ''
        formData.value.lastName = '',
        formData.value.email = '',
        formData.value.phoneNumber = '',
        formData.value.age = '',
        formData.value.gender = '',
        formData.value.weight_loss_goal = '',
        formData.value.current_activity_level = '',
        formData.value.diet_preferences = '',
        formData.value.additional_questions = '',
        formData.value.preferred_communication_method = ''
    } catch (error) {
        if (process.client) {
            showToast({
            title: "Error",
            message: "Error submitting form'",
            toastType: "error",
            duration: 3000
          });
        }
    } finally {
        processing.value = false
    }
}

const isFormEmpty = computed(() => {
    return !!(formData.value.firstName && formData.value.lastName && formData.value.email && formData.value.phoneNumber && formData.value.age && formData.value.gender && formData.value.age && formData.value.weight_loss_goal && formData.value.current_activity_level && formData.value.diet_preferences && formData.value.additional_questions && formData.value.preferred_communication_method)
})

const capitalizeFirstLetter = (string: string) => {
    if (!string) return string; // Handle null, undefined, or empty string
    return string.charAt(0).toUpperCase() + string.slice(1);
}



const showModal = ref(false);
</script>