<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white flex items-center justify-center">
    <div class="relative w-full max-w-2xl p-6 m-2 bg-white rounded-lg shadow-lg text-gray-900">

      <div class="mb-8">
        <div class="flex items-center justify-between mb-2">
          <p class="text-sm font-medium">Step {{ currentStep }} of 4</p>
          <p class="text-sm font-medium">{{ progressPercentage }}% completed</p>
        </div>
        <div class="h-2 bg-gray-300 rounded-full">
          <div class="h-2 bg-indigo-500 rounded-full transition-all duration-500"
            :style="{ width: `${progressPercentage}%` }"></div>
        </div>
      </div>


      <transition name="fade" mode="out-in">
        <div :key="currentStep" class="space-y-6">
          <h2 class="text-2xl font-bold">{{ stepTitle }}</h2>
          <p class="text-gray-600">{{ stepDescription }}</p>


          <div class="grid lg:grid-cols-2 gap-6" v-if="currentStep === 1">
            <!-- Name -->
            <div>
              <label class="input-label">
                What's your Name?
              </label>
              <input v-model="formData.name" type="text" placeholder="Enter your name"
                class="transaction-input-field" required />
            </div>

            <!-- WhatsApp Number -->
            <div>
              <label class="input-label">
                What's your WhatsApp Number?
              </label>
              <input v-model="formData.whatsappNumber" type="text" placeholder="Enter your WhatsApp number"
                class="transaction-input-field" required />
            </div>

            <!-- Gender -->
            <div>
              <label class="input-label">
                What's your Gender?
              </label>
              <select v-model="formData.gender" class="transaction-input-field" required>
                <option value="" disabled>Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <!-- Age -->
            <div>
              <label class="input-label">
                What's your current Age?
              </label>
              <input v-model="formData.age" type="number" placeholder="Enter your age"
                class="transaction-input-field" required />
            </div>

            <!-- Current Weight -->
            <div>
              <label class="input-label">
                What's your Current Weight (Kg)?
              </label>
              <input v-model="formData.currentWeight" type="number" placeholder="Enter your weight in Kg"
                class="transaction-input-field" required />
            </div>

            <!-- Current Height -->
            <div>
              <label class="input-label">
                What's your Current Height (Cm)?
              </label>
              <input v-model="formData.currentHeight" type="number" placeholder="Enter your height in Cm"
                class="transaction-input-field" required />
            </div>

            <!-- Target Weight -->
            <div>
              <label class="input-label">
                What's your Target Weight (Kg)?
              </label>
              <input v-model="formData.targetWeight" type="number" placeholder="Enter your target weight in Kg"
                class="transaction-input-field" required />
            </div>
          </div>



          <div class="grid lg:grid-cols-2 gap-6" v-if="currentStep === 2">
            <!-- Tried Weight Loss Program -->
            <div>
              <label class="input-label">
                Have you ever tried any weight loss program or programs?
              </label>
              <select v-model="formData.triedWeightLossProgram" class="transaction-input-field"
                required>
                <option value="" disabled>Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Challenges with Weight Loss Program (if applicable) -->
            <div v-if="formData.triedWeightLossProgram === 'Yes'">
              <label class="input-label">
                What were your challenges with the weight loss program?
              </label>
              <textarea v-model="formData.weightLossChallenges" rows="3" placeholder="Describe your challenges"
                class="transaction-input-field" required></textarea>
            </div>

            <!-- Likes Fruits -->
            <div>
              <label class="input-label">
                Do you like fruits?
              </label>
              <select v-model="formData.likesFruits" class="transaction-input-field" required>
                <option value="" disabled>Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Favorite Fruits (if applicable) -->
            <div v-if="formData.likesFruits === 'Yes'">
              <label class="input-label">
                List your favorite fruits
              </label>
              <input v-model="formData.favoriteFruits" type="text" placeholder="E.g., Apples, Bananas"
                class="transaction-input-field" />
            </div>

            <!-- Reasons for Disliking Fruits (if applicable) -->
            <div v-if="formData.likesFruits === 'No'">
              <label class="input-label">
                Why don’t you like fruits?
              </label>
              <textarea v-model="formData.reasonsForDislikingFruits" rows="3" placeholder="Describe your reasons"
                class="transaction-input-field" required></textarea>
            </div>

            <!-- Likes Vegetables -->
            <div>
              <label class="input-label">
                Do you like vegetables?
              </label>
              <select v-model="formData.likesVegetables" class="transaction-input-field" required>
                <option value="" disabled>Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Favorite Vegetables (if applicable) -->
            <div v-if="formData.likesVegetables === 'Yes'">
              <label class="input-label">
                List your favorite vegetables
              </label>
              <input v-model="formData.favoriteVegetables" type="text" placeholder="E.g., Spinach, Carrots"
                class="transaction-input-field" />
            </div>

            <!-- Reasons for Disliking Vegetables (if applicable) -->
            <div v-if="formData.likesVegetables === 'No'">
              <label class="input-label">
                Why don’t you like vegetables?
              </label>
              <textarea v-model="formData.reasonsForDislikingVegetables" rows="3" placeholder="Describe your reasons"
                class="transaction-input-field" required></textarea>
            </div>

            <!-- Eats a Lot -->
            <div>
              <label class="input-label">
                Do you believe you eat a lot (quantity)?
              </label>
              <select v-model="formData.eatsALot" class="transaction-input-field" required>
                <option value="" disabled>Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>


          <div class="grid lg:grid-cols-2 gap-6" v-if="currentStep === 3">
            <!-- Weight Loss Challenges -->
            <div>
              <label class="input-label">
                What are your challenges with weight loss?
              </label>
              <div class="space-y-2">
                <div
                  v-for="challenge in ['Finance', 'Limited food choices', 'Can’t exercise due to time or other factors', 'No change in weight on the scale despite all efforts', 'Multiple confusing recommendations', 'Having unrealistic expectations', 'Lack of support', 'Lack of willpower', 'Inconsistency', 'Food allergies/sensitivities', 'Medications that lead to weight gain', 'Feeling deprived of favorite food or drink', 'Unable to fit a plan into our lifestyle', 'Unable to stay motivated for long', 'Stress eating', 'Snacking a lot', 'Late night meals', 'Busy work schedule', 'No time to cook', 'Other']"
                  :key="challenge" class="flex items-center">
                  <input type="checkbox" :value="challenge" v-model="formData.weightLossChallengesList"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span class="ml-2 text-gray-700">{{ challenge }}</span>
                </div>
              </div>
            </div>

            <!-- Health Challenges -->
            <div>
              <label class="input-label">
                Do you have any health challenges? If yes, please provide details.
              </label>
              <textarea v-model="formData.healthChallenges" rows="3" placeholder="Describe any health challenges"
                class="transaction-input-field"></textarea>
            </div>

            <!-- Weight Loss Motivations -->
            <div>
              <label class="input-label">
                Why do you want to lose weight? (Select all that apply)
              </label>
              <div class="space-y-2">
                <div
                  v-for="motivation in ['Look better', 'Feel better', 'Improve overall health', 'Have more energy and vitality', 'Improved physical fitness', 'Healthy aging', 'Get control of eating habits', 'Get off or decrease medications', 'Physique competition/modelling', 'Other']"
                  :key="motivation" class="flex items-center">
                  <input type="checkbox" :value="motivation" v-model="formData.weightLossMotivations"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span class="ml-2 text-gray-700">{{ motivation }}</span>
                </div>
              </div>
            </div>

            <!-- Daily Activity Level -->
            <div>
              <label class="input-label">
                How active are you on a daily basis?
              </label>
              <select v-model="formData.activityLevel" class="transaction-input-field" required>
                <option value="" disabled>Select your activity level</option>
                <option value="Low (Seated mostly)">Low (Seated mostly)</option>
                <option value="Moderate (Light activity such as walking)">Moderate (Light activity such as walking)</option>
                <option value="High (Heavy labor, very active)">High (Heavy labor, very active)</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>



          <div class="grid lg:grid-cols-2 gap-6" v-if="currentStep === 4">
            <!-- Provide Pictures of Food -->
            <div>
              <label class="input-label">
                Will you be able to provide pictures of all the food you eat every day for the first 2 weeks of our
                coaching?
              </label>
              <select v-model="formData.canProvideFoodPictures" class="transaction-input-field"
                required>
                <option value="" disabled>Select an option</option>
                   <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Provide Weekly/Bi-weekly Updates -->
            <div>
              <label class="input-label">
                Will you be able to provide weekly/bi-weekly updates of your weight & other assessment parameters?
              </label>
              <select v-model="formData.canProvideUpdates" class="transaction-input-field"
                required>
                <option value="" disabled>Select an option</option>
                 <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Can Afford Food Weighing Scale -->
            <div>
              <label class="input-label">
                Can you afford a food weighing scale? (It costs between 2000 to 10,000 Naira)
              </label>
              <select v-model="formData.canAffordWeighingScale" class="transaction-input-field"
                required>
                <option value="" disabled>Select an option</option>
            <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Need Help with Exercise -->
            <div>
              <label class="input-label">
                Do you believe you need help with exercise?
              </label>
              <select v-model="formData.needsExerciseHelp" class="transaction-input-field"
                required>
                <option value="" disabled>Select an option</option>
               <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Willing to Pay for Coaching -->
            <div>
              <label class="input-label">
                Will you be willing to pay for coaching (individual coaching or group coaching), if weight loss is
                guaranteed?
              </label>
              <select v-model="formData.willingToPayForCoaching" class="transaction-input-field"
                required>
                <option value="" disabled>Select an option</option>
             <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Participated in Coaching Before -->
            <div>
              <label class="input-label">
                Have you ever participated in our coaching sessions?
              </label>
              <select v-model="formData.participatedInCoachingBefore"
                class="transaction-input-field" required>
                <option value="" disabled>Select an option</option>
                 <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <!-- Referral Source -->
            <div>
              <label class="input-label">
                Where did you hear about us?
              </label>
              <select v-model="formData.referralSource" class="transaction-input-field" required>
                <option value="" disabled>Select an option</option>
                <option value="Friend">Friend</option>
                <option value="Facebook">Facebook</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Family">Family</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <!-- Referral Details (if applicable) -->
            <div v-if="formData.referralSource === 'Others'">
              <label class="input-label">
                Please specify where you heard about us
              </label>
              <input v-model="formData.referralSourceDetails" type="text" placeholder="Enter referral details"
                class="transaction-input-field" />
            </div>
          </div>

        </div>
      </transition>


      <div class="flex justify-between pt-20">
        <button @click="prevStep" class="group relative inline-block focus:outline-none focus:ring">
          <span
            class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-gray-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span
            class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            Back
          </span>
        </button>

        <button @click="nextStep" class="group relative inline-block focus:outline-none focus:ring">
          <span
            class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span
            class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            {{ currentStep < 4 ? "Next" : "Finish" }} </span>
        </button>

      </div>
    </div>



    <div v-if="showSuccessModal && bmiCategory === 'Overweight'" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white p-8 py-20 rounded-lg shadow-lg text-center">
    <h3 class="text-xl font-semibold text-gray-900">
      🎉 You're Eligible to Join Us! 🎉
    </h3>
    <p class="mt-4 text-gray-600">
      We're excited to help you on your journey to achieving a healthier and more confident you!
    </p>
    <p class="mt-2 text-gray-600">
      Our program is designed to provide you with the tools and support needed for sustainable weight loss and improved well-being.
    </p>
    <p class="mt-2 text-gray-600">
      Let's take the first step together! Please proceed to payment to begin your journey with us.
    </p>
    <div class="pt-6">
      <button @click="handlePaymentModal"
        class="mt-6 px-4 py-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-400">
        Proceed to Payment
      </button>
    </div>
  </div>
</div>


    <div v-if="showUnQualifiedModal && (bmiCategory === 'Normal' || bmiCategory === 'Underweight')" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white p-8 py-20 rounded-lg shadow-lg max-w-xl text-center">
    <h3 class="text-xl font-semibold text-gray-900">
      🌟 Thank You for Your Interest! 🌟
    </h3>
    <p class="mt-4 text-gray-600">
      Based on your BMI, it seems that you are currently at a weight that does not require our weight loss program. 
    </p>
    <p class="mt-2 text-gray-600">
      We recommend maintaining your current healthy lifestyle and focusing on wellness habits that suit your needs.
    </p>
    <p class="mt-2 text-gray-600">
      If you have any questions or would like guidance on general fitness or nutrition, feel free to reach out to us!
    </p>
    <div class="pt-10">
      <!-- <button @click="closeModal"
        class="mt-6 px-4 py-4 bg-gray-500 text-white rounded-md hover:bg-gray-400">
        Close
      </button> -->
<!-- Base -->

<button @click="handleCloseModal" class="group relative inline-block focus:outline-none focus:ring">
  <span
    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
  Close
  </span>
</button>

<!-- Hover -->

<!-- <a class="group relative inline-block focus:outline-none focus:ring" href="#">
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
    Download
  </span>
</a> -->
    </div>
  </div>
</div>



    <div v-if="showPaymentModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div class="bg-white rounded-lg shadow-lg max-w-md w-full">
        <h3 class="text-xl font-semibold text-gray-900 pt-5 px-8">
          💳 Payment Information
        </h3>
        <p class="mt-4 text-gray-600 pb-5  px-8">
          You are qualified for our stress-free weight loss program. Please make a payment to proceed.
        </p>

        <div class="px-3">
          <PaymentCard />
        </div>

        <div class="mt-6 w-full flex pt-8 justify-center gap-4 px-8 pb-8">
          <button @click="confirmPayment"
            class="px-4 w-full py-4 bg-green-900 text-white rounded-lg hover:bg-green-900">
            I Have Paid
          </button>
          <button @click="closePaymentModal" class="px-4 w-full py-4 bg-gray-300 text-gray-900 rounded-lg">
            Do this later
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const router = useRouter()

// State
const currentStep = ref(1);
const showPaymentModal = ref(false);
const showSuccessModal = ref(false);
const showUnQualifiedModal = ref(false)
const formData = ref({
  // Personal Information and Current Status
  name: "",
  whatsappNumber: "",
  gender: "", // Options: "Male", "Female"
  age: "",
  email: "",
  currentWeight: "", // Weight in Kg
  currentHeight: "", // Height in Cm
  bmi: "", // Calculated based on weight and height
  targetWeight: "", // Target weight in Kg

  // Eating Habits and Preferences
  triedWeightLossProgram: "", // Options: "Yes", "No"
  weightLossChallenges: "", // Details if 'Yes' to triedWeightLossProgram
  likesFruits: "", // Options: "Yes", "No"
  favoriteFruits: [], // Array of favorite fruits if likesFruits is "Yes"
  reasonsForDislikingFruits: "", // Reasons if likesFruits is "No"
  likesVegetables: "", // Options: "Yes", "No"
  favoriteVegetables: [], // Array of favorite vegetables if likesVegetables is "Yes"
  reasonsForDislikingVegetables: "", // Reasons if likesVegetables is "No"
  eatsALot: "", // Options: "Yes", "No"

  // Challenges and Goals
  weightLossChallengesList: [], // Array of challenges (from the options provided)
  healthChallenges: "", // Details of health challenges
  weightLossMotivations: [], // Array of motivations (from the options provided)
  activityLevel: "", // Options: "Low", "Moderate", "High", "Other"

  // Commitment and Coaching Feasibility
  canProvideFoodPictures: "", // Options: "Yes", "No"
  canProvideUpdates: "", // Options: "Yes", "No"
  canAffordWeighingScale: "", // Options: "Yes", "No"
  needsExerciseHelp: "", // Options: "Yes", "No"
  willingToPayForCoaching: "", // Options: "Yes", "No"
  participatedInCoachingBefore: "", // Options: "Yes", "No"
  referralSource: "", // Options: "Friend", "Facebook", "WhatsApp", "Family", "Others"
  referralSourceDetails: "", // Extra details if referralSource is "Others"
});


const handlePaymentModal = () => {
  showSuccessModal.value = false
  showPaymentModal.value = true
}

const handleCloseModal = () => {
  closeModal()
  router.push('/')
}

// Progress Calculation
const progressPercentage = computed(() => (currentStep.value / 4) * 100);

// Step Titles and Descriptions
const stepTitle = computed(() => {
  switch (currentStep.value) {
    case 1:
      return "Personal Information and Current Status";
    case 2:
      return "Eating Habits and Preferences";
    case 3:
      return "Challenges and Goals";
    case 4:
      return "Commitment and Coaching Feasibility";
    default:
      return "";
  }
});
const stepDescription = computed(() => {
  switch (currentStep.value) {
    case 1:
      return "These questions focus on gathering the user's basic details, current physical attributes, and past experiences.";
    case 2:
      return "This category focuses on understanding the user’s dietary preferences, habits, and challenges.";
    case 3:
      return "This section addresses the user’s weight loss challenges, motivations, and activity levels.";
    case 4:
      return "This category evaluates the user's willingness to participate in and commit to a weight loss program.";
    default:
      return "";
  }
});

const bmiData = computed(() => {
  const heightInMeters = Number(formData.value.currentHeight) / 100;
  const weightInKg = Number(formData.value.currentWeight);

  if (!heightInMeters || !weightInKg) return null;

  return weightInKg / (heightInMeters * heightInMeters);
});

// Computed BMI category
const bmiCategory = computed(() => {
  if (!bmiData.value) return null;

  if (bmiData.value < 18.5) return "Underweight";
  if (bmiData.value >= 18.5 && bmiData.value < 25) return "Normal";
  return "Overweight";
});

// Navigation
// const nextStep = () => {
//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 1 && !formData.value.goal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value === 2 && !formData.value.activityLevel) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }
//   if (currentStep.value === 3 && !formData.value.weightLossGoal) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }
//   if (currentStep.value === 4 && !formData.value.mealPlan) {
//          showToast({
//           title: "Error",
//           message: "Please select your weight loss goal.",
//           toastType: "error",
//           duration: 3000
//         });
//     return;
//   }

//   if (currentStep.value < 4) {
//     currentStep.value++;
//   } else {
//       showSuccessModal.value = true;
//   }
// };

const nextStep = () => {
  if (currentStep.value === 1) {
    if (!formData.value.name) {
      showToast({
        title: "Error",
        message: "Please enter your name.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.whatsappNumber) {
      showToast({
        title: "Error",
        message: "Please enter your WhatsApp number.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.gender) {
      showToast({
        title: "Error",
        message: "Please select your gender.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.age) {
      showToast({
        title: "Error",
        message: "Please enter your age.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }
  }

  if (currentStep.value === 2) {
    if (!formData.value.triedWeightLossProgram) {
      showToast({
        title: "Error",
        message: "Please indicate if you have tried any weight loss program.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (formData.value.triedWeightLossProgram === "Yes" && !formData.value.weightLossChallenges) {
      showToast({
        title: "Error",
        message: "Please specify your challenges with the weight loss program.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.likesFruits) {
      showToast({
        title: "Error",
        message: "Please indicate if you like fruits.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.likesVegetables) {
      showToast({
        title: "Error",
        message: "Please indicate if you like vegetables.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }
  }

  if (currentStep.value === 3) {
    if (formData.value.weightLossChallengesList.length === 0) {
      showToast({
        title: "Error",
        message: "Please select your weight loss challenges.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.healthChallenges) {
      showToast({
        title: "Error",
        message: "Please provide details about your health challenges.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (formData.value.weightLossMotivations.length === 0) {
      showToast({
        title: "Error",
        message: "Please select your weight loss motivations.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.activityLevel) {
      showToast({
        title: "Error",
        message: "Please rate your daily activity level.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }
  }

  if (currentStep.value === 4) {
    if (!formData.value.canProvideFoodPictures) {
      showToast({
        title: "Error",
        message: "Please indicate if you can provide pictures of your food.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.canProvideUpdates) {
      showToast({
        title: "Error",
        message: "Please indicate if you can provide weekly/bi-weekly updates.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.canAffordWeighingScale) {
      showToast({
        title: "Error",
        message: "Please indicate if you can afford a food weighing scale.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    if (!formData.value.willingToPayForCoaching) {
      showToast({
        title: "Error",
        message: "Please indicate if you are willing to pay for coaching.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }
  }

  // Move to the next step or show the success modal
  // if (currentStep.value < 4) {
  //   currentStep.value++;
  // } else {
  //   if(bmiCategory.value === 'Overweight'){
  //     showSuccessModal.value = true;
  //   } else {
  //     showUnQualifiedModal.value = true
  //   }
  // }

//   if (currentStep.value < 4) {
//   currentStep.value++;
// } else {
//   showSuccessModal.value = bmiCategory.value === 'Overweight';
//   showUnQualifiedModal.value = bmiCategory.value !== 'Overweight';
// }

if (currentStep.value < 4) {
  currentStep.value++;
} else {

  console.log('Current Step:', currentStep.value);
console.log('BMI Category:', bmiCategory.value);
console.log('Show Success Modal:', showSuccessModal.value);
console.log('Show Unqualified Modal:', showUnQualifiedModal.value);
  // Determine which modal to show
  if (bmiCategory.value === 'Overweight') {
    showSuccessModal.value = true;
  } else if (bmiCategory.value === 'Normal' || bmiCategory.value === 'Underweight') {
    showUnQualifiedModal.value = true;
  }
}



};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

function closeModal() {
  showUnQualifiedModal.value = false;
  showSuccessModal.value = false;
}



const confirmPayment = () => {
  const {
    name,
    whatsappNumber,
    gender,
    age,
    email,
    currentWeight,
    currentHeight,
    bmi,
    targetWeight,
    triedWeightLossProgram,
    weightLossChallenges,
    likesFruits,
    favoriteFruits,
    reasonsForDislikingFruits,
    likesVegetables,
    favoriteVegetables,
    reasonsForDislikingVegetables,
    eatsALot,
    weightLossChallengesList,
    healthChallenges,
    weightLossMotivations,
    activityLevel,
    canProvideFoodPictures,
    canProvideUpdates,
    canAffordWeighingScale,
    needsExerciseHelp,
    willingToPayForCoaching,
    participatedInCoachingBefore,
    referralSource,
    referralSourceDetails,
  } = formData.value;

  // Build the WhatsApp message text dynamically
  const message = `Hello,%20I%20have%20completed%20my%20payment.%20Please%20confirm.%20Here%20are%20my%20details:%0A%0A` +
    `Name:%20${encodeURIComponent(name)}%0A` +
    `WhatsApp%20Number:%20${encodeURIComponent(whatsappNumber)}%0A` +
    `Gender:%20${encodeURIComponent(gender)}%0A` +
    `Age:%20${encodeURIComponent(age)}%0A` +
    `Email:%20${encodeURIComponent(email)}%0A` +
    `Current%20Weight:%20${encodeURIComponent(currentWeight)}%20Kg%0A` +
    `Current%20Height:%20${encodeURIComponent(currentHeight)}%20Cm%0A` +
    `BMI:%20${encodeURIComponent(`(${bmiData.value}) ${bmiCategory.value}`)}%0A` +
    `Target%20Weight:%20${encodeURIComponent(targetWeight)}%20Kg%0A%0A` +
    `Tried%20Weight%20Loss%20Program:%20${encodeURIComponent(triedWeightLossProgram)}%0A` +
    (triedWeightLossProgram === "Yes" && weightLossChallenges
      ? `Weight%20Loss%20Challenges:%20${encodeURIComponent(weightLossChallenges)}%0A`
      : "") +
    `Likes%20Fruits:%20${encodeURIComponent(likesFruits)}%0A` +
    (likesFruits === "Yes" && favoriteFruits.length > 0
      ? `Favorite%20Fruits:%20${encodeURIComponent(favoriteFruits.join(", "))}%0A`
      : likesFruits === "No"
        ? `Reasons%20for%20Disliking%20Fruits:%20${encodeURIComponent(reasonsForDislikingFruits)}%0A`
        : "") +
    `Likes%20Vegetables:%20${encodeURIComponent(likesVegetables)}%0A` +
    (likesVegetables === "Yes" && favoriteVegetables.length > 0
      ? `Favorite%20Vegetables:%20${encodeURIComponent(favoriteVegetables.join(", "))}%0A`
      : likesVegetables === "No"
        ? `Reasons%20for%20Disliking%20Vegetables:%20${encodeURIComponent(reasonsForDislikingVegetables)}%0A`
        : "") +
    `Eats%20A%20Lot:%20${encodeURIComponent(eatsALot)}%0A%0A` +
    `Weight%20Loss%20Challenges:%20${encodeURIComponent(weightLossChallengesList.join(", "))}%0A` +
    `Health%20Challenges:%20${encodeURIComponent(healthChallenges)}%0A` +
    `Weight%20Loss%20Motivations:%20${encodeURIComponent(weightLossMotivations.join(", "))}%0A` +
    `Activity%20Level:%20${encodeURIComponent(activityLevel)}%0A%0A` +
    `Can%20Provide%20Food%20Pictures:%20${encodeURIComponent(canProvideFoodPictures)}%0A` +
    `Can%20Provide%20Updates:%20${encodeURIComponent(canProvideUpdates)}%0A` +
    `Can%20Afford%20Weighing%20Scale:%20${encodeURIComponent(canAffordWeighingScale)}%0A` +
    `Needs%20Exercise%20Help:%20${encodeURIComponent(needsExerciseHelp)}%0A` +
    `Willing%20to%20Pay%20for%20Coaching:%20${encodeURIComponent(willingToPayForCoaching)}%0A` +
    `Participated%20in%20Coaching%20Before:%20${encodeURIComponent(participatedInCoachingBefore)}%0A` +
    `Referral%20Source:%20${encodeURIComponent(referralSource)}%0A` +
    (referralSource === "Others" ? `Referral%20Details:%20${encodeURIComponent(referralSourceDetails)}%0A` : "") +
    `%0AThank%20you!`;

  // Open WhatsApp with the generated message
  window.open(`https://wa.me/2347030338088?text=${message}`, "_blank");
};



const closePaymentModal = () => {
  showPaymentModal.value = false;
  router.push('/')
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
