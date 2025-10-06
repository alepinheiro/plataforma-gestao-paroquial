<template>
  <div class="p-5">
    <Card>
      <CardHeader class="flex">
        <CardTitle>Nuxt Page</CardTitle>
        <CardDescription>teste</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>teste</Button>
      </CardContent>
    </Card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['authenticated'],
  title: 'Index',
  description: 'Página inicial',
});

const { fetch } = useUserSession();
await fetch();
</script>
