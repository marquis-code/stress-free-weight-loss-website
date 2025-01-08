<!-- components/WeightLossDashboard.vue -->
<template>
<main>
    <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    <section class="lg:col-span-2">
      <!-- Navigation -->
      <nav class="flex items-center justify-between mb-8">
        <div class="flex gap-8">
          <a v-for="item in navItems" 
             :key="item"
             @click="tab = item"
             :class="[
               'text-gray-600 cursor-pointer hover:text-gray-900 transition-colors',
               tab === item ? 'border-b-2 border-gray-900' : ''
             ]">
            {{ item }}
          </a>
        </div>
        <div class="flex items-center gap-4">
          <button class="text-gray-600 hover:text-gray-900">
            <Icon name="heroicons:magnifying-glass" class="h-6 w-6" />
          </button>
          <button class="text-gray-600 hover:text-gray-900">
            <Icon name="heroicons:bell" class="h-6 w-6" />
          </button>
          <button class="text-gray-600 hover:text-gray-900">
            <Icon name="heroicons:user" class="h-6 w-6" />
          </button>
        </div>
      </nav>
  
      <HomeStats v-if="tab === 'Home'" />


      <Calender v-if="tab === 'Calender'" />
    </section>
    <section class="">
        <div class="">
				<div
					class="mt-8 py-2 flex-shrink-0 flex flex-col bg-white
					dark:bg-gray-600 rounded-lg">
					<!-- Card list container -->

					<h3
						class="flex items-center pt-1 pb-1 px-4 text-lg font-semibold
						capitalize dark:text-gray-300">
						<!-- Header -->
						<span>Tips For Today</span>
						<button class="ml-2">
							<svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
								<path
									d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
									0l-22.6-22.6c-9.4-9.4-9.4-24.6
									0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
									0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
									136c9.5 9.4 9.5 24.6.1 34z"></path>
							</svg>
						</button>
					</h3>

					<div>
						<!-- List -->

						<ul v-if="!loading && healthTips?.length" class="pt-1 pb-2 px-3 overflow-y-auto">

								<li v-for="item in healthTips" :key="item.id" class="mt-2">
									<a
										class="p-5 flex flex-col justify-between
										bg-gray-100 dark:bg-gray-200 rounded-lg"
										href="#">

										<div
											class="flex items-center justify-between
											font-semibold capitalize dark:text-gray-700">
											<!-- Top section -->
											<span>{{ item?.title ?? 'Nil' }}</span>
											<div class="flex items-center">
												<svg
													class="h-5 w-5 fill-current mr-1
													text-gray-600"
													viewBox="0 0 24 24">
													<path
														d="M14 12l-4-4v3H2v2h8v3m12-4a10
														10 0 01-19.54 3h2.13a8 8 0
														100-6H2.46A10 10 0 0122 12z"></path>
												</svg>
												<span>2 min read</span>
											</div>
										</div>

										<p
											class="text-sm font-medium leading-snug
											text-gray-600 my-3">
											<!-- Middle section -->
											{{ item?.description ?? 'Nil' }}
										</p>

										<div class="flex justify-between">
											<!-- Bottom section -->
											<div class="flex">
												<img
													class="h-6 w-6 rounded-full mr-3"
													src="https://via.placeholder.com/150"
													alt="Contributor" />
												<span>
													<span
														class="text-blue-500
														font-semibold">
														Dr. Sarah L.
													</span>
													Adaeze Mba
												</span>
											</div>

											<p
												class="text-sm font-medium leading-snug
												text-gray-600">
												Today
											</p>
										</div>

									</a>
								</li>
						</ul>

						<div v-else-if="loading && !healthTips.length" class="rounded-md p-4 container mx-auto mt-10">
						<div class="animate-pulse flex space-x-4">
							<div class="flex-1 space-y-6 py-1">
							<div class="h-96 bg-slate-200 rounded"></div>
							</div>
						</div>
						</div>
						<section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
						<img src="@/assets/icon/illustration.svg" />
						<h2 class="text-[#1D2739]">No Health Tips Available</h2>
						</section>
						<a v-if="healthTips?.length"
							href="#"
							class="flex justify-center capitalize text-blue-500
							dark:text-blue-200">
							<span>see all</span>
						</a>

					</div>

				</div>

				<div
					class="mt-8 py-2 flex-shrink-0 flex flex-col
					bg-purple-300 rounded-lg text-white">

					<div class="flex flex-col items-center mt-12">
						<img
							src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
							alt=" empty schedule" />

						<span class="font-bold mt-8">Your activity is empty</span>

						<span class="text-purple-500">
							Make your first activity
						</span>

					<div class="pb-3">
						<button @click="showActivityModal = true" class="mt-8 bg-purple-800 rounded-lg py-2 px-4">
							Create Activity
						</button>
					</div>

					</div>
				</div>

			</div>
    </section>
</main>
<CoreDrawer @close="showActivityModal = false" :show="showActivityModal">
		<template #header>
			<div class="space-y-1">
                      <h2 class="text-lg font-semibold text-gray-900" id="slide-over-title">Weight Loss Activity Tracker</h2>
                      <p class="text-sm text-gray-500">Get started by filling in the information below to create your activity.</p>
                    </div> 
		</template>
        <template #content>
			<CoreActivityForm />
		</template>
	</CoreDrawer>
</main>
  </template>
  
  <script setup lang="ts">
  import { useFetchHealthTipByDate } from '@/composables/modules/admin/useFetchHealthTipByDate'
const { healthTips, loading } = useFetchHealthTipByDate()
  const showActivityModal = ref(false)
  const navItems = ref(['Home', 'Calender'])

  definePageMeta({
    layout: 'user',
	middleware: 'auth'
  })
  
  const graphData = ref([
    { month: 'Jan', weight: 2000, food: 2400 },
    { month: 'Feb', weight: 4000, food: 1398 },
    { month: 'Mar', weight: 6000, food: 9800 },
    { month: 'Apr', weight: 2780, food: 3908 },
    { month: 'May', weight: 8900, food: 4800 },
    { month: 'Jun', weight: 2390, food: 3800 },
    { month: 'Jul', weight: 3490, food: 4300 },
    { month: 'Aug', weight: 2000, food: 2400 },
    { month: 'Sep', weight: 2780, food: 3908 }
  ])

  const tab = ref('Home')
  </script>
  