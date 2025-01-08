<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-xl font-bold mb-4">Camera Switch & Capture</h1>
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
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
  
      <div v-if="photo" class="mt-4">
        <h2 class="text-lg font-semibold mb-2">Captured Photo:</h2>
        <img :src="photo" alt="Captured" class="w-80 h-80 object-cover rounded" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const videoRef = ref<HTMLVideoElement | null>(null);
  const canvasRef = ref<HTMLCanvasElement | null>(null);
  const photo = ref<string | null>(null);
  const isUsingFrontCamera = ref(true);
  let stream: MediaStream | null = null;
  
  const getCameraStream = async (facingMode: "user" | "environment") => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode },
    });
  
    if (videoRef.value) {
      videoRef.value.srcObject = stream;
    }
  };
  
  const switchCamera = async () => {
    isUsingFrontCamera.value = !isUsingFrontCamera.value;
    const mode = isUsingFrontCamera.value ? "user" : "environment";
    await getCameraStream(mode);
  };
  
  const capturePhoto = () => {
    if (!videoRef.value || !canvasRef.value) return;
  
    const canvas = canvasRef.value;
    const context = canvas.getContext("2d");
    if (!context) return;
  
    canvas.width = videoRef.value.videoWidth;
    canvas.height = videoRef.value.videoHeight;
    context.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height);
    photo.value = canvas.toDataURL("image/png");
  };
  
  onMounted(() => {
    getCameraStream("user").catch((error) =>
      console.error("Error accessing camera:", error)
    );
  });
  
  onUnmounted(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  });
  </script>
  
  <style>
  /* Tailwind CSS is already being used; no custom styles needed */
  </style>
  