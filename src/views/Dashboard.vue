<template>
  <div class="flex-1 p-md md:p-xl lg:p-margin max-w-7xl mx-auto w-full space-y-gutter">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div class="md:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg flex flex-col justify-between relative overflow-hidden">
        <div class="flex justify-between items-start mb-lg relative z-10">
          <div>
            <h2 class="font-headline-md text-headline-md text-on-surface">Welcome, {{ authStore.name || 'Employee' }}!</h2>
            <p class="font-body-md text-body-md text-secondary mt-1">Biometric tracking active</p>
          </div>
          <div class="inline-flex items-center gap-2 bg-surface-container-highest text-secondary px-3 py-1.5 rounded-full shadow-sm border border-secondary-container/50">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span class="font-label-sm text-label-sm uppercase tracking-wider">Active</span>
            <span class="material-symbols-outlined text-[16px]">face</span>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center py-xl relative z-10">
          <div class="text-center">
            <div class="font-display text-display text-on-surface tracking-tighter">04:23:15</div>
            <p class="font-label-md text-label-md text-secondary mt-2 uppercase tracking-widest">Hours Logged Today</p>
          </div>
        </div>
      </div>
      <div class="md:col-span-4 flex flex-col gap-gutter">
        <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-md flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
              <span class="material-symbols-outlined">login</span>
            </div>
            <div>
              <h3 class="font-label-md text-label-md text-secondary">Clock-In</h3>
              <p class="font-headline-md text-headline-md text-on-surface mt-1">08:45 AM</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-green-500">check_circle</span>
        </div>
        <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-md flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
              <span class="material-symbols-outlined">logout</span>
            </div>
            <div>
              <h3 class="font-label-md text-label-md text-secondary">Predicted Out</h3>
              <p class="font-headline-md text-headline-md text-on-surface mt-1">05:00 PM</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-outline">schedule</span>
        </div>
        <div class="mt-auto">
          <button class="w-full bg-primary text-on-primary rounded-lg py-3 px-4 font-label-md text-label-md hover:scale-[1.02] transition-transform duration-200 shadow-sm flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">fingerprint</span>
            Manual Override
          </button>
        </div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg">
      <div class="flex justify-between items-center mb-lg">
        <h2 class="font-headline-md text-headline-md text-on-surface">Weekly Workhours</h2>
        <button class="text-primary font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container py-1 px-2 rounded-md transition-colors">
          This Week <span class="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
      </div>
      <div class="w-full h-64 relative flex items-end justify-between pt-8 pb-4 border-b border-surface-container-highest px-2">
        <div class="absolute left-0 top-0 bottom-0 w-full flex flex-col justify-between pointer-events-none opacity-20">
          <div class="border-t border-outline-variant w-full h-0"></div>
          <div class="border-t border-outline-variant w-full h-0"></div>
          <div class="border-t border-outline-variant w-full h-0"></div>
          <div class="border-t border-outline-variant w-full h-0"></div>
        </div>
        <div class="flex flex-col items-center gap-2 z-10 w-1/5 group">
          <div class="w-12 bg-primary-fixed-dim rounded-t-lg h-32 group-hover:bg-primary transition-colors duration-300 relative">
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">6.5h</div>
          </div>
          <span class="font-label-sm text-label-sm text-secondary">Mon</span>
        </div>
        <div class="flex flex-col items-center gap-2 z-10 w-1/5 group">
          <div class="w-12 bg-primary rounded-t-lg h-40 relative">
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">8.2h</div>
          </div>
          <span class="font-label-sm text-label-sm text-on-surface font-semibold">Tue</span>
        </div>
        <div class="flex flex-col items-center gap-2 z-10 w-1/5 group">
          <div class="w-12 bg-primary-fixed-dim rounded-t-lg h-36 group-hover:bg-primary transition-colors duration-300 relative">
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">7.1h</div>
          </div>
          <span class="font-label-sm text-label-sm text-secondary">Wed</span>
        </div>
        <div class="flex flex-col items-center gap-2 z-10 w-1/5 group">
          <div class="w-12 bg-primary-fixed rounded-t-lg h-12 group-hover:bg-outline transition-colors duration-300 relative">
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">2.0h</div>
          </div>
          <span class="font-label-sm text-label-sm text-secondary">Thu</span>
        </div>
        <div class="flex flex-col items-center gap-2 z-10 w-1/5 group">
          <div class="w-12 bg-primary-fixed rounded-t-lg h-0"></div>
          <span class="font-label-sm text-label-sm text-secondary">Fri</span>
        </div>
      </div>
    </div>
    <div class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
      <div class="p-lg border-b border-surface-container-highest flex justify-between items-center">
        <h2 class="font-headline-md text-headline-md text-on-surface">Recent Activity</h2>
        <span class="font-label-sm text-label-sm text-secondary">Today</span>
      </div>
      <div class="flex flex-col">
        <div class="flex items-start gap-4 p-md hover:bg-surface-container-low transition-colors border-b border-surface-container-highest last:border-0">
          <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mt-1 shrink-0">
            <span class="material-symbols-outlined text-[20px]">face</span>
          </div>
          <div class="flex-1">
            <p class="font-body-md text-body-md text-on-surface font-medium">Face Recognized at Desk 4</p>
            <p class="font-body-md text-body-md text-secondary text-sm">Session resumed automatically.</p>
          </div>
          <div class="font-label-sm text-label-sm text-secondary whitespace-nowrap">
            01:15 PM
          </div>
        </div>
        <div class="flex items-start gap-4 p-md hover:bg-surface-container-low transition-colors border-b border-surface-container-highest last:border-0">
          <div class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary mt-1 shrink-0">
            <span class="material-symbols-outlined text-[20px]">directions_walk</span>
          </div>
          <div class="flex-1">
            <p class="font-body-md text-body-md text-on-surface font-medium">Away from Desk</p>
            <p class="font-body-md text-body-md text-secondary text-sm">No face detected in camera view.</p>
          </div>
          <div class="font-label-sm text-label-sm text-secondary whitespace-nowrap">
            12:30 PM
          </div>
        </div>
        <div class="flex items-start gap-4 p-md hover:bg-surface-container-low transition-colors border-b border-surface-container-highest last:border-0">
          <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mt-1 shrink-0">
            <span class="material-symbols-outlined text-[20px]">face</span>
          </div>
          <div class="flex-1">
            <p class="font-body-md text-body-md text-on-surface font-medium">Face Recognized at Desk 4</p>
            <p class="font-body-md text-body-md text-secondary text-sm">Initial clock-in recorded.</p>
          </div>
          <div class="font-label-sm text-label-sm text-secondary whitespace-nowrap">
            08:45 AM
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>
