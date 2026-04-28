<template>
  <div class="bg-background text-on-background font-body-md text-body-md antialiased flex min-h-screen">
    
    <!-- Sidebar / Drawer -->
    <nav :class="['bg-white dark:bg-gray-900 font-[\'Plus_Jakarta_Sans\'] text-sm font-medium h-screen border-r border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out fixed left-0 top-0 flex flex-col z-40', isSidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full md:translate-x-0']">
      
      <!-- Drawer Header -->
      <div class="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 transition-all duration-300" :class="{ 'justify-center px-0': !isSidebarOpen }">
        <div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold shrink-0">O</div>
        <div v-show="isSidebarOpen" class="whitespace-nowrap transition-opacity duration-300 delay-100">
          <h1 class="text-lg font-black text-indigo-600 dark:text-indigo-400">Admin Panel</h1>
          <p class="text-xs text-gray-500">Workforce Monitoring</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex-1 py-4 flex flex-col gap-1 px-3">
        <RouterLink to="/dashboard" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-in-out" active-class="!bg-indigo-50 dark:!bg-indigo-900/20 !text-indigo-600 dark:!text-indigo-400 border-r-4 !border-indigo-600 !rounded-l-md !rounded-r-none" :class="{ 'justify-center px-0 border-none !rounded-md': !isSidebarOpen }" title="Dashboard">
          <span class="material-symbols-outlined">dashboard</span>
          <span v-show="isSidebarOpen">Dashboard</span>
        </RouterLink>
        <RouterLink to="/live-cam" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-in-out" active-class="!bg-indigo-50 dark:!bg-indigo-900/20 !text-indigo-600 dark:!text-indigo-400 border-r-4 !border-indigo-600 !rounded-l-md !rounded-r-none" :class="{ 'justify-center px-0 border-none !rounded-md': !isSidebarOpen }" title="Live Cam">
          <span class="material-symbols-outlined">videocam</span>
          <span v-show="isSidebarOpen">Live Cam</span>
        </RouterLink>
        <RouterLink to="/employee" 
          class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-in-out" 
          :class="[
            { 'justify-center px-0 border-none !rounded-md': !isSidebarOpen },
            route.path.startsWith('/employee') ? '!bg-indigo-50 dark:!bg-indigo-900/20 !text-indigo-600 dark:!text-indigo-400 border-r-4 !border-indigo-600 !rounded-l-md !rounded-r-none is-active' : ''
          ]"
          title="Employee">
          <span class="material-symbols-outlined">group</span>
          <span v-show="isSidebarOpen">Employee</span>
        </RouterLink>
        <RouterLink to="/history" 
          class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-in-out" 
          :class="[
            { 'justify-center px-0 border-none !rounded-md': !isSidebarOpen },
            (route.path.startsWith('/history') || route.path.startsWith('/my-history')) ? '!bg-indigo-50 dark:!bg-indigo-900/20 !text-indigo-600 dark:!text-indigo-400 border-r-4 !border-indigo-600 !rounded-l-md !rounded-r-none is-active' : ''
          ]"
          title="History">
          <span class="material-symbols-outlined">history</span>
          <span v-show="isSidebarOpen">History</span>
        </RouterLink>
      </div>

      <!-- Bottom Links -->
      <div class="p-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-1 px-3">
        <a class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-in-out" href="#" :class="{ 'justify-center px-0': !isSidebarOpen }" title="Settings">
          <span class="material-symbols-outlined">settings</span>
          <span v-show="isSidebarOpen">Settings</span>
        </a>
        <a @click.prevent="handleLogout" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-in-out cursor-pointer" :class="{ 'justify-center px-0': !isSidebarOpen }" title="Logout">
          <span class="material-symbols-outlined">logout</span>
          <span v-show="isSidebarOpen">Logout</span>
        </a>
      </div>
    </nav>

    <!-- Main Content Area -->
    <div :class="['flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out', isSidebarOpen ? 'md:ml-64 ml-0' : 'md:ml-20 ml-0']">
      
      <!-- Header -->
      <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md font-['Plus_Jakarta_Sans'] antialiased border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 w-full flex items-center justify-between px-6 py-3 z-30">
        <div class="flex items-center gap-4">
          <button @click="toggleSidebar" class="text-indigo-600 dark:text-indigo-400 flex items-center justify-center p-1 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <span class="material-symbols-outlined">menu</span>
          </button>
          <span class="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 hidden sm:block">OpticWork</span>
        </div>

        <div class="flex items-center gap-4">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center" :title="isDark ? 'Light Mode' : 'Dark Mode'">
            <span class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'lens' }}</span>
          </button>
          
          <button class="text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center relative">
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div class="w-8 h-8 rounded-full overflow-hidden ml-2 border-2 border-indigo-100 shrink-0">
            <img v-if="authStore.avatar" :src="authStore.avatar" alt="User Avatar" class="w-full h-full object-cover"/>
            <div v-else class="w-full h-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
              {{ authStore.name?.charAt(0) || 'U' }}
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden">
        <RouterView />
      </main>

    </div>
    
    <!-- Mobile Sidebar Overlay -->
    <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="md:hidden fixed inset-0 bg-black/20 dark:bg-black/40 z-30 backdrop-blur-sm transition-opacity"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const isSidebarOpen = ref(true)
const isDark = ref(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Sync the isDark ref with the document class that was set in App.vue
  isDark.value = document.documentElement.classList.contains('dark')

  // Auto collapse on small screens
  if (window.innerWidth < 768) {
    isSidebarOpen.value = false
  }
})

function handleLogout() {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
.router-link-active .material-symbols-outlined,
.is-active .material-symbols-outlined {
  font-variation-settings: 'FILL' 1;
}
</style>
