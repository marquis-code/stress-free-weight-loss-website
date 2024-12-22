<template>
    <div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold text-gray-900">Health Tips</h1>
      <p class="mt-2 text-sm text-gray-700">A list of all the health tips in your account including their name, title, email and role.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm">Add new health tip</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table v-if="!loading && !healthTips.length" class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Title</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Scheduled Date</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="item in healthTips" :key="item.id" class="even:bg-gray-50">
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{{ item?.title ?? 'Nil' }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item?.desctiption ?? 'Nil' }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ item?.scheduledDate ?? 'Nil' }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Sent</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
        <div v-else-if="loading && !healthTips.length" class="rounded-md p-4 container mx-auto mt-10">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-96 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        <section v-else class="flex flex-col justify-between items-center space-y-2 mt-10">
          <img src="@/assets/icon/illustration.svg" />
          <h2 class="text-[#1D2739]">No Health found</h2>
        </section>
      </div>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { useFetchHealthTips } from '@/composables/modules/admin/useFetchHealthTips'
const {  healthTips, loading } = useFetchHealthTips()
definePageMeta({
  layout: "admin",
});
</script>