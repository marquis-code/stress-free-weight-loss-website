<template>
    <div class="flex min-h-screen h-full">
      <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img 
              class="h-20 w-auto" 
              src="@/assets/logo.png" 
              alt="Your Company"
            >
            <h2 class="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              Create an account
            </h2>
            <p class="mt-2 text-sm/6 text-gray-500">
              Already a member?
              <NuyxtLink to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">
               Login
              </NuyxtLink>
            </p>
          </div>
  
          <div class="mt-10">
            <form @submit.prevent="signup" class="space-y-6">
                <div>
                <label for="fullName" class="block text-sm/6 font-medium text-gray-900">
                  Full Name
                </label>
                <div class="mt-2">
                  <input 
                    type="text" 
                    v-model="credentials.name.value"
                    name="fullName" 
                    id="email" 
                    required 
                    class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div class="mt-2">
                  <input 
                    type="email" 
                    v-model="credentials.email.value"
                    name="email" 
                    id="email" 
                    autocomplete="email" 
                    required 
                    class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                </div>
              </div>

              <div>
                <label for="phone" class="block text-sm/6 font-medium text-gray-900">
                  Phone
                </label>
                <div class="mt-2">
                  <input 
                    type="phone" 
                    v-model="credentials.phone.value"
                    name="phone" 
                    id="phone" 
                    required 
                    class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                </div>
              </div>
  
              <div>
                <label for="password" class="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div class="mt-2">
                  <input 
                    type="password" 
                    v-model="credentials.password.value"
                    name="password" 
                    id="password" 
                    autocomplete="current-password" 
                    required 
                    class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                </div>
              </div>
  
              <div class="flex items-center justify-between">
                <div class="flex gap-3">
                  <div class="flex h-6 shrink-0 items-center">
                    <div class="group grid size-4 grid-cols-1">
                      <input 
                        id="remember-me" 
                        name="remember-me" 
                        type="checkbox" 
                        class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      >
                      <svg 
                        class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" 
                        viewBox="0 0 14 14" 
                        fill="none"
                      >
                        <path 
                          class="opacity-0 group-has-[:checked]:opacity-100" 
                          d="M3 8L6 11L11 3.5" 
                          stroke-width="2" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                        />
                        <path 
                          class="opacity-0 group-has-[:indeterminate]:opacity-100" 
                          d="M3 7H11" 
                          stroke-width="2" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                        />
                      </svg>
                    </div>
                  </div>
                  <label for="remember-me" class="block text-sm/6 text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div class="text-sm/6">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
  
              <div>
                <button 
                  type="submit" 
                  :disabled="isFormDisabled || loading"
                  class="flex w-full justify-center disabled:cursor-not-allowed disabled:opacity-25 rounded-md bg-indigo-600 px-3 py-3 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {{  loading ? 'prcoessing..' : 'Sign up' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="relative hidden w-0 flex-1 lg:block">
        <img 
          class="absolute inset-0 h-full w-full object-cover" 
          src="@/assets/img/auth.jpg" 
          alt=""
        >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useSignup  } from '@/composables/auth/useSignup'
  const { credentials, signup, loading, isFormDisabled } = useSignup ()
  </script>