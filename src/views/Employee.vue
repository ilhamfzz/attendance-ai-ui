<template>
  <main class="flex-1 overflow-y-auto bg-white dark:bg-gray-950 p-4 md:p-8 space-y-6 min-h-screen">
    <!-- Page Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Employee Directory</h2>
        <p class="text-base text-gray-500 dark:text-gray-400 mt-1">Manage team members, roles, and view activity status.</p>
      </div>
      <RouterLink to="/employee/add" class="inline-flex items-center justify-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-200 w-full sm:w-auto">
        <span class="material-symbols-outlined text-[20px]">add</span>
        Add New Employee
      </RouterLink>
    </div>

    <!-- Toolbar & Search -->
    <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-3 flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Search Field (Not too big) -->
      <div class="relative w-full max-w-xs">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
        <input class="w-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 text-sm pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-shadow placeholder-gray-400 dark:placeholder-gray-500" placeholder="Search by name..." type="text"/>
      </div>
      <div class="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <button class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
          <span class="material-symbols-outlined text-[18px]">filter_list</span>
          Filters
        </button>
        <button class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors whitespace-nowrap">
          All Roles
        </button>
        <button class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors whitespace-nowrap">
          All Departments
        </button>
        <button class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors whitespace-nowrap">
          All Status
        </button>
        <!-- <button class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
          All Status
        </button> -->
      </div>
    </div>

    <!-- Data Table Card -->
    <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
              <th class="py-3 px-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold w-12 text-center">
                <input class="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 w-4 h-4" type="checkbox"/>
              </th>
              <th class="py-3 px-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Employee</th>
              <th class="py-3 px-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Role</th>
              <th class="py-3 px-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Department</th>
              <th class="py-3 px-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Total Hours</th>
              <th class="py-3 px-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold text-left">Status</th>
              <th class="py-3 pr-8 pl-4 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold text-center w-24">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
            <!-- Row -->
            <tr v-for="emp in employees" :key="emp.id" class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
              <td class="py-3 px-4 text-center">
                <input class="rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 w-4 h-4" type="checkbox"/>
              </td>
              <td class="py-3 px-4">
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <div v-if="emp.avatarUrl" class="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <img :alt="emp.name" :class="['w-full h-full object-cover', emp.grayscale ? 'grayscale opacity-80' : '']" :src="emp.avatarUrl"/>
                    </div>
                    <div v-else :class="['w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center font-semibold text-sm', emp.initialsBg]">
                      {{ emp.initials }}
                    </div>
                    <div :class="['absolute bottom-0 right-0 w-3 h-3 border-2 border-white dark:border-gray-900 rounded-full', getStatusDotColor(emp.statusColor)]"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ emp.name }}</div>
                    <div class="text-[13px] text-gray-500 dark:text-gray-400">{{ emp.email }}</div>
                  </div>
                </div>
              </td>
              <td class="py-3 px-4 text-sm text-gray-900 dark:text-gray-100">{{ emp.role }}</td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[11px] text-gray-700 dark:text-gray-300 font-semibold tracking-wide">{{ emp.department }}</span>
              </td>
              <td class="py-3 px-4 text-sm text-gray-900 dark:text-gray-100 font-medium">{{ emp.totalHours }}</td>
              <td class="py-3 px-4 text-left">
                <span :class="['inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold', getStatusBadgeColor(emp.statusColor)]">
                  <span v-if="emp.icon" class="material-symbols-outlined text-[14px]">{{ emp.icon }}</span>
                  <span v-else :class="['w-1.5 h-1.5 rounded-full', getStatusDotColor(emp.statusColor)]"></span>
                  {{ emp.status }}
                </span>
              </td>
              <td class="py-3 pr-8 pl-4 text-center">
                <div class="flex items-center justify-center transition-opacity">
                  <button class="p-1.5 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800 transition-colors" title="View Profile">
                    <span class="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Footer -->
      <div class="bg-gray-50/50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800 p-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-[13px] text-gray-500 dark:text-gray-400">
          Showing <span class="font-semibold text-gray-900 dark:text-gray-100">1</span> to <span class="font-semibold text-gray-900 dark:text-gray-100">4</span> of <span class="font-semibold text-gray-900 dark:text-gray-100">128</span> employees
        </div>
        <div class="flex items-center gap-1">
          <button class="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition-colors" disabled>
            <span class="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button class="w-8 h-8 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold flex items-center justify-center">1</button>
          <button class="w-8 h-8 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold flex items-center justify-center transition-colors">2</button>
          <button class="w-8 h-8 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold flex items-center justify-center transition-colors">3</button>
          <span class="px-1 text-gray-500 dark:text-gray-400">...</span>
          <button class="w-8 h-8 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold flex items-center justify-center transition-colors">12</button>
          <button class="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <span class="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const employees = ref([
  {
    id: 1,
    name: 'Eleanor Richards',
    email: 'e.richards@opticwork.com',
    role: 'Senior Designer',
    department: 'DESIGN',
    totalHours: '142.5h',
    status: 'Active',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfDN9_HjO-iIC7pAb4euQ1khnSx7sp9P-Xs4UX9JZ-I_C7TvGfN-JObb_f1gyESnXWdgzSPUSNkwfKR33bYSaie7Hn_eLeZGqtJpYFWD6UGmccjqc_4TOtEXNkHYV1azEmsdDff4CZaOg-R-Z3SRe6f7QajUIcGGGE0S7T9XgVVC-d87cu8PMnNOBQ0IlkR_wzlHumKl-D4QGOT_3drZQB1IZVGejmmKEVY-SleJj6DIHs-oorOwQdylUGmm0LRwOGUWTOolnaEyDM',
    initials: null,
    initialsBg: null,
    statusColor: 'green'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    email: 'm.chen@opticwork.com',
    role: 'Lead Developer',
    department: 'ENGINEERING',
    totalHours: '158.0h',
    status: 'Leave',
    avatarUrl: null,
    initials: 'MC',
    initialsBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400',
    statusColor: 'amber',
    icon: 'flight',
  },
  {
    id: 3,
    name: 'David Okafor',
    email: 'd.okafor@opticwork.com',
    role: 'Data Analyst',
    department: 'OPERATIONS',
    totalHours: '0.0h',
    status: 'Inactive',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu-VobYLUPYHdJhSum8Rwm_W5odB3w4DcIDfF87-GnUqviWkyJX--g-R_WXi5cTS2A_ObXN5afeTApH4z6h2WPxDxcJ_ELA-gJAwE_5fWmK1ptHqjM4FoE2GzqaLsrXJZ5e9peDrFIEYqXVjA_JbdlEoebvodxQksRjOn0RuwYcfqBtL2Bb6PKoMmBtqA48PGYr8arhfj90kH9Q1jhHl8fqZkjjab5roISiXprCqaHhz7nNw4BW1T5aZEcCzZxKaipalr-zfxaesuX',
    initials: null,
    initialsBg: null,
    statusColor: 'gray',
    // icon: 'flight',
    grayscale: true
  },
  {
    id: 4,
    name: 'Sarah Jenkins',
    email: 's.jenkins@opticwork.com',
    role: 'HR Director',
    department: 'PEOPLE',
    totalHours: '164.2h',
    status: 'Active',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKhxxRYWMVP38AXOItzMkN1pe7PZJ0Dzrl6u0G_XB3xqQ_HEJySqbsXTu7tAu0d0pc3MUKbDB1VUYbn_1aCLn5wP9ramFfpvONhvjH-CFetbWJwgdS5vlTfvj3LxwmA8lWwgmg23oYJ3voMfUgr-V6GgXo_gZAPYTgT_n_6fusK13_TLdOkEHyzk99LgpR7zZ93UFSZpStWgZ6li5ZILJZwnvidOQsRSfVYkh8sIyR-SES8MFEH9b4xrWfiBc9_o8WER2K7ob2u3zE',
    initials: null,
    initialsBg: null,
    statusColor: 'green'
  }
])

function getStatusDotColor(color) {
  if (color === 'green') return 'bg-green-500'
  if (color === 'amber') return 'bg-amber-500'
  if (color === 'gray') return 'bg-gray-400'
  return 'bg-gray-500'
}

function getStatusBadgeColor(color) {
  if (color === 'green') return 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
  if (color === 'amber') return 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
  if (color === 'gray') return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
  return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
}
</script>
