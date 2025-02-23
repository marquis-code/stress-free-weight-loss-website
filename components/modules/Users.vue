<template>
    <!-- <main>
        <table  class="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col class="w-full sm:w-4/12">
            <col class="lg:w-4/12">
            <col class="lg:w-2/12">
            <col class="lg:w-1/12">
            <col class="lg:w-1/12">
          </colgroup>
          <thead class="border-b border-white/10 text-sm/6 text-white">
            <tr>
              <th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">User</th>
              <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Commit</th>
              <th scope="col" class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">Status</th>
              <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">Duration</th>
              <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">
                Deployed at</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr>
              <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div class="flex items-center gap-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" class="h-8 w-8 rounded-full bg-gray-800">
                  <div class="truncate text-sm/6 font-medium text-white">Michael Foster</div>
                </div>
              </td>
              <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div class="flex gap-x-3">
                  <div class="font-mono text-sm/6 text-gray-400">2d89f0c8</div>
                  <span
                    class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">main</span>
                </div>
              </td>
              <td class="py-4 pl-0 pr-4 text-sm/6 sm:pr-8 lg:pr-20">
                <div class="flex items-center justify-end gap-x-2 sm:justify-start">
                  <time class="text-gray-400 sm:hidden" datetime="2023-01-23T11:00">45 minutes ago</time>
                  <div class="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                    <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
                  </div>
                  <div class="hidden text-white sm:block">Completed</div>
                </div>
              </td>
              <td class="hidden py-4 pl-0 pr-8 text-sm/6 text-gray-400 md:table-cell lg:pr-20">25s</td>
              <td class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                <time datetime="2023-01-23T11:00">45 minutes ago</time>
              </td>
            </tr>


          </tbody>
        </table>
    </main> -->
    <div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold text-gray-900">Plans</h1>
      <p class="mt-2 text-sm text-gray-700">Your team is on the <strong class="font-semibold text-gray-900">Startup</strong> plan. The next payment of $80 will be due on August 4, 2022.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update credit card</button>
    </div>
  </div>
  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Plan</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Memory</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">CPU</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Storage</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Select</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
            <div class="font-medium text-gray-900">Hobby</div>
            <div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
              <span>4 GB RAM / 4 CPUs</span>
              <span class="hidden sm:inline">·</span>
              <span>128 GB SSD disk</span>
            </div>
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">4 GB RAM</td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">4 CPUs</td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">128 GB SSD disk</td>
          <td class="px-3 py-3.5 text-sm text-gray-500">
            <div class="sm:hidden">$40/mo</div>
            <div class="hidden sm:block">$40/month</div>
          </td>
          <td class="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <button type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Select<span class="sr-only">, Hobby</span></button>
          </td>
        </tr>
        <tr>
          <td class="relative border-t border-transparent py-4 pl-4 pr-3 text-sm sm:pl-6">
            <div class="font-medium text-gray-900">
              Startup
              <span class="ml-1 text-indigo-600">(Current Plan)</span>
            </div>
            <div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
              <span>8 GB RAM / 6 CPUs</span>
              <span class="hidden sm:inline">·</span>
              <span>256 GB SSD disk</span>
            </div>
            <div class="absolute -top-px left-6 right-0 h-px bg-gray-200"></div>
          </td>
          <td class="hidden border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 lg:table-cell">8 GB RAM</td>
          <td class="hidden border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 lg:table-cell">6 CPUs</td>
          <td class="hidden border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500 lg:table-cell">256 GB SSD disk</td>
          <td class="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
            <div class="sm:hidden">$80/mo</div>
            <div class="hidden sm:block">$80/month</div>
          </td>
          <td class="relative border-t border-transparent py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <button type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white" disabled>Select<span class="sr-only">, Startup</span></button>
            <div class="absolute -top-px left-0 right-6 h-px bg-gray-200"></div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
</template>

<script setup lang="ts">
 const props = defineProps({
    users: {
        type: Array,
        default: () => []
    }
 })
</script>