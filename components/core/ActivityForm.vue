<template>
    <div class="min-h-screen bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <!-- <h1 class="text-3xl font-bold text-gray-900 mb-8">Weight Loss Activity Tracker</h1> -->
        
        <!-- Activities Section -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-lg font-semibold mb-6">Record Activity</h2>
          
          <form @submit.prevent="addActivity" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Activity Name
              </label>
              <input
                v-model="activityForm.name"
                type="text"
                required
                class="w-full px-3 outline-none py-3.5 border border-gray-300 rounded-lg"
              />
            </div>
  
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Activity Capture
              </label>
              <CoreMediaCapture
                @capture="handleActivityCapture"
                @save="handleActivitySave"
                @cancel="resetActivityForm"
              />
            </div>
  
            <div v-if="activityForm.media" class="mt-4">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
              <div class="relative">
                <img
                  v-if="activityForm.media.type === 'image'"
                  :src="activityForm.media.preview"
                  class="w-full max-w-md h-48 object-cover rounded"
                  alt="Activity preview"
                />
                <video
                  v-if="activityForm.media.type === 'video'"
                  :src="activityForm.media.preview"
                  controls
                  class="w-full max-w-md h-48 object-cover rounded"
                ></video>
              </div>
            </div>
  
            <button
              type="submit"
              :disabled="!canSubmitActivity"
              :class="[
                'w-full px-4 py-3.5 rounded-lg transition',
                canSubmitActivity 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              Add Activity
            </button>
          </form>
        </div>
  
        <!-- Meals Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-lg font-semibold mb-6">Record Meal</h2>
          
          <form @submit.prevent="addMeal" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Meal Name
              </label>
              <input
                v-model="mealForm.name"
                type="text"
                required
                class="w-full px-3 py-3.5 outline-none border border-gray-300 rounded-lg"
              />
            </div>
  
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Meal Capture
              </label>
              <CoreMediaCapture
                @capture="handleMealCapture"
                @save="handleMealSave"
                @cancel="resetMealForm"
              />
            </div>
  
            <div v-if="mealForm.media" class="mt-4">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
              <div class="relative">
                <img
                  v-if="mealForm.media.type === 'image'"
                  :src="mealForm.media.preview"
                  class="w-full max-w-md h-48 object-cover rounded"
                  alt="Meal preview"
                />
                <video
                  v-if="mealForm.media.type === 'video'"
                  :src="mealForm.media.preview"
                  controls
                  class="w-full max-w-md h-48 object-cover rounded"
                ></video>
              </div>
            </div>
  
            <button
              type="submit"
              :disabled="!canSubmitMeal"
              :class="[
                'w-full px-4 py-3.5 rounded-lg transition',
                canSubmitMeal 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              Add Meal
            </button>
          </form>
        </div>
  
        <!-- Summary Section -->
        <div class="mt-8 space-y-6">
          <div v-if="activities.length > 0" class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold mb-4">Recorded Activities</h3>
            <ul class="space-y-4">
              <li v-for="(activity, index) in activities" :key="activity.timestamp.toString()" class="border-b pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-medium">{{ activity.name }}</h4>
                    <p class="text-sm text-gray-600">{{ formatDate(activity.timestamp) }}</p>
                  </div>
                  <button 
                    @click="deleteActivity(index)"
                    class="text-red-600 hover:text-red-800"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#d0021b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  </button>
                </div>
                <div v-if="activity.image || activity.video" class="mt-2">
                    <!-- {{ activity }} -->
                    <img v-if="!activity?.image?.length" class="h-44 w-full" src="@/assets/icon/no-image.svg" />
                  <img
                    v-if="activity?.image?.length"
                    :src="activity.image.preview"
                    class="w-full max-w-md h-48 object-cover rounded"
                    alt="Activity image"
                  />
                  <video
                    v-if="activity.video"
                    :src="activity.video.preview"
                    controls
                    class="w-full max-w-md h-48 object-cover rounded"
                  ></video>
                </div>
              </li>
            </ul>
          </div>
  
          <div v-if="meals.length > 0" class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-4">Recorded Meals</h3>
            <ul class="space-y-4">
              <li v-for="(meal, index) in meals" :key="meal.timestamp.toString()" class="border order-gray-200 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-medium">{{ meal.name }}</h4>
                    <p class="text-sm text-gray-600">{{ formatDate(meal.timestamp) }}</p>
                  </div>
                  <button 
                    @click="deleteMeal(index)"
                    class="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
                <div v-if="meal.image || meal.video" class="mt-2">
                    <img v-if="!meal?.image?.length" class="h-44 w-full" src="@/assets/icon/no-image.svg" />
                  <img
                    v-if="meal?.image?.length"
                    :src="meal.image.preview"
                    class="w-full max-w-md h-48 object-cover rounded"
                    alt="Meal image"
                  />
                  <!-- <img class="w-full max-w-md h-48 object-cover rounded" v-else src="@/assets/icon/no-image.svg" /> -->
                  <video
                    v-if="meal.video"
                    :src="meal.video.preview"
                    controls
                    class="w-full max-w-md h-48 object-cover rounded"
                  ></video>
                </div>
              </li>
            </ul>
          </div>
  
          <button
            v-if="activities.length > 0 || meals.length > 0"
            @click="saveData"
            class="w-full px-4 py-3.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Save All Data
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  interface MediaFile {
    preview: string;
    file: File;
    type: 'image' | 'video';
  }
  
  interface Activity {
    name: string;
    image: MediaFile | null;
    video: MediaFile | null;
    timestamp: Date;
  }
  
  interface Meal {
    name: string;
    image: MediaFile | null;
    video: MediaFile | null;
    timestamp: Date;
  }
  
  const activities = ref<Activity[]>([]);
  const meals = ref<Meal[]>([]);
  
  const activityForm = ref({
    name: '',
    media: null as MediaFile | null
  });
  
  const mealForm = ref({
    name: '',
    media: null as MediaFile | null
  });
  
  const canSubmitActivity = computed(() => 
    activityForm.value.name.trim() && activityForm.value.media
  );
  
  const canSubmitMeal = computed(() => 
    mealForm.value.name.trim() && mealForm.value.media
  );
  
  const handleActivityCapture = (media: MediaFile) => {
    activityForm.value.media = {
      preview: URL.createObjectURL(media.file),
      file: media.file,
      type: media.file.type.startsWith('video/') ? 'video' : 'image'
    };
  };
  
  const handleActivitySave = (media: MediaFile) => {
    activityForm.value.media = {
      preview: URL.createObjectURL(media.file),
      file: media.file,
      type: media.file.type.startsWith('video/') ? 'video' : 'image'
    };
  };
  
  const handleMealCapture = (media: MediaFile) => {
    mealForm.value.media = {
      preview: URL.createObjectURL(media.file),
      file: media.file,
      type: media.file.type.startsWith('video/') ? 'video' : 'image'
    };
  };
  
  const handleMealSave = (media: MediaFile) => {
    mealForm.value.media = {
      preview: URL.createObjectURL(media.file),
      file: media.file,
      type: media.file.type.startsWith('video/') ? 'video' : 'image'
    };
  };
  
  const resetActivityForm = () => {
    if (activityForm.value.media?.preview) {
      URL.revokeObjectURL(activityForm.value.media.preview);
    }
    activityForm.value = {
      name: '',
      media: null
    };
  };
  
  const resetMealForm = () => {
    if (mealForm.value.media?.preview) {
      URL.revokeObjectURL(mealForm.value.media.preview);
    }
    mealForm.value = {
      name: '',
      media: null
    };
  };
  
  const addActivity = () => {
    if (!canSubmitActivity.value || !activityForm.value.media) return;
  
    activities.value.push({
      name: activityForm.value.name,
      image: activityForm.value.media.type === 'image' ? activityForm.value.media : null,
      video: activityForm.value.media.type === 'video' ? activityForm.value.media : null,
      timestamp: new Date()
    });
  
    resetActivityForm();
  };
  
  const addMeal = () => {
    if (!canSubmitMeal.value || !mealForm.value.media) return;
  
    meals.value.push({
      name: mealForm.value.name,
      image: mealForm.value.media.type === 'image' ? mealForm.value.media : null,
      video: mealForm.value.media.type === 'video' ? mealForm.value.media : null,
      timestamp: new Date()
    });
  
    resetMealForm();
  };
  
  const deleteActivity = (index: number) => {
    const activity = activities.value[index];
    if (activity.image?.preview) {
      URL.revokeObjectURL(activity.image.preview);
    }
    if (activity.video?.preview) {
      URL.revokeObjectURL(activity.video.preview);
    }
    activities.value.splice(index, 1);
  };
  
  const deleteMeal = (index: number) => {
    const meal = meals.value[index];
    if (meal.image?.preview) {
      URL.revokeObjectURL(meal.image.preview);
    }
    if (meal.video?.preview) {
      URL.revokeObjectURL(meal.video.preview);
    }
    meals.value.splice(index, 1);
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };
  
  const saveData = async () => {
    const data = {
      activities: activities.value.map(activity => ({
        ...activity,
        image: activity.image ? { 
          file: activity.image.file,
          type: activity.image.type 
        } : null,
        video: activity.video ? {
          file: activity.video.file,
          type: activity.video.type
        } : null
      })),
      meals: meals.value.map(meal => ({
        ...meal,
        image: meal.image ? {
          file: meal.image.file,
          type: meal.image.type
        } : null,
        video: meal.video ? {
          file: meal.video.file,
          type: meal.video.type
        } : null
      }))
    };
  
    try {
      console.log('Data to be sent to backend:', data);
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving data. Please try again.');
    }
  };
  
  // Cleanup function to revoke object URLs when component is unmounted
  onUnmounted(() => {
    activities.value.forEach(activity => {
      if (activity.image?.preview) URL.revokeObjectURL(activity.image.preview);
      if (activity.video?.preview) URL.revokeObjectURL(activity.video.preview);
    });
    
    meals.value.forEach(meal => {
      if (meal.image?.preview) URL.revokeObjectURL(meal.image.preview);
      if (meal.video?.preview) URL.revokeObjectURL(meal.video.preview);
    });
  });
  </script>