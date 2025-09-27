<template>
  <div>
    <p class="font-semibold">
      {{ title }}
    </p>
    <p class="opacity-80 text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script lang='ts' setup>
defineProps<{
  title: string;
  description: string;
}>();
</script>
