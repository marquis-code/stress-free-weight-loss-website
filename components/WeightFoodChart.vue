 <!-- components/WeightFoodChart.vue -->
 <template>
    <div class="relative">
      <canvas ref="chartRef"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  
  const props = defineProps<{
    data: Array<{
      month: string
      weight: number
      food: number
    }>
  }>()
  
  const chartRef = ref<HTMLCanvasElement | null>(null)
  
  onMounted(() => {
    if (!chartRef.value) return
  
    new Chart(chartRef.value, {
      type: 'line',
      data: {
        labels: props.data.map(d => d.month),
        datasets: [
          {
            label: 'Weight',
            data: props.data.map(d => d.weight),
            borderColor: '#7C3AED',
            tension: 0.4
          },
          {
            label: 'Food',
            data: props.data.map(d => d.food),
            borderColor: '#F97316',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  })
  </script>
