<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white flex items-center justify-center">
      <div class="relative w-full max-w-2xl p-6 m-1 bg-white rounded-lg shadow-lg text-gray-900">

        <div class="mb-8">
          <div class="flex items-center justify-between mb-2">
            <p class="text-sm font-medium">Step {{ currentStep }} of 4</p>
            <p class="text-sm font-medium">{{ progressPercentage }}% completed</p>
          </div>
          <div class="h-2 bg-gray-300 rounded-full">
            <div
              class="h-2 bg-indigo-500 rounded-full transition-all duration-500"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>
  

        <transition name="fade" mode="out-in">
          <div :key="currentStep" class="space-y-6">
            <h2 class="text-2xl font-bold">{{ stepTitle }}</h2>
            <p class="text-gray-600">{{ stepDescription }}</p>
  
 
            <div v-if="currentStep === 1">
              <label class="block text-sm font-medium">
                What's your primary weight loss goal?
              </label>
              <select
                v-model="formData.goal"
                class="w-full p-3 mt-2 bg-gray-100 border rounded-lg"
                required
              >
                <option value="" disabled>Select a goal</option>
                <option>Lose weight</option>
                <option>Build muscle</option>
                <option>Maintain current weight</option>
              </select>
            </div>
  
 
            <div v-if="currentStep === 2">
              <label class="block text-sm font-medium">
                How active are you on a daily basis?
              </label>
              <select
                v-model="formData.activityLevel"
                class="w-full p-3 mt-2 bg-gray-100 border rounded-lg"
                required
              >
                <option value="" disabled>Select your activity level</option>
                <option>Sedentary</option>
                <option>Lightly active</option>
                <option>Moderately active</option>
                <option>Very active</option>
              </select>
            </div>
  
     
            <div v-if="currentStep === 3">
              <label class="block text-sm font-medium">
                How much weight are you aiming to lose?
              </label>
              <input
                v-model="formData.weightLossGoal"
                type="number"
                placeholder="Enter your goal in kg"
                class="w-full p-3 mt-2 bg-gray-100 border rounded-lg"
                required
              />
            </div>
  
  
            <div v-if="currentStep === 4">
              <label class="block text-sm font-medium">
                What's your preferred meal plan type?
              </label>
              <select
                v-model="formData.mealPlan"
                class="w-full p-3 mt-2 bg-gray-100 border rounded-lg"
                required
              >
                <option value="" disabled>Select a meal plan</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>High-protein</option>
                <option>Low-carb</option>
              </select>
            </div>
          </div>
        </transition>
  
  
        <div class="flex justify-between pt-20">
            <button @click="prevStep" class="group relative inline-block focus:outline-none focus:ring">
                <span
                    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                >
                Back
                </span>
                </button>
          <!-- <button
            v-if="currentStep > 1"
            @click="prevStep"
            class="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg"
          >
            Back
          </button> -->
          <!-- Base -->

                <button @click="nextStep" class="group relative inline-block focus:outline-none focus:ring">
                <span
                    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>

                <span
                    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                >
                {{ currentStep < 4 ? "Next" : "Finish" }}
                </span>
                </button>

        </div>
      </div>



      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-8 py-20 rounded-lg shadow-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900">
            🎉 You're Qualified! 🎉
          </h3>
          <p class="mt-4 text-gray-600">
            Congratulations! You're qualified to join our stress-free weight loss
            program.
          </p>
          <p class="mt-2 text-gray-600">
            Please proceed to payment to start your journey.
          </p>
     <div class="pt-6">
        <button
            @click="showPaymentModal = true;"
            class="mt-6 px-4 py-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-400"
          >
            Proceed to Payment
          </button>
     </div>
        </div>
      </div>
  

      <div
        v-if="showPaymentModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-8 rounded-lg shadow-lg ">
          <h3 class="text-xl font-semibold text-gray-900">
            💳 Payment Information
          </h3>
          <p class="mt-4 text-gray-600 max-w-md">
            You are qualified for our stress-free weight loss program. Please make a payment to proceed.
          </p>

         <div class="">
          <PaymentCard class="" />
         </div>
          <!-- <div class="mt-6 text-left">
            <p class="text-lg font-medium">Account Details:</p>
            <ul class="mt-2 space-y-3 text-gray-700">
              <li><strong>Account Name:</strong> Stress-Free Weight Loss</li>
              <li><strong>Bank:</strong> United Bank Of Africa (UBA)</li>
              <li><strong>Account Number:</strong> 1234567890</li>
              <li><strong>Amount:</strong> $50</li>
            </ul>
          </div> -->
          <div class="mt-6 w-full flex justify-center gap-4 pt-6">
            <button
              @click="confirmPayment"
              class="px-4 w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-400"
            >
              I Have Paid
            </button>
            <button
              @click="closePaymentModal"
              class="px-4 w-full py-4 bg-gray-300 text-gray-900 rounded-lg"
            >
              Cancel
            </button>
          </div>
           <!-- <PaymentCard /> -->
        </div>
      </div>

      
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from "vue";
  import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
  
  // State
  const currentStep = ref(1);
  const showPaymentModal = ref(false);
  const showModal = ref(false);
  const formData = ref({
    goal: "",
    activityLevel: "",
    weightLossGoal: "",
    mealPlan: "",
  });
  
  // Progress Calculation
  const progressPercentage = computed(() => (currentStep.value / 4) * 100);
  
  // Step Titles and Descriptions
  const stepTitle = computed(() => {
    switch (currentStep.value) {
      case 1:
        return "Your Weight Loss Goal";
      case 2:
        return "Your Activity Level";
      case 3:
        return "Your Weight Loss Target";
      case 4:
        return "Your Meal Preferences";
      default:
        return "";
    }
  });
  const stepDescription = computed(() => {
    switch (currentStep.value) {
      case 1:
        return "Help us understand your primary objective for weight loss.";
      case 2:
        return "Let us know your daily activity level for better recommendations.";
      case 3:
        return "Specify your weight loss target to create a tailored plan.";
      case 4:
        return "Choose the type of meal plan that best suits your lifestyle.";
      default:
        return "";
    }
  });
  
  // Navigation
  const nextStep = () => {
    if (currentStep.value === 1 && !formData.value.goal) {
           showToast({
            title: "Error",
            message: "Please select your weight loss goal.",
            toastType: "error",
            duration: 3000
          });
      return;
    }
    if (currentStep.value === 2 && !formData.value.activityLevel) {
           showToast({
            title: "Error",
            message: "Please select your weight loss goal.",
            toastType: "error",
            duration: 3000
          });
      return;
    }
    if (currentStep.value === 3 && !formData.value.weightLossGoal) {
           showToast({
            title: "Error",
            message: "Please select your weight loss goal.",
            toastType: "error",
            duration: 3000
          });
      return;
    }
    if (currentStep.value === 4 && !formData.value.mealPlan) {
           showToast({
            title: "Error",
            message: "Please select your weight loss goal.",
            toastType: "error",
            duration: 3000
          });
      return;
    }
  
    if (currentStep.value < 4) {
      currentStep.value++;
    } else {
        showModal.value = true;
    }
  };
  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--;
    }
  };
  
  // Payment Modal Actions
  const confirmPayment = () => {
    window.open(
      `https://wa.me/2348147626503?text=Hello,%20I%20have%20completed%20my%20payment.%20Please%20confirm.%20Thank%20you!`,
      "_blank"
    );
  };
  
  const closePaymentModal = () => {
    showPaymentModal.value = false;
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  