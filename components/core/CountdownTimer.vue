<template>
    <div class="max-w-sm mx-auto">
      <!-- <h1 class="text-xl font-bold mb-4">Countdown Timer</h1> -->
      <p class="text-lg font-medium text-gray-700">
        Coaching duration Left: 
        <span v-if="!isExpired" class="text-blue-600">{{ timeLeft }}</span>
        <span v-else class="text-red-600">Subscription Expired</span>
      </p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCountdownTimer } from "@/composables/core/useCountdownTimer";
  
  const createdAt = "2025-03-01T00:00:45.438Z";
  const subscriptionExpiry = "2025-03-09T00:00:45.438Z";
  
  const { timeLeft, isExpired } = useCountdownTimer(createdAt, subscriptionExpiry);
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  