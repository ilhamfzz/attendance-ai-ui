<template>
  <div class="min-h-screen flex items-center justify-center p-md sm:p-lg antialiased">
    <!-- Main Container -->
    <main class="w-full max-w-[440px] bg-surface-container-lowest rounded-[24px] ambient-shadow p-lg sm:p-xl relative overflow-hidden border border-surface-container-highest">
      <!-- Decorative top highlight -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>
      <!-- Header -->
      <div class="text-center mb-xl">
        <div class="flex items-center justify-center gap-2 mb-sm">
          <span class="material-symbols-outlined text-primary text-[32px]" data-icon="lens">lens</span>
          <span class="font-headline-md text-headline-md text-primary tracking-tight">OpticWork</span>
        </div>
        <h1 class="font-headline-lg text-headline-lg text-on-surface mb-xs">Welcome back</h1>
        <p class="font-body-md text-body-md text-on-surface-variant">Sign in to your intelligent workspace.</p>
      </div>
      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-lg">
        <div class="space-y-sm">
          <div>
            <label class="block font-label-md text-label-md text-on-surface mb-base ml-1" for="email">Email address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="mail">mail</span>
              </div>
              <input class="w-full pl-2xl pr-sm py-[14px] bg-surface-container border border-transparent rounded-xl font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" id="email" name="email" placeholder=".name@company.com" required="" type="email"/>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-base ml-1 mr-1">
              <label class="block font-label-md text-label-md text-on-surface" for="password">Password</label>
              <a class="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors" href="#">Forgot password?</a>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
                <span class="material-symbols-outlined text-on-surface-variant" data-icon="lock">lock</span>
              </div>
              <input class="w-full pl-2xl pr-sm py-[14px] bg-surface-container border border-transparent rounded-xl font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" id="password" name="password" placeholder="••••••••" required="" type="password"/>
            </div>
          </div>
        </div>
        <button type="submit" class="w-full py-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200 ease-out flex justify-center items-center gap-2">
          Sign In
          <span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
        </button>
      </form>
      <!-- Divider -->
      <div class="relative my-xl">
        <div aria-hidden="true" class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-surface-container-highest"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-sm bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant">Or continue with</span>
        </div>
      </div>
      <!-- Social Login -->
      <div class="grid grid-cols-2 gap-sm">
        <button class="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low border border-surface-container-highest rounded-xl hover:bg-surface-container transition-colors font-label-md text-label-md text-on-surface" type="button">
          <svg class="w-5 h-5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
          </svg>
          Google
        </button>
        <button class="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low border border-surface-container-highest rounded-xl hover:bg-surface-container transition-colors font-label-md text-label-md text-on-surface" type="button">
          <svg class="w-5 h-5" viewbox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0H0v10h10V0z" fill="#f25022"></path>
            <path d="M21 0H11v10h10V0z" fill="#7fba00"></path>
            <path d="M10 11H0v10h10V-10z" fill="#00a4ef"></path>
            <path d="M21 11H11v10h10V-10z" fill="#ffb900"></path>
          </svg>
          Microsoft
        </button>
      </div>
      <!-- Footer -->
      <p class="mt-xl text-center font-body-md text-body-md text-on-surface-variant">
        Don't have an account? 
        <a class="font-label-md text-label-md text-primary hover:text-primary-container transition-colors" href="#">Request access</a>
      </p>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

function handleLogin() {
  authStore.login({
    token: 'mock-jwt-token-12345',
    name: 'John Doe',
    username: 'johndoe',
    role: 'Employee',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzePs1f_KdCHcj7rM6Rd1LPYMlvN1-AC6MkYN3ypufWlqyatZl6QHHTe19slAFnI-NI5fkssJA0yCB6gZgbbUN1d2HB8aiyN9JQrBOdVaOPPrFlrARnOfKmESboGwfxi-7UfXaU7hpRoTQ5Pf_7XTsAPieZU1Sqip5gquy3s2OiGgsEetyVwL1IYDwYQKFcsuW8A7ExVGSxVDwSw4htLLoPhHf3K7MDoUtr6V2J8H0mzfCF7GnjcYb0ZJgaDvHyxFeccGHlFzqO0ZF'
  })
  router.push('/dashboard')
}
</script>
