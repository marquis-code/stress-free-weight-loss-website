

<template>
  <div class="lg:p-6">

    <div class="w-full bg-white border-[0.5px] border-gray-100 rounded-lg mb-6"> 
<div class="flex justify-between items-center border-b border-[0.5px] border-gray-50 px-4 py-4">
      <h2 class="text- font-medium">Add Meals</h2>
 <div>
  <button
        type="button"
        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-x-3 text-sm"
        @click="addMeal"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Add Meal
      </button>
 </div>
</div>
      <div v-for="(meal, index) in meals" :key="index" class="mb-4 p-4">
        <label class="block text-xs font-medium mb-2">Meal Name</label>
        <input
          v-model="meal.name"
          type="text"
          placeholder="Enter meal name"
          class="w-full px-3 py-3 text-sm bg-gray-100 w-full outline-none border-[0.5px] border-gray-100 rounded mb-2"
        />
        <div v-if="meal.image" class="mb-2">
          <img :src="meal.image" alt="Meal" class="w-40 h-40 object-cover rounded" />
        </div>
        <button
          type="button"
          class="flex items-center text-sm border-[0.5px] mt-2 text-white rounded-lg gap-x-3 p-2 px-3 bg-black"
          @click="openCamera('meal', index)"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
        Add Photo
        </button>
      </div>
    </div>

    
    <div class="w-full bg-white border-[0.5px] border-gray-100 rounded-lg">
     <div class="flex justify-between items-center border-b border-[0.5px] border-gray-50 px-4 py-4">
      <h2 class="text- font-semibold">Add Activities</h2>
      <button
        type="button"
        class="px-4 py-2 bg-green-500 rounded-lg text-white flex items-center gap-x-3 text-sm"
        @click="addActivity"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Add Activity
      </button>
     </div>
      <div v-for="(activity, index) in activities" :key="index" class="mb-4 p-4">
        <label class="block text-xs font-medium mb-2">Activity Name</label>
        <input
          v-model="activity.name"
          type="text"
          placeholder="Enter activity name"
           class="w-full px-3 py-3 text-sm bg-gray-100 w-full outline-none border-[0.5px] border-gray-100 rounded mb-2"
        />
        <div v-if="activity.image" class="mb-2">
          <img :src="activity.image" alt="Activity" class="w-40 h-40 object-cover rounded" />
        </div>
        <button
           type="button"
           class="flex items-center text-sm border-[0.5px] text-white mt-2 rounded-lg gap-x-3 p-2 px-3 bg-black"
          @click="openCamera('activity', index)"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
        Add Photo
        </button>
      </div>
    </div>

  
<div class="w-full pt-6">
  <button
      type="button"
      class="mt-6 w-full px-6 py-3 text-sm bg-green-500 text-white rounded"
      @click="submitData"
    >
      Submit All Data
    </button>
</div>


    <div
      v-if="isCameraOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
    >
      <div class="bg-white border rounded-lg p-3">
        <div class="relative w-80 h-80 bg-black">
        <video
          ref="videoRef"
          class="absolute inset-0 w-full h-full object-cover"
          autoplay
          playsinline
          muted
        ></video>
        <canvas ref="canvasRef" class="hidden"></canvas>
      </div>
      <div class="mt-4 flex w-full justify-center items-center space-x-4">
        <div>
          <button
           type="button"
          class="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          @click="closeCamera"
        >
          <img src="@/assets/icon/close-camera.svg" class="h-7  w-7" />
        </button>
        </div>
     <div>
      <button
           type="button"
          class="px-2 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          @click="switchCamera"
        >
          <img src="@/assets/icon/switch-camera.svg" class="h-7  w-7" />
        </button>
     </div>
    <div>
      <button
           type="button"
          class="px-2 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          @click="capturePhoto"
        >
          <img src="@/assets/icon/capture.svg" class="h-7  w-7" />
        </button>
    </div>
      </div>
      </div>
    </div>

    <div
      v-if="photoToSave"
      class="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
    >
     <div class="bg-white border rounded-lg p-3">
      <h2 class="text- font-medium mb-4">Preview Photo</h2>
      <img :src="photoToSave" alt="Preview" class="w-80 h-80 object-cover rounded mb-4" />
      <div class="flex w-full space-x-4">
     <div class="w-full">
      <button
          type="button"
          class="px-4 py-2 w-full text-sm text-center bg-red-500 text-white rounded hover:bg-red-600"
          @click="discardPhoto"
        >
          Discard
        </button>
     </div>
       <div class="w-full">
        <button
          type="button"
          class="px-4 py-2 w-full text-sm text-center bg-blue-500 justify-center text-white rounded hover:bg-blue-600 flex items-center"
          @click="savePhoto"
        >
          <span v-if="loading" class="loader mr-2"></span>
          {{ loading ? "Saving..." : "Save Photo" }}
        </button>
       </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUploadFile } from "@/composables/core/useFileUpload";
import { useCreateActivity } from '@/composables/modules/activity/useCreateActivity'
const { loading: creating, createActivity } = useCreateActivity()

const meals = ref([{ name: "", image: "" }]);
const activities = ref([{ name: "", image: "" }]);
const isCameraOpen = ref(false);
const photoToSave = ref<string | null>(null);
const isUsingFrontCamera = ref(true);
const currentItem = ref<{ type: "meal" | "activity"; index: number } | null>(null);

const videoRef = ref<HTMLVideoElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let stream: MediaStream | null = null;

const { uploadFile, loading, uploadResponse } = useUploadFile();

const openCamera = async (type: "meal" | "activity", index: number) => {
  currentItem.value = { type, index };
  await startCamera();
};

const closeCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
  }
  stream = null;
  isCameraOpen.value = false;
};

const switchCamera = async () => {
  isUsingFrontCamera.value = !isUsingFrontCamera.value;
  await startCamera();
};

const startCamera = async () => {
  try {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    const mode = isUsingFrontCamera.value ? "user" : "environment";
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: mode } });
    if (videoRef.value) {
      videoRef.value.srcObject = stream;
    }
    isCameraOpen.value = true;
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
};

const capturePhoto = () => {
  if (!videoRef.value || !canvasRef.value) return;

  const canvas = canvasRef.value;
  const context = canvas.getContext("2d");
  if (!context) return;

  canvas.width = videoRef.value.videoWidth;
  canvas.height = videoRef.value.videoHeight;
  context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height);

  photoToSave.value = canvas.toDataURL("image/png");
  closeCamera();
};

const savePhoto = async () => {
  if (!photoToSave.value || !currentItem.value) return;

  const blob = await fetch(photoToSave.value).then((res) => res.blob());
  const file = new File([blob], "photo.png", { type: "image/png" });

  const response = await uploadFile(file);
  if (response && currentItem.value) {
    const { type, index } = currentItem.value;
    if (type === "meal") meals.value[index].image = response.url;
    else if (type === "activity") activities.value[index].image = response.url;
  }

  discardPhoto();
};

const discardPhoto = () => {
  photoToSave.value = null;
};

const addMeal = () => {
  meals.value.push({ name: "", image: "" });
};

const addActivity = () => {
  activities.value.push({ name: "", image: "" });
};

const submitData = async () => {
  const data = {
    meals: meals.value,
    activities: activities.value,
  };

  await createActivity(data)

  // try {
  //   const response = await fetch("/api/submit-data", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  //   console.log("Data submitted successfully:", await response.json());
  // } catch (error) {
  //   console.error("Error submitting data:", error);
  // }
};
</script>

<style>
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
