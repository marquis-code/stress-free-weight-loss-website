<template>
    <div class="border rounded-lg p-4 space-y-4">
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div v-if="isEditing" class="flex space-x-2">
            <input
              v-model="editedName"
              type="text"
              class="flex-1 px-3 py-2 border rounded-lg"
            />
            <button
              @click="saveEdit"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save
            </button>
            <button
              @click="cancelEdit"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
          <div v-else>
            <h4 class="font-medium">{{ item.name }}</h4>
            <p class="text-sm text-gray-600">{{ formatDate(item.timestamp) }}</p>
          </div>
        </div>
        
        <button
          v-if="!isEditing"
          @click="startEdit"
          class="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit
        </button>
      </div>
  
      <div class="space-y-4">
        <div v-if="item.image" class="relative">
          <img :src="item.image.preview" class="w-full h-48 object-cover rounded" />
          <button
            @click="$emit('deleteMedia', 'image')"
            class="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
  
        <div v-if="item.video" class="relative">
          <video :src="item.video.preview" controls class="w-full h-48 object-cover rounded"></video>
          <button
            @click="$emit('deleteMedia', 'video')"
            class="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const props = defineProps<{
    item: Activity | Meal;
  }>();
  
  const emit = defineEmits<{
    (e: 'update', name: string): void;
    (e: 'deleteMedia', type: 'image' | 'video'): void;
  }>();
  
  const isEditing = ref(false);
  const editedName = ref(props.item.name);
  
  const startEdit = () => {
    isEditing.value = true;
    editedName.value = props.item.name;
  };
  
  const saveEdit = () => {
    emit('update', editedName.value);
    isEditing.value = false;
  };
  
  const cancelEdit = () => {
    editedName.value = props.item.name;
    isEditing.value = false;
  };
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };
  </script>
  