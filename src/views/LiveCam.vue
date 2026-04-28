<template>
  <main class="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 bg-background dark:bg-gray-950">
    <!-- Camera Grid (Left Area) -->
    <div class="flex-[3] flex flex-col gap-6 min-w-0">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
          Live Feeds
        </h1>
        <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-900/50 rounded-lg p-1">
          <button class="px-3 py-1.5 rounded-md bg-white dark:bg-gray-800 shadow-sm text-sm font-semibold text-gray-900 dark:text-gray-100">All Zones</button>
          <button class="px-3 py-1.5 rounded-md text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">Floor 1</button>
          <button class="px-3 py-1.5 rounded-md text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors">Lab Area</button>
        </div>
        <button @click="toggleLayout" class="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors flex items-center justify-center" title="Toggle Layout">
          <span class="material-symbols-outlined">{{ layoutType === 'grid' ? 'view_agenda' : 'grid_view' }}</span>
        </button>
      </div>
      
      <div :class="['grid gap-6 transition-all duration-300', layoutType === 'grid' ? 'grid-cols-1 xl:grid-cols-2 auto-rows-[minmax(280px,_1fr)]' : 'grid-cols-1 auto-rows-[minmax(400px,_1fr)]']">
        <!-- Cam 1 -->
        <div class="relative bg-gray-900 dark:bg-black rounded-xl overflow-hidden shadow-sm group">
          <img alt="Camera Feed 1" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA76tzG8hGmwKFcrDeVa92wDO7xz02_V9b9fxDpLDQ1B36KmJFAQYwfi0GJG07gfqifWpKBk114oZFdPFeMzt78c1x_W4Rw_Lqd1I3yGVIkUmm9B1eDfUmtpNmL_lHZCVqi-jo2mDqHtSi-LbW5S1uUCYDq0C-mXcrpuEgOUxnLddYy6-tvrZDfhOelU7HXOzxXrG56bNwlCulzTqT_pKOEETa24Jx9Ez7ITeBkYM-1fnaMXu-73ce0KwF-l7SXDU4ifGvALuWeDlTr"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span class="text-white text-xs font-semibold uppercase tracking-wider bg-black/40 px-2 py-1 rounded backdrop-blur-sm">CAM 01 • Main Lobby</span>
          </div>
          <div class="absolute top-4 right-4">
            <span class="text-white/80 font-mono text-xs bg-black/40 px-2 py-1 rounded backdrop-blur-sm">14:22:05</span>
          </div>
          <div class="absolute top-1/3 left-1/4 w-24 h-32 border-2 border-indigo-500 rounded-sm bg-indigo-500/10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            <div class="absolute -top-6 left-[-2px] bg-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded-t-sm whitespace-nowrap">ID: Sarah J. (98%)</div>
          </div>
        </div>
        <!-- Cam 2 -->
        <div class="relative bg-gray-900 dark:bg-black rounded-xl overflow-hidden shadow-sm group">
          <img alt="Camera Feed 2" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRwmFZUMAuo4LJ-Tj_Ub4387UHwkcGF19HJqUOnHOMiSFQbLlW4m8vHMJcUFgUFGM6NcLV4No8Z5OtcNOvzVo04L0JlbYiFY2zCOndAO4EF1mfYpdhbRLBhh4iExjNnFRizhSnlM1SGsWKojSwXOk62Q-T1VCduMPbxoA5yDKi50P_hY4YqgpVg1u-wk-ubFi4D4AKYVuVtphriBBxullB5KZAl2VphPqSmaVB_Z0y8m83ljn0ilHmqqCxSWPo8HwJ2NWZzuNxsxVS"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span class="text-white text-xs font-semibold uppercase tracking-wider bg-black/40 px-2 py-1 rounded backdrop-blur-sm">CAM 02 • West Hall</span>
          </div>
          <div class="absolute top-4 right-4">
            <span class="text-white/80 font-mono text-xs bg-black/40 px-2 py-1 rounded backdrop-blur-sm">14:22:05</span>
          </div>
          <div class="absolute top-1/2 left-1/2 w-20 h-28 border-2 border-red-500 rounded-sm bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.5)] transform -translate-x-1/2 -translate-y-1/2">
            <div class="absolute -top-6 left-[-2px] bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-t-sm whitespace-nowrap">UNKNOWN FACE</div>
          </div>
        </div>
        <!-- Cam 3 -->
        <div class="relative bg-gray-900 dark:bg-black rounded-xl overflow-hidden shadow-sm group">
          <img alt="Camera Feed 3" class="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo6d2d1WzQdq71k7AYm1TKVhULkEgmHz6BlH45BhzPQo_ibLrjrHbQmgmMYuTDixNXGyp8cSoir8UMMcgxgOMGtavx_zwaMyH1mbcV3E3xe_fbtmetSwzLK-JV96L_KfYrxpZY8wNv-U4Cpp8oM5SrfN-UKllLs-6fHunuuEaaqAWtB19BlrjFSqAnW1yZxfQKN5fHqRHsLXy25lTQdCEXP4I6t7CWheVcMzu-9RYquTovKRxoiFR7FQjGjiTvhXhYyYpXAhf7YCZZ"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            <span class="text-white/70 text-xs font-semibold uppercase tracking-wider bg-black/40 px-2 py-1 rounded backdrop-blur-sm">CAM 03 • Break Room</span>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-white/50 text-sm font-semibold tracking-widest uppercase">No Activity</span>
          </div>
        </div>
        <!-- Cam 4 -->
        <div class="relative bg-gray-900 dark:bg-black rounded-xl overflow-hidden shadow-sm group">
          <img alt="Camera Feed 4" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaeedX2oa5WbYlGMsYONEX9DCaSlH4-xCSMNzYPUHjTp1u7gaB2CqUj7II_3LJBPdPsPvpgl8NQ1fitWQZFFW-OuigxqlQRrbPwiriRpnruv1oONRNchNPM4jG8y55cW7EGhglGo6RntWxdZz5KqRe04KaEC3sheMcDeJWyoEHrvHTnVWRH-_Wo2pp3zOqwO6N5odktq1lBfpHoJSnxzg5aMynH4bWMNPM4QZGQZFR0fcdCRL_I6Hi9TxgM-3N1PlOg2jU3so9vKnk"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span class="text-white text-xs font-semibold uppercase tracking-wider bg-black/40 px-2 py-1 rounded backdrop-blur-sm">CAM 04 • Dev Lab</span>
          </div>
          <div class="absolute top-4 right-4">
            <span class="text-white/80 font-mono text-xs bg-black/40 px-2 py-1 rounded backdrop-blur-sm">14:22:05</span>
          </div>
          <div class="absolute top-1/4 right-1/3 w-16 h-20 border-2 border-indigo-500 rounded-sm bg-indigo-500/10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            <div class="absolute -top-6 left-[-2px] bg-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded-t-sm whitespace-nowrap">ID: Mike T.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Side Panel (Right Area) -->
    <div class="w-full lg:w-80 flex flex-col gap-6 shrink-0">
      <!-- Security Alerts -->
      <div class="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
        <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <h2 class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span class="material-symbols-outlined text-red-500 text-lg">warning</span>
            Active Alerts
          </h2>
          <span class="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">1 New</span>
        </div>
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 p-3 rounded-xl flex items-start gap-3">
          <div class="mt-0.5 bg-red-100 dark:bg-red-900/50 p-1.5 rounded-full">
            <span class="material-symbols-outlined text-red-600 dark:text-red-400 text-sm">person_off</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-sm font-semibold text-red-900 dark:text-red-300">Unrecognized Face Detected</span>
            <span class="text-xs text-red-700 dark:text-red-400">West Hall • CAM 02</span>
            <span class="text-[10px] text-red-600/70 dark:text-red-400/70 font-mono mt-1">Just now</span>
          </div>
        </div>
      </div>

      <!-- Detected Employees -->
      <div class="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-4 min-h-[400px]">
        <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <h2 class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-600 dark:text-indigo-400 text-lg">group</span>
            Detected Workspace
          </h2>
          <span class="text-xs text-gray-500 dark:text-gray-400">Live</span>
        </div>
        <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-1.5 rounded-lg border border-gray-200 dark:border-gray-700">
          <span class="material-symbols-outlined text-gray-400 text-sm ml-1">search</span>
          <input class="bg-transparent border-none focus:ring-0 text-xs w-full text-gray-900 dark:text-gray-100 p-0 placeholder-gray-400 outline-none" placeholder="Filter names..." type="text"/>
        </div>
        <div class="flex-1 overflow-y-auto pr-2 flex flex-col gap-1 -mr-2">
          <!-- Person 1 -->
          <div class="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img alt="Sarah J" class="w-9 h-9 rounded-full object-cover ring-2 ring-white dark:ring-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD65KlYyFvnAXs-5GIq212JOO2W0Stno6G37tVjQJc5x7sg8TVYI7HdMgIkyc0DoWiRdQy3VrR0MfYslWu6twjvKuRVg5_PDcNdVBtvPRTq52DZtYd1K1Dv4ztxWGC80akLSIid3aHeq1rnr0IpO94gb3-0f4RITsP_Ra_yYlrEgJQLyD9ojjG1CVrppHAZHFJYTQcUwLrg1XS_fkoQ2b2CjvfxKjJqcOdAYssPOXMzENh6n_PN3Fao61AGT6N454guATIgRY64Rvm0"/>
                <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">Sarah J.</span>
                <span class="text-[10px] text-gray-500 dark:text-gray-400">Design Lead</span>
              </div>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap">
              Main Lobby
            </div>
          </div>
          <!-- Person 2 -->
          <div class="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img alt="Mike T" class="w-9 h-9 rounded-full object-cover ring-2 ring-white dark:ring-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Je1yQludICq_ERDd1ZbiMH5_zKWjPFz2_ym83HZp1mQXN3qNgFSwU_Gce-Rsbtgj_5oJH0PqSNFk--kwTzGRCAtfc1GkAavl9hTdsm5MuL4TiXOaiN3ML8W882IRG0STpZvMbZt4EuzmAXX6KyxU31YcsOA-1DSaMu2bY1FzhKQFy4NkadWnrVQfXAy5IBxXQoq9htrtoOhynqV2m_1aC0iCElnIBFIH4AuuWhZCuVsgRzJP_rweWjlLN_R43znwgapns9ogL3WM"/>
                <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">Mike T.</span>
                <span class="text-[10px] text-gray-500 dark:text-gray-400">Senior Engineer</span>
              </div>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap">
              Dev Lab
            </div>
          </div>
          <!-- Person 3 (Away) -->
          <div class="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer opacity-70">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img alt="Emma W" class="w-9 h-9 rounded-full object-cover ring-2 ring-white dark:ring-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5I9OlSRcMCdM49Awx_no188f-RjHL4Glav9sf4ODdpTlQRaOquJLBtp3zWgokap88fbMl-OU5UcuiwWQ5xD8DTuXqz4eRFpbXejLSpcRz3YfEQJqj4I2Ij8DUYtw8lU_S9ykY3T_fNop_y8HxnKsonhWC_ez9GW8ZLMo63Bz6BoJFItG9o9cCkBcZN3zqjVql0bcwEgSHXSuXGHRagp3c94Z08kkVn-MSoKo3MtAzq96HprXSVWdaxQbzSj5bRr7oeExcaxjIq9z6"/>
                <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-gray-400 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">Emma W.</span>
                <span class="text-[10px] text-gray-500 dark:text-gray-400">HR Manager</span>
              </div>
            </div>
            <div class="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap flex items-center gap-1">
              <span class="material-symbols-outlined text-[10px]">schedule</span>
              Away (15m)
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const layoutType = ref('grid')

function toggleLayout() {
  layoutType.value = layoutType.value === 'grid' ? 'list' : 'grid'
}
</script>
