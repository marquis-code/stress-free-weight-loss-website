<template>
    <!-- component -->
<div class="flex flex-col items-start justify-start flex-auto flex-shrink-0">
  <div class="relative h-56 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg w-full overflow-hidden">
    <svg viewBox="0 0 220 192" width="220" height="192" fill="none" class="absolute -left-10 -top-16 text-blue-900 opacity-50">
      <defs>
        <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
        </pattern>
      </defs>
      <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
    </svg>

    <p class="absolute right-3 top-5">
      <img src="@/assets/wema-logo1.jpeg" alt="" class="h-10 w-auto" />
    </p>
    <svg viewBox="0 0 220 192" width="220" height="192" fill="none" class="absolute -right-20 -bottom-32 text-blue-900 opacity-50">
      <defs>
        <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
        </pattern>
      </defs>
      <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
    </svg>
    <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png" alt="" srcset="" class="absolute right-4 bottom-2 h-24"/>
    <div class="absolute top-10 left-8 h-12 w-16 bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-90 rounded-lg overflow-hidden">
      <span class="flex absolute top-1/2 left-1 h-full w-10 bg-opacity-50 rounded-lg transform -translate-y-1/2 -translate-x-1/2 border border-gray-400"></span>
      <span class="flex absolute top-1/2 right-1 h-full w-10 bg-opacity-50 rounded-lg transform -translate-y-1/2 translate-x-1/2 border border-gray-400"></span>
      <span class="flex absolute top-1.5 right-0 w-full h-5 bg-opacity-50 rounded-full transform -translate-y-1/2 border border-gray-400"></span>
      <span class="flex absolute bottom-1.5 right-0 w-full h-5 bg-opacity-50 rounded-full transform translate-y-1/2 border border-gray-400"></span>
    </div>
    <!-- <div class="absolute bottom-20 left-8 text-white font-semibold text-2xl space-x-1.5">
      <span class="flex block gap-x-2">023 7858 301 <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></span>
    </div> -->
    <div class="absolute bottom-20 left-8 text-white font-semibold text-2xl space-x-1.5">
    <span class="flex block gap-x-2 text-xl">
      {{ accountNumber }}
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        @click="copyPhoneNumber"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </span>
  </div>
    <div class="absolute bottom-14 left-8 text-gray-200 font-semibold text-base">
      <span>NGN 50,000</span>
    </div>
    <div class="absolute bottom-6 left-8 text-gray-200 font-semibold text-xl uppercase">
      <span class="text-xs">Stress Free Weight Loss</span>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@/composables/core/useClipboard';
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const accountNumber = ref('023 7858 301');
const { copyToClipboard } = useClipboard();

const copyPhoneNumber = () => {
  copyToClipboard(accountNumber.value).then(() => {
    showToast({
            title: "Success",
            message: 'Account Number copied successfully',
            toastType: "success",
            duration: 3000
          });
  });
};
</script>