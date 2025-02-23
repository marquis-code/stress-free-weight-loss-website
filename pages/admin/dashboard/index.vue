<!-- <template>
  <main>
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
      <button type="button" class="-m-2.5 p-2.5 text-white xl:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fill-rule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd" />
        </svg>
      </button>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="grid flex-1 grid-cols-1" action="#" method="GET">
          <input type="search" name="search" aria-label="Search"
            class="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-none placeholder:text-gray-500 sm:text-sm/6"
            placeholder="Search">
          <svg class="pointer-events-none col-start-1 row-start-1 h-5 w-5 self-center text-gray-500" viewBox="0 0 20 20"
            fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clip-rule="evenodd" />
          </svg>
        </form>
      </div>
    </div>

    <main class="bg-gray-900">
     <ModulesDashboardStatsHeader />

      <div class="border-t border-white/10 pt-11 bg-gray-900">
        <h2 class="px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8">Latest Users</h2>
        {{users}}
        <ModulesUsers v-if="!loading && users?.length" :users="users" />
        <div v-else-if="loading && !users.length" class="rounded-md p-4 container mx-auto mt-10">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-96 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        <section v-else class="flex flex-col justify-between items-center border space-y-2 mt-10">
          <img src="@/assets/icon/illustration.svg" />
          <h2 class="text-[#1D2739]">No Users found</h2>
        </section>
      </div>
    </main>
  </main>
</template> -->

<template>
  <main class="px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
    <div class="">
  <h3 class="text-base font-semibold text-gray-900">Dashboard Statistics</h3>
  <dl class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4 border-[0.5px] rounded-lg mt-6">
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Total Revenue</dt>
    <dd class="text-xs font-medium text-gray-700">+4.75%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">$405,091.00</dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Total Users</dt>
    <dd class="text-xs font-medium text-rose-600">+54.02%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{{users?.users?.length ?? 0}}</dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Total Health Tips</dt>
    <dd class="text-xs font-medium text-gray-700">-1.39%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{{healthTips?.length ?? 0}}</dd>
  </div>
  <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
    <dt class="text-sm/6 font-medium text-gray-500">Total Activities</dt>
    <dd class="text-xs font-medium text-rose-600">+10.18%</dd>
    <dd class="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">0</dd>
  </div>
</dl>

</div>

<!-- {{users}} -->
 <!-- {{healthTips}} -->
  <!-- {{activities}} -->

<div>
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold text-gray-900">Recent Signups</h1>
      <p class="mt-2 text-sm text-gray-700">A list of all recent signups within 2 weeks</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View all users</button>
    </div>
  </div>
  <div  v-if="!loading && users?.users?.length" class="-mx-4 mt-10 ring-1 ring-gray-100 sm:mx-0 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-100">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Email</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Phone</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Active Plan</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Plan Expiry</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date Joined</th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Select</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in users.users">
          <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
             {{item?.name ?? 'Nil'}}
          </td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{{item?.email ?? 'Nil'}}</td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{{item?.phone ?? 'Nil'}}</td>
          <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">{{item?.subscriptionPlan ?? 'Nil'}}</td>
          <td class="px-3 py-3.5 text-sm text-gray-500">
            {{item?.subscriptionExpiry ?? 'Nil'}}
          </td>
          <td class="px-3 py-3.5 text-sm text-gray-500">
            {{item?.createdAt ?? 'Nil'}}
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
  <div v-else-if="loading && !users.length" class="rounded-md p-4 container mx-auto mt-10">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-44 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        <section v-else class="flex flex-col justify-between items-center border space-y-2 mt-10">
          <img src="@/assets/icon/illustration.svg" />
          <h2 class="text-[#1D2739]">No Users found</h2>
        </section>
</div>



  </main>
</template>

<script setup lang="ts">
import { useFetchUsers } from '@/composables/modules/admin/useFetchUsers'
import { useFetchHealthTips } from '@/composables/modules/admin/useFetchHealthTips'
import { useFetchActivities } from '@/composables/modules/activity/useFetchActivities'
const {  healthTips, loading: loadingHealthTips } = useFetchHealthTips()
const { users, loading } = useFetchUsers()
const { activities, loading: fetchingActivities } = useFetchActivities()
definePageMeta({
  layout: 'admin'
})
</script>