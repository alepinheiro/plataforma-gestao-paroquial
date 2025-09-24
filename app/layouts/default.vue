<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="p-2 w-full flex flex-col gap-2">
      <slot />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar';
</script>
