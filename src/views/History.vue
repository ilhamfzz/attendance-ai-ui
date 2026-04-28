<template>
  <main class="flex-1 p-4 md:p-8 flex flex-col gap-8 bg-white dark:bg-gray-950 min-h-screen">
    <!-- Header & Actions -->
    <div class="flex flex-col md:flex-row md:items-start justify-between gap-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Historical Events</h1>
        <p class="text-base text-gray-500 dark:text-gray-400 mt-1">Review workforce activity logs, status changes, and export data.</p>
      </div>
      <div class="flex flex-col items-end gap-3 self-end md:self-auto">
        <div class="flex flex-wrap items-center justify-end gap-3">
          <!-- Advanced Filters - Date Range Only -->
          <div class="flex items-center bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-1 shadow-sm">
            <div class="flex items-center gap-2 px-3 py-1.5 text-gray-500 dark:text-gray-400">
              <span class="material-symbols-outlined text-sm font-variation-settings-fill-0">calendar_month</span>
              <span class="text-sm font-semibold">Oct 1 - Oct 31</span>
              <span class="material-symbols-outlined text-sm cursor-pointer">arrow_drop_down</span>
            </div>
          </div>
          <!-- Export Button -->
          <button class="flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:scale-[1.02] transition-transform">
            <span class="material-symbols-outlined text-sm">download</span>
            Export to CSV
          </button>
        </div>
        <!-- My Work History Button -->
        <RouterLink to="/my-history" class="flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
          <span class="material-symbols-outlined text-sm">history_edu</span>
          My Work History
        </RouterLink>
      </div>
    </div>

    <!-- Aggregated Chart (Productivity Trends) -->
    <section class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Productivity Trends</h3>
        <div class="flex gap-4">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Active Hours</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30"></div>
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Idle/Break</span>
          </div>
        </div>
      </div>
      <!-- Simulated Bar Chart Layout -->
      <div class="h-48 flex items-end justify-between gap-2 pt-4 border-b border-gray-200 dark:border-gray-800 relative">
        <div v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" :key="day" class="w-full max-w-[40px] flex flex-col justify-end gap-1 group relative">
          <div class="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-sm" :style="{ height: day === 'Sat' || day === 'Sun' ? '15%' : '20%' }"></div>
          <div :class="['w-full rounded-t-sm', day === 'Sat' || day === 'Sun' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-indigo-600 dark:bg-indigo-500']" :style="{ height: day === 'Sat' || day === 'Sun' ? '20%' : '65%' }"></div>
          <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ day }}</span>
        </div>
      </div>
      <div class="h-4"></div> <!-- Spacer for x-axis labels -->
    </section>

    <!-- History Table -->
    <section class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
      <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
        <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">Workhour Logs</h3>
        <div class="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <span class="material-symbols-outlined text-sm">filter_list</span>
          <span class="text-xs font-bold uppercase tracking-wider">Filter</span>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-[11px] font-bold uppercase tracking-wider">
              <th class="px-6 py-3">Date</th>
              <th class="px-6 py-3">Employee</th>
              <th class="px-6 py-3">Check In</th>
              <th class="px-6 py-3">Check Out</th>
              <th class="px-6 py-3">Total Hrs</th>
              <th class="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="text-sm text-gray-900 dark:text-gray-100">
            <!-- Row 1 -->
            <tr v-for="log in logs" :key="log.id" class="border-b border-gray-200/50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">{{ log.date }}</td>
              <td class="px-6 py-4 flex items-center gap-3 whitespace-nowrap">
                <div v-if="!log.avatar" :class="['w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold', log.initialsBg]">
                  {{ log.initials }}
                </div>
                <img v-else :src="log.avatar" alt="Employee avatar" class="w-8 h-8 rounded-full object-cover border border-gray-200 dark:border-gray-700"/>
                <span class="font-semibold">{{ log.name }}</span>
              </td>
              <td class="px-6 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{{ log.checkIn }}</td>
              <td class="px-6 py-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{{ log.checkOut }}</td>
              <td class="px-6 py-4 font-bold whitespace-nowrap">{{ log.totalHrs }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="['inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide', log.statusClass]">
                  <span class="material-symbols-outlined text-[14px]">{{ log.statusIcon }}</span>
                  {{ log.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination / Footer -->
      <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-semibold bg-white dark:bg-gray-950">
        <span>Showing 1-5 of 124 records</span>
        <div class="flex items-center gap-4">
          <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors disabled:opacity-50" disabled>
            <span class="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <span class="font-bold text-gray-900 dark:text-gray-100">Page 1 of 25</span>
          <button class="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
            <span class="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const logs = ref([
  {
    id: 1,
    date: 'Oct 24, 2023',
    name: 'Jane Smith',
    initials: 'JS',
    initialsBg: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400',
    checkIn: '08:55 AM',
    checkOut: '05:05 PM',
    totalHrs: '8.1h',
    status: 'Completed',
    statusIcon: 'check_circle',
    statusClass: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
  },
  {
    id: 2,
    date: 'Oct 24, 2023',
    name: 'Michael Kim',
    initials: 'MK',
    initialsBg: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400',
    checkIn: '09:15 AM',
    checkOut: '06:00 PM',
    totalHrs: '8.7h',
    status: 'Late Arrival',
    statusIcon: 'schedule',
    statusClass: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
  },
  {
    id: 3,
    date: 'Oct 24, 2023',
    name: 'Sarah Connor',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOHN1N7HT8ZQkyhD2FI-tfpa0tifrWjE7KsKRiTA8L5xpNw0VjW5FweBabi8JXOp0QQXHesVR_E1w4mJFOriZPfn_AMuwut2gzFMVLofKYabOnLZ_iquwakY0c6zvThUtRduzVLSiZBPTpd7mqOWniDZHCmqU_ONrZCJFUrLOamo76yjKYDL3BMIMOlUK2Q_uqBL52OFbhtFiKCW6PzMfzAWjX3r-gIaHAFqDhtvEhJmXWe8U5TODZAfCgW_ZXEUZT2dzxn-RWVJU7',
    checkIn: '08:30 AM',
    checkOut: '04:30 PM',
    totalHrs: '8.0h',
    status: 'Completed',
    statusIcon: 'check_circle',
    statusClass: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
  },
  {
    id: 4,
    date: 'Oct 23, 2023',
    name: 'David Lee',
    initials: 'DL',
    initialsBg: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
    checkIn: '--',
    checkOut: '--',
    totalHrs: '0.0h',
    status: 'Absent/PTO',
    statusIcon: 'event_busy',
    statusClass: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
  },
  {
    id: 5,
    date: 'Oct 23, 2023',
    name: 'Jane Smith',
    initials: 'JS',
    initialsBg: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400',
    checkIn: '08:50 AM',
    checkOut: '05:15 PM',
    totalHrs: '8.4h',
    status: 'Completed',
    statusIcon: 'check_circle',
    statusClass: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
  }
])
</script>

<style scoped>
.font-variation-settings-fill-0 {
  font-variation-settings: 'FILL' 0;
}
</style>
