<template>
    <div class="flex flex-col space-y-4">
      <!-- Media Type Toggle -->
      <div v-if="cameraOptions.length > 0" class="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
      <label for="camera-select" class="text-sm font-medium text-gray-700">Select Camera:</label>
      <select
        id="camera-select"
        v-model="selectedCameraId"
        @change="initializeCamera"
        class="px-3 py-2 border border-gray-300 rounded-lg"
      >
        <option v-for="camera in cameraOptions" :key="camera.deviceId" :value="camera.deviceId">
          {{ camera.label || `Camera ${camera.deviceId}` }}
        </option>
      </select>
    </div>

      <div class="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
        <span class="text-sm font-medium text-gray-700">Capture Type:</span>
        <div class="flex bg-white rounded-lg p-1 shadow-sm">
          <button
            @click="setMediaType(false)"
            :class="[
              'px-4 py-2 text-sm rounded-md transition-colors',
              !isVideo ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            Photo
          </button>
          <button
            @click="setMediaType(true)"
            :class="[
              'px-4 py-2 text-sm rounded-md transition-colors',
              isVideo ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            ]"
          >
            Video
          </button>
        </div>
      </div>
  
      <!-- Camera/Preview Container -->
      <div class="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <!-- Instructions when camera is not active -->
        <div 
          v-if="!isCameraActive && !preview" 
          class="absolute inset-0 flex items-center justify-center text-gray-500"
        >
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>Click "Start Capture" to begin</p>
          </div>
        </div>
  
        <!-- Camera Feed -->
        <video
          v-show="isCameraActive && !preview"
          ref="videoRef"
          class="w-full h-full object-cover"
          autoplay
          playsinline
          muted
        ></video>
        
        <!-- Media Preview -->
        <div v-if="preview" class="absolute inset-0">
          <img 
            v-if="!isVideo" 
            :src="preview" 
            class="w-full h-full object-cover" 
            alt="Captured photo"
          />
          <video 
            v-else 
            :src="preview" 
            controls 
            class="w-full h-full object-cover"
          ></video>
        </div>
  
        <!-- Recording Indicator -->
        <div 
          v-if="isRecording" 
          class="absolute top-4 right-4 flex items-center space-x-2 bg-red-500 px-3 py-1 rounded-full text-white"
        >
          <div class="w-3 h-3 rounded-full bg-white animate-pulse"></div>
          <span>Recording</span>
        </div>
      </div>
  
      <!-- Action Buttons -->
      <div class="flex space-x-3">
        <!-- Start Capture Button -->
        <button
          v-if="!isCameraActive && !preview"
          @click="initializeCamera"
          class="flex-1 px-4 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start Capture
        </button>
  
        <!-- Capture/Record Buttons -->
        <button
          v-if="isCameraActive && !preview"
          @click="handleCapture"
          class="flex-1 px-4 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {{ isRecording ? 'Stop Recording' : (isVideo ? 'Start Recording' : 'Capture Photo') }}
        </button>
  
        <!-- Preview Action Buttons -->
        <template v-if="preview">
          <button
            @click="saveCapture"
            class="flex-1 px-4 py-3.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Save Capture
          </button>
          <button
            @click="resetCapture"
            class="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Retake
          </button>
        </template>
  
        <!-- Cancel Button -->
        <button
          v-if="isCameraActive && !preview"
          @click="closeCamera"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  </template>
<!--   
  <script setup lang="ts">
      import { useCamera } from '@/composables/core/useCamera';
  import { ref } from 'vue';
  
  const emit = defineEmits<{
    (e: 'capture', file: MediaFile): void
    (e: 'save', file: MediaFile): void
    (e: 'cancel'): void
  }>();
  
  const { 
    videoRef, 
    isRecording, 
    startCamera, 
    stopCamera, 
    takePhoto, 
    startRecording, 
    stopRecording 
  } = useCamera();
  
  const preview = ref<string | null>(null);
  const isCameraActive = ref(false);
  const isVideo = ref(false);
  const capturedMedia = ref<MediaFile | null>(null);
  
  const setMediaType = (video: boolean) => {
    if (isCameraActive.value) {
      closeCamera();
    }
    isVideo.value = video;
    preview.value = null;
    capturedMedia.value = null;
  };
  
  const initializeCamera = async () => {
    try {
      isCameraActive.value = true;
      await startCamera();
    } catch (error) {
      console.error('Failed to initialize camera:', error);
      isCameraActive.value = false;
      alert('Failed to access camera. Please ensure you have granted camera permissions.');
    }
  };
  
  const handleCapture = async () => {
    try {
      if (!isVideo.value) {
        const media = await takePhoto();
        preview.value = media.preview;
        capturedMedia.value = media;
        emit('capture', media);
      } else {
        if (!isRecording.value) {
          await startRecording();
        } else {
          const media = await stopRecording();
          preview.value = media.preview;
          capturedMedia.value = media;
          emit('capture', media);
        }
      }
    } catch (error) {
      console.error('Capture failed:', error);
      alert('Failed to capture media. Please try again.');
    }
  };
  
  const saveCapture = () => {
    if (capturedMedia.value) {
      emit('save', capturedMedia.value);
      closeCamera();
    }
  };
  
  const resetCapture = () => {
    preview.value = null;
    capturedMedia.value = null;
    initializeCamera();
  };
  
  const closeCamera = () => {
    stopCamera();
    isCameraActive.value = false;
    preview.value = null;
    capturedMedia.value = null;
    emit('cancel');
  };
  </script> -->

  <script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCamera } from '@/composables/core/useCamera';

const emit = defineEmits<{
  (e: 'capture', file: MediaFile): void;
  (e: 'save', file: MediaFile): void;
  (e: 'cancel'): void;
}>();

const { 
  videoRef, 
  isRecording, 
  startCamera, 
  stopCamera, 
  takePhoto, 
  startRecording, 
  stopRecording 
} = useCamera();

const preview = ref<string | null>(null);
const isCameraActive = ref(false);
const isVideo = ref(false);
const capturedMedia = ref<MediaFile | null>(null);

const cameraOptions = ref<MediaDeviceInfo[]>([]);
const selectedCameraId = ref<string | null>(null);

const setMediaType = (video: boolean) => {
  if (isCameraActive.value) {
    closeCamera();
  }
  isVideo.value = video;
  preview.value = null;
  capturedMedia.value = null;
};

const fetchCameraOptions = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    cameraOptions.value = devices.filter((device) => device.kind === 'videoinput');
    if (cameraOptions.value.length > 0) {
      selectedCameraId.value = cameraOptions.value[0].deviceId; // Default to the first camera
    }
  } catch (error) {
    console.error('Failed to fetch camera options:', error);
  }
};

const initializeCamera = async () => {
  try {
    isCameraActive.value = true;
    await startCamera(selectedCameraId.value || undefined); // Pass the selected camera ID
  } catch (error) {
    console.error('Failed to initialize camera:', error);
    isCameraActive.value = false;
    alert('Failed to access camera. Please ensure you have granted camera permissions.');
  }
};

const handleCapture = async () => {
  try {
    if (!isVideo.value) {
      const media = await takePhoto();
      preview.value = media.preview;
      capturedMedia.value = media;
      emit('capture', media);
    } else {
      if (!isRecording.value) {
        await startRecording();
      } else {
        const media = await stopRecording();
        preview.value = media.preview;
        capturedMedia.value = media;
        emit('capture', media);
      }
    }
  } catch (error) {
    console.error('Capture failed:', error);
    alert('Failed to capture media. Please try again.');
  }
};

const saveCapture = () => {
  if (capturedMedia.value) {
    emit('save', capturedMedia.value);
    closeCamera();
  }
};

const resetCapture = () => {
  preview.value = null;
  capturedMedia.value = null;
  initializeCamera();
};

const closeCamera = () => {
  stopCamera();
  isCameraActive.value = false;
  preview.value = null;
  capturedMedia.value = null;
  emit('cancel');
};

onMounted(() => {
  fetchCameraOptions();
});
</script>