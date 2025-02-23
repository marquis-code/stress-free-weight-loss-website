<template>
  <div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold text-gray-900">Users</h1>
      <p class="mt-2 text-sm text-gray-700">A list of all users.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Export as CSV</button>
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
      <tbody class="bg-white">
        <tr v-for="(item, idx) in users.users" @click="router.push(`/admin/dashboard/users/${item.id}`)" class="even:bg-gray-50 cursor-pointer">
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
</template>

<script setup lang="ts">
import { useFetchUsers } from "@/composables/modules/admin/useFetchUsers";
const { users, loading } = useFetchUsers();
const router = useRouter()
definePageMeta({
  layout: "admin",
});
</script>
