<template>
  <main class="flex-1 p-4 md:p-8 flex flex-col gap-8 bg-white dark:bg-gray-950 min-h-screen">
    <!-- Welcome & Encouragement -->
    <section class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Your Work History</h2>
        <p class="text-base text-gray-500 dark:text-gray-400 max-w-2xl">
          Great progress this month! You've been maintaining a solid rhythm. Here's a look back at your daily logs and achievements.
        </p>
      </div>
      <!-- Date Range Filter -->
      <div class="flex items-center gap-3 bg-white dark:bg-gray-900 p-2 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm self-start md:self-auto">
        <div class="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span class="material-symbols-outlined text-gray-500 dark:text-gray-400 text-[20px]">calendar_today</span>
          <input class="bg-transparent border-none text-gray-900 dark:text-gray-100 font-semibold text-sm p-0 focus:ring-0 w-24 outline-none" readonly type="text" value="Oct 01, 2023"/>
        </div>
        <span class="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">to</span>
        <div class="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span class="material-symbols-outlined text-gray-500 dark:text-gray-400 text-[20px]">calendar_today</span>
          <input class="bg-transparent border-none text-gray-900 dark:text-gray-100 font-semibold text-sm p-0 focus:ring-0 w-24 outline-none" readonly type="text" value="Oct 31, 2023"/>
        </div>
      </div>
    </section>

    <!-- Summary Bento Grid -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Stat Card 1 -->
      <div class="col-span-1 md:col-span-4 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div class="absolute -right-6 -top-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/40 transition-colors"></div>
        <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
          <span class="material-symbols-outlined">schedule</span>
          <span class="text-sm font-bold uppercase tracking-wider">Total Hours</span>
        </div>
        <div>
          <div class="text-5xl font-bold text-gray-900 dark:text-gray-100">42.5<span class="text-2xl font-semibold text-gray-500 dark:text-gray-400 ml-1">h</span></div>
          <p class="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">This Week</p>
        </div>
        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <span class="material-symbols-outlined text-[18px]">trending_up</span>
          <span class="text-xs font-bold uppercase tracking-wider">+2.5h from last week</span>
        </div>
      </div>
      <!-- Stat Card 2 -->
      <div class="col-span-1 md:col-span-4 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
        <div class="absolute -right-6 -top-6 w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full blur-2xl group-hover:bg-green-200 dark:group-hover:bg-green-900/40 transition-colors"></div>
        <div class="flex items-center gap-3 text-gray-500 dark:text-gray-400">
          <span class="material-symbols-outlined">timelapse</span>
          <span class="text-sm font-bold uppercase tracking-wider">Daily Average</span>
        </div>
        <div>
          <div class="text-5xl font-bold text-gray-900 dark:text-gray-100">8.2<span class="text-2xl font-semibold text-gray-500 dark:text-gray-400 ml-1">h</span></div>
          <p class="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">Over selected period</p>
        </div>
        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <span class="material-symbols-outlined text-[18px]">check_circle</span>
          <span class="text-xs font-bold uppercase tracking-wider">Consistent with target</span>
        </div>
      </div>
      <!-- Stat Card 3 (Encouraging Metric) -->
      <div class="col-span-1 md:col-span-4 bg-indigo-600 dark:bg-indigo-500 rounded-2xl p-6 shadow-sm border border-indigo-700 dark:border-indigo-400 flex flex-col gap-4 relative overflow-hidden text-white">
        <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div class="flex items-center gap-3 text-white/80">
          <span class="material-symbols-outlined">local_fire_department</span>
          <span class="text-sm font-bold uppercase tracking-wider">Current Streak</span>
        </div>
        <div>
          <div class="text-5xl font-bold">12<span class="text-2xl font-semibold text-white/80 ml-1"> days</span></div>
          <p class="text-xs font-bold text-white/80 mt-1">Target achieved consecutively</p>
        </div>
        <div class="mt-auto pt-4 flex items-center gap-2">
          <span class="text-sm font-semibold">Keep up the fantastic momentum!</span>
        </div>
      </div>
    </section>

    <!-- Daily Workhours List -->
    <section class="flex flex-col gap-4">
      <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Daily Breakdown</h3>
        <button class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
          <span class="material-symbols-outlined text-[20px]">download</span>
          Export
        </button>
      </div>
      <div class="flex flex-col gap-3">
        <!-- Log Item 1 -->
        <div v-for="log in dailyLogs" :key="log.date" class="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow group">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <span class="material-symbols-outlined">today</span>
            </div>
            <div>
              <h4 class="text-sm font-bold text-gray-900 dark:text-gray-100">{{ log.day }}, {{ log.date }}</h4>
              <p class="text-xs font-bold text-gray-500 dark:text-gray-400">{{ log.timeRange }}</p>
            </div>
          </div>
          <div class="flex items-center gap-6 justify-between md:justify-end flex-1">
            <div class="flex items-center gap-2">
              <span :class="['px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide', log.tagClass]">
                {{ log.tag }}
              </span>
            </div>
            <div class="text-right">
              <span class="text-2xl font-bold text-gray-900 dark:text-gray-100 block">{{ log.hours }}h</span>
              <span class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Logged</span>
            </div>
            <button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span class="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <button class="px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-bold text-xs uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-2">
          Load Previous Days
          <span class="material-symbols-outlined text-[18px]">expand_more</span>
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const dailyLogs = ref([
  {
    day: 'Thursday',
    date: 'Oct 26',
    timeRange: '09:00 AM - 05:30 PM',
    tag: 'Standard',
    tagClass: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
    hours: '8.5'
  },
  {
    day: 'Wednesday',
    date: 'Oct 25',
    timeRange: '08:45 AM - 06:15 PM',
    tag: 'Overtime (+1.5h)',
    tagClass: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400',
    hours: '9.5'
  },
  {
    day: 'Tuesday',
    date: 'Oct 24',
    timeRange: '09:15 AM - 05:15 PM',
    tag: 'Standard',
    tagClass: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
    hours: '8.0'
  }
])
</script>
