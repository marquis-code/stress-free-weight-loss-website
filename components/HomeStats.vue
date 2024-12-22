<template>
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-xl font-bold text-gray-900 mb-2">Weight Loss Program</h1>
          <p class="text-gray-500">Day 21</p>
        </div>
        <div class="flex gap-2">
          <button class="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Icon name="heroicons:chevron-left" class="h-6 w-6" />
          </button>
          <button class="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Icon name="heroicons:chevron-right" class="h-6 w-6" />
          </button>
        </div>
      </div>
  
      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="bg-orange-500 rounded-xl p-6 text-white">
          <div class="text-5xl font-bold mb-2">82</div>
          <div class="text-sm opacity-90">Weight<span class="text-xs ml-1">kg</span></div>
        </div>
  
        <div class="bg-purple-600 rounded-xl p-6 text-white">
          <div class="text-5xl font-bold mb-2">51</div>
          <div class="text-sm opacity-90">Goal<span class="text-xs ml-1">kg</span></div>
        </div>
  
        <div class="bg-orange-400 rounded-xl p-6 text-white">
          <div class="text-5xl font-bold mb-2">1.4</div>
          <div class="text-sm opacity-90">Average Daily Loss<span class="text-xs ml-1">kg</span></div>
          <div class="mt-2 h-8">
            <div class="flex justify-between h-full">
              <div v-for="n in 8" :key="n" class="w-1 bg-white bg-opacity-30 rounded-full"></div>
              <div class="w-1 bg-white rounded-full"></div>
              <div v-for="n in 3" :key="n+8" class="w-1 bg-white bg-opacity-30 rounded-full"></div>
            </div>
          </div>
        </div>
  
        <div class="bg-blue-400 rounded-xl p-6 text-white">
          <div class="text-5xl font-bold mb-2">50</div>
          <div class="text-sm opacity-90">Daily Workout<span class="text-xs ml-1">min</span></div>
          <div class="mt-2 relative h-8">
            <!-- Simple line chart using SVG -->
            <svg viewBox="0 0 100 20" class="w-full h-full">
              <path d="M0,10 Q25,5 50,10 T100,10" stroke="white" fill="none" stroke-width="1.5"/>
              <circle cx="75" cy="10" r="2" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
  
      <!-- Statistics and Graphs Section -->
      <div class="grid grid-cols-1 gap-8">
        <!-- Statistics -->
        <div>
          <h2 class="text-lg font-bold text-gray-900 mb-4">Statistics</h2>
          <div class="grid grid-cols-2 gap-4">
            <StatCard 
              title="6:00am"
              subtitle="Wake Up Alarm"
              icon="heroicons:alarm"
              color="green"
            />
            <StatCard 
              title="8 hr"
              subtitle="Daily Sleep Schedule"
              icon="heroicons:moon"
              color="blue"
            />
            <StatCard 
              title="On Track"
              subtitle="Healthy Diet Plan"
              icon="heroicons:heart"
              color="purple"
            />
            <StatCard 
              title="ON"
              subtitle="Habit Tracker"
              icon="heroicons:chart-bar"
              color="orange"
            />
          </div>
        </div>
  
        <!-- Graphs -->
        <!-- <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-gray-900">Graphs</h2>
            <div class="flex gap-4">
              <button class="p-2 rounded-full hover:bg-gray-100">
                <Icon name="heroicons:clock" class="h-6 w-6 text-gray-400" />
              </button>
              <button class="p-2 rounded-full hover:bg-gray-100">
                <Icon name="heroicons:plus" class="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </div>
  
          <div class="bg-white rounded-xl p-6">
            <div class="flex gap-4 mb-4">
              <span class="text-purple-600 font-medium">Weight</span>
              <span class="text-orange-500 font-medium">Food</span>
            </div>
            <WeightFoodChart :data="graphData" class="w-full h-64" />
          </div>
        </div> -->
      </div>
</template>