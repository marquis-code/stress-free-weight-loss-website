<template>
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

    <main>
     <ModulesDashboardStatHeader />

      <div class="border-t border-white/10 pt-11 bg-gray-900">
        <h2 class="px-4 text-base/7 font-semibold text-white sm:px-6 lg:px-8">Latest Users</h2>
        <ModulesUsers v-if="!loading && users?.length" :users="users" />
        <div v-else-if="loading && !users.length" class="rounded-md p-4 container mx-auto mt-10">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-96 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        <section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
          <img src="@/assets/icon/illustration.svg" />
          <h2 class="text-[#1D2739]">No Users found</h2>
        </section>
      </div>
    </main>
  </main>
</template>

<script setup lang="ts">
import { useFetchUsers } from '@/composables/modules/admin/useFetchUsers'
const { users, loading } = useFetchUsers()
definePageMeta({
  layout: 'admin'
})
</script>