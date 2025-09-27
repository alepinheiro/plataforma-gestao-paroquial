<template>
  <SidebarProvider>
    <AppSidebar />

    <main class="p-2 w-full flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <h1 class="font-semibold text-2xl">
          {{ $route.meta.title }}
        </h1>
        <p class="opacity-80">
          {{ $route.meta.description }}
        </p>
      </div>
      <slot />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar';
</script>
