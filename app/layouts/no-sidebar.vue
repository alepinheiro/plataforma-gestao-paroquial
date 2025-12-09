<template>
  <div class="px-5">
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
useHead({
  title: () => route.meta.title ? ` ${route.meta.title} - ${config.public.appName} ` : config.public.appName,
});
</script>
