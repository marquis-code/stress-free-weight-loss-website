<template>
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-20 w-auto mt-10" src="@/assets/logo.png" alt="Your Company">
    <h2 class="mt- text-center text-2xl/9 font-bold tracking-tight text-gray-900">Admin Login</h2>
    <p class="text-sm text-center font-medium">admin@stressfreeweightloss.com</p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit="login">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-memo="credential.email.value" type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          <div class="text-sm">
            <!-- <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> -->
          </div>
        </div>
        <div class="mt-2">
          <input v-memo="credential.password.value" type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div class="pt-10">
        <button :disabled="!isFormDisabled || laoding" type="submit" class="flex w-full justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-black px-3 py-3 text-sm/6 font-semibold text-white shadow-sm">
            {{  loading ? 'processing...' : 'Sign in' }}
        </button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
import { useAdminLogin } from '@/composables/auth/useAdminLogin'
const { credential, login, loading, isFormDisabled } = useAdminLogin()
</script>