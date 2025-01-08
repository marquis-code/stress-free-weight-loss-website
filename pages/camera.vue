

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 class="text-2xl font-bold mb-6">Meals & Activities Tracker</h1>
  

      <div class="w-full max-w-xl bg-white p-4 rounded shadow mb-6">
        <h2 class="text-lg font-semibold mb-4">Add Meals</h2>
        <div v-for="(meal, index) in meals" :key="index" class="mb-4">
          <label class="block text-sm font-medium mb-2">Meal Name</label>
          <input
            v-model="meal.name"
            type="text"
            placeholder="Enter meal name"
            class="w-full px-3 py-2 border rounded mb-2"
          />
          <div v-if="meal.image" class="mb-2">
            <img :src="meal.image" alt="Meal" class="w-40 h-40 object-cover rounded" />
          </div>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="openCamera('meal', index)"
          >
            Add Photo
          </button>
        </div>
        <button
          class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          @click="addMeal"
        >
          Add New Meal
        </button>
      </div>
  
      
      <div class="w-full max-w-xl bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-4">Add Activities</h2>
        <div v-for="(activity, index) in activities" :key="index" class="mb-4">
          <label class="block text-sm font-medium mb-2">Activity Name</label>
          <input
            v-model="activity.name"
            type="text"
            placeholder="Enter activity name"
            class="w-full px-3 py-2 border rounded mb-2"
          />
          <div v-if="activity.image" class="mb-2">
            <img :src="activity.image" alt="Activity" class="w-40 h-40 object-cover rounded" />
          </div>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="openCamera('activity', index)"
          >
            Add Photo
          </button>
        </div>
        <button
          class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          @click="addActivity"
        >
          Add New Activity
        </button>
      </div>
  
    
      <button
        class="mt-6 px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600"
        @click="submitData"
      >
        Submit All Data
      </button>
  

      <div
        v-if="isCameraOpen"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
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
        <div class="mt-4 flex space-x-4">
          <button
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            @click="closeCamera"
          >
            Close Camera
          </button>
          <button
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            @click="switchCamera"
          >
            Switch Camera
          </button>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            @click="capturePhoto"
          >
            Capture Photo
          </button>
        </div>
      </div>

      <div
        v-if="photoToSave"
        class="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
      >
        <h2 class="text-lg font-semibold text-white mb-4">Preview Photo</h2>
        <img :src="photoToSave" alt="Preview" class="w-80 h-80 object-cover rounded mb-4" />
        <div class="flex space-x-4">
          <button
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            @click="discardPhoto"
          >
            Discard
          </button>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
            @click="savePhoto"
          >
            <span v-if="loading" class="loader mr-2"></span>
            {{ loading ? "Saving..." : "Save Photo" }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  import { useUploadFile } from "@/composables/core/useFileUpload";
  
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
  
    try {
      const response = await fetch("/api/submit-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("Data submitted successfully:", await response.json());
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
  