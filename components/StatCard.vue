  <!-- components/StatCard.vue -->
  <template>
    <div :class="[baseClasses, colorClasses[color]]">
      <div class="flex items-center gap-2 mb-2">
        <Icon :name="icon" class="h-6 w-6" />
        <span class="text-2xl font-bold">{{ title }}</span>
      </div>
      <div>{{ subtitle }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    title: string
    subtitle: string
    icon: string
    color: 'green' | 'blue' | 'purple' | 'orange'
  }
  
  const props = defineProps<Props>()
  
  const baseClasses = 'p-6 rounded-xl'
  const colorClasses = {
    green: 'bg-green-50 text-green-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600'
  }
  </script>