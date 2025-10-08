<template>
  <div v-if="pending">
    carregando
  </div>

  <div
    v-else-if="error"
    class="p-4"
  >
    <Card>
      <CardContent class="text-red-600">
        Erro ao carregar os dados: {{ error.message }}
      </CardContent>
    </Card>
  </div>

  <div v-else>
    <div class="w-full flex">
      <Button
        class="ml-auto"
        as-child
      >
        <NuxtLink to="/parish/new">
          Nova paróquia
        </NuxtLink>
      </Button>
    </div>

    {{ data }}
  </div>
</template>

<script lang='ts' setup>
import type { Parish } from '~~/shared/types/generated/prisma';

definePageMeta({
  title: 'Paróquias',
  description: 'Listagem das paróquias',
});

const { data, error, pending } = await useFetch<Array<Parish>>('/api/parish/', {
  method: 'GET',
});
</script>
