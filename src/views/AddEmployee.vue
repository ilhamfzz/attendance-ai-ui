<template>
  <main class="flex-1 overflow-y-auto p-4 lg:p-8 bg-white dark:bg-gray-950 min-h-screen">
    <!-- Page Header -->
    <div class="mb-8">
      <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-semibold mb-2">
        <RouterLink to="/employee" class="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Employee</RouterLink>
        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
        <span class="text-indigo-600 dark:text-indigo-400">Registration</span>
      </div>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">New Biometric Profile</h1>
      <p class="text-base text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">Complete the facial registration flow to set up secure access for the new employee. Ensure good lighting for best results.</p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
      <!-- Left Column: Camera Integration (7 Cols) -->
      <div class="xl:col-span-7 flex flex-col gap-6">
        <!-- Scanner Card -->
        <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 lg:p-6 flex flex-col">
          
          <!-- Progress Stepper (5 Steps) -->
          <div class="flex items-center justify-between mb-6 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg overflow-x-auto hide-scrollbar">
            
            <div class="flex items-center gap-2 flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <span class="text-sm font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">Front Face</span>
            </div>
            
            <div class="h-px bg-gray-200 dark:bg-gray-700 w-4 lg:flex-1 mx-2"></div>
            
            <div class="flex items-center gap-2 opacity-50 flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-bold shrink-0 border border-gray-200 dark:border-gray-700">2</div>
              <span class="text-sm font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap hidden sm:inline">Left Profile</span>
            </div>
            
            <div class="h-px bg-gray-200 dark:bg-gray-700 w-4 lg:flex-1 mx-2 hidden sm:block"></div>
            
            <div class="flex items-center gap-2 opacity-50 flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-bold shrink-0 border border-gray-200 dark:border-gray-700">3</div>
              <span class="text-sm font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap hidden sm:inline">Right Profile</span>
            </div>

            <div class="h-px bg-gray-200 dark:bg-gray-700 w-4 lg:flex-1 mx-2 hidden md:block"></div>

            <div class="flex items-center gap-2 opacity-50 flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-bold shrink-0 border border-gray-200 dark:border-gray-700">4</div>
              <span class="text-sm font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap hidden lg:inline">Upper Profile</span>
            </div>

            <div class="h-px bg-gray-200 dark:bg-gray-700 w-4 lg:flex-1 mx-2 hidden lg:block"></div>

            <div class="flex items-center gap-2 opacity-50 flex-shrink-0">
              <div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-bold shrink-0 border border-gray-200 dark:border-gray-700">5</div>
              <span class="text-sm font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap hidden lg:inline">Lower Profile</span>
            </div>

          </div>

          <!-- Camera Viewport Area -->
          <div class="relative w-full aspect-[4/3] bg-gray-900 dark:bg-black rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
            <!-- Placeholder Camera Feed -->
            <img alt="Live camera feed" class="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1uHAL8_0_5FQR_E09A9Fr7kIExN-ANeqyncg_Oy5W5yNnM7dKhz69oMOcRV5GkI6QikVDxBRUjOJjNZUh7r03nqtBCML2wWB-I9aGE26DJqCRXrB4_YxgvYD1SIH6FikvZ8JIbUz8Q_Ty8aIfObCk22tbhq3GxxAw1Dscyq4H-Jil_rRTxE3_WAz5rRJN2-XYKnzoqwDxSMVWvTpBvtf21hCsMqGdVI8BwlqPP3ChAOz_8nepghgbMWM39VMEPPEmy-BM8XNxx-ai"/>
            
            <!-- Scanning Overlay UI -->
            <div class="absolute inset-0 pointer-events-none">
              <!-- Guide Box -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 aspect-[3/4] border-2 border-indigo-500/30 rounded-[32px] flex items-center justify-center">
                <!-- Corner brackets -->
                <div class="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-indigo-500 rounded-tl-[32px]"></div>
                <div class="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-indigo-500 rounded-tr-[32px]"></div>
                <div class="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-indigo-500 rounded-bl-[32px]"></div>
                <div class="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-indigo-500 rounded-br-[32px]"></div>
                <!-- Simulated Scanning Line -->
                <div class="absolute top-[40%] w-[110%] h-[2px] bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"></div>
              </div>
            </div>

            <!-- Live Indicator -->
            <div class="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-red-500"></div>
              <span class="text-xs font-bold text-white uppercase tracking-wider">Live</span>
            </div>
          </div>

          <!-- Instructions -->
          <div class="mt-6 text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Position face in frame</h3>
            <p class="text-base text-gray-500 dark:text-gray-400">Look directly at the camera and maintain a neutral expression.</p>
          </div>

          <!-- Camera Actions -->
          <div class="mt-6 flex justify-center gap-4">
            <button class="w-14 h-14 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors shadow-sm">
              <span class="material-symbols-outlined">cameraswitch</span>
            </button>
            <button class="w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white flex items-center justify-center transition-all shadow-md hover:scale-[1.02]">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">photo_camera</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column: Form Data (5 Cols) -->
      <div class="xl:col-span-5">
        <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 lg:p-6">
          
          <div class="flex items-center gap-3 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
            <span class="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-[28px]">badge</span>
            <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Employee Data</h2>
          </div>

          <form class="flex flex-col gap-4">
            <!-- Form Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">First Name</label>
                <input class="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all outline-none" placeholder="e.g. Sarah" type="text"/>
              </div>
              <div class="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Last Name</label>
                <input class="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all outline-none" placeholder="e.g. Jenkins" type="text"/>
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">User ID</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">tag</span>
                <input class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all outline-none" placeholder="USR-0000" type="text"/>
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Department</label>
              <div class="relative">
                <select class="w-full appearance-none bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-base text-gray-900 dark:text-gray-100 transition-all outline-none">
                  <option disabled selected value="">Select department...</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="operations">Operations</option>
                </select>
                <!-- <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span> -->
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-semibold text-gray-500 dark:text-gray-400 ml-1">Role / Title</label>
              <input class="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg px-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 transition-all outline-none" placeholder="e.g. Senior Product Designer" type="text"/>
            </div>

            <!-- Form Actions -->
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 flex gap-4">
              <RouterLink to="/employee" class="flex-1 py-3 px-6 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-center inline-flex items-center justify-center" type="button">
                Cancel
              </RouterLink>
              <button class="flex-1 py-3 px-6 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2" type="button">
                <span class="material-symbols-outlined text-[20px]">how_to_reg</span>
                Register Profile
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
</script>
