<template>
<div>
  <div class="">
    <!-- Sticky search header -->
    <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
      <button type="button" class="-m-2.5 p-2.5 xl:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>
      </button>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="grid flex-1 grid-cols-1" action="#" method="GET">
          <input type="search" name="search" aria-label="Search" class="col-start-1 row-start-1 block h-full w-full bg-transparent pl-8 text-base  outline-none placeholder:text-gray-500 sm:text-sm/6" placeholder="Search">
          <svg class="pointer-events-none col-start-1 row-start-1 h-5 w-5 self-center text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
          </svg>
        </form>
      </div>
    </div>

    <main>
      <header>
        <!-- Secondary navigation -->
        <nav class="flex overflow-x-auto border-b py-4">
          <ul role="list" class="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8">
            <li>
              <a href="#" class="text-indigo-400">Overview</a>
            </li>
            <li>
              <a href="#" class="">Activities</a>
            </li>
            <li>
              <a href="#" class="">Appointnments</a>
            </li>
          </ul>
        </nav>

        <!-- Heading -->
        <div class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div class="flex items-center gap-x-3">
              <div class="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                <div class="h-2 w-2 rounded-full bg-current"></div>
              </div>
              <h1 class="flex gap-x-3 text-base/7">
                <span class="font-semibold ">Abah Marquis</span>
                <span class="text-gray-600">/</span>
                <span class="font-semibold ">abahmarquis@gmail.com</span>
              </h1>
            </div>
            <p class="mt-2 text-xs/6 text-gray-400">Deploys from GitHub via main branch</p>
          </div>
          <div class="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">Production</div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
          <div class="border-t  px-4 py-6 sm:px-6 lg:px-8">
            <p class="text-sm/6 font-medium text-gray-400">Number of activities</p>
            <p class="mt-2 flex items-baseline gap-x-2">
              <span class="text-4xl font-semibold tracking-tight ">0</span>
            </p>
          </div>
          <div class="border-t  px-4 py-6 sm:border-l sm:px-6 lg:px-8">
            <p class="text-sm/6 font-medium text-gray-400">Average deploy time</p>
            <p class="mt-2 flex items-baseline gap-x-2">
              <span class="text-4xl font-semibold tracking-tight ">3.65</span>
              <span class="text-sm text-gray-400">mins</span>
            </p>
          </div>
          <div class="border-t  px-4 py-6 sm:px-6 lg:border-l lg:px-8">
            <p class="text-sm/6 font-medium text-gray-400">Number of servers</p>
            <p class="mt-2 flex items-baseline gap-x-2">
              <span class="text-4xl font-semibold tracking-tight ">3</span>
            </p>
          </div>
          <div class="border-t  px-4 py-6 sm:border-l sm:px-6 lg:px-8">
            <p class="text-sm/6 font-medium text-gray-400">Success rate</p>
            <p class="mt-2 flex items-baseline gap-x-2">
              <span class="text-4xl font-semibold tracking-tight ">98.5%</span>
            </p>
          </div>
        </div>
      </header>

      <!-- Activity list -->
      <div class="border-t  pt-11">
        <h2 class="px-4 text-base/7 font-semibold  sm:px-6 lg:px-8">Latest Activities</h2>
        <table class="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col class="w-full sm:w-4/12">
            <col class="lg:w-4/12">
            <col class="lg:w-2/12">
            <col class="lg:w-1/12">
            <col class="lg:w-1/12">
          </colgroup>
          <thead class="border-b  text-sm/6 ">
            <tr>
              <th scope="col" class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">User</th>
              <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">Commit</th>
              <th scope="col" class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">Status</th>
              <th scope="col" class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">Duration</th>
              <th scope="col" class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8">Comment</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr>
              <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div class="flex items-center gap-x-4">
                  <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-8 w-8 rounded-full bg-gray-800">
                  <div class="truncate text-sm/6 font-medium ">Michael Foster</div>
                </div>
              </td>
              <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                <div class="flex gap-x-3">
                  <div class="font-mono text-sm/6 text-gray-400">2d89f0c8</div>
                  <span class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">main</span>
                </div>
              </td>
              <td class="py-4 pl-0 pr-4 text-sm/6 sm:pr-8 lg:pr-20">
                <div class="flex items-center justify-end gap-x-2 sm:justify-start">
                  <time class="text-gray-400 sm:hidden" datetime="2023-01-23T11:00">45 minutes ago</time>
                  <div class="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                    <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
                  </div>
                  <div class="hidden  sm:block">Completed</div>
                </div>
              </td>
              <td class="hidden py-4 pl-0 pr-8 text-sm/6 text-gray-400 md:table-cell lg:pr-20">25s</td>
              <td class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                <time datetime="2023-01-23T11:00">45 minutes ago</time>
              </td>
              <td class="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
            </button>
          </td>
            </tr>

          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>

<CoreDrawer :show="true">
  <template #header></template>
  <template #content>
    <div class="flow-root p-3">
  <dl class="-my-3 divide-y divide-gray-100 text-sm">
    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Title</dt>
      <dd class="text-gray-700 sm:col-span-2">Mr</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Name</dt>
      <dd class="text-gray-700 sm:col-span-2">John Frusciante</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Occupation</dt>
      <dd class="text-gray-700 sm:col-span-2">Guitarist</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Salary</dt>
      <dd class="text-gray-700 sm:col-span-2">$1,000,000+</dd>
    </div>

    <div class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt class="font-medium text-gray-900">Enter Comment</dt>
      <dd class="text-gray-700 sm:col-span-2">
       <textarea class="w-full outline-none bg-gray-100 p-2 rounded-lg border-[0.5px]" rows="6" cols="6" placeholder="Enter Comment"></textarea>
       <div class="flex justify-end items-end pt-6">
        <button class="text-white bg-black py-2.5 px-4 text-sm rounded-lg">Submit Comment</button>
       </div>
      </dd>
    </div>
  </dl>
</div>
  </template>
</CoreDrawer>

</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>