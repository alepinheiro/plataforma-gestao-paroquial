<template>
  <SidebarProvider>
    <div class="flex w-full min-h-screen">
      <AppSidebar />

      <main class="p-2 w-full flex flex-col gap-2">
        <header class="flex flex-row gap-2 items-center">
          <SidebarTrigger class="-ml-1 size-12" />
          <div class="flex flex-col gap-1">
            <h1 class="font-semibold text-2xl">
              {{ $route.meta.title }}
            </h1>
            <p class="opacity-80">
              {{ $route.meta.description }}
            </p>
          </div>
        </header>
        <section>
          <slot />
        </section>
      </main>
    </div>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar';
</script>
