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
    {{ data }}
  </div>
</template>

<script lang='ts' setup>
import type { Profile } from '~~/shared/types/generated/prisma';

definePageMeta({
  title: 'Casais',
  description: 'Listagem de todos os casais',
});

const { data, error, pending } = await useFetch<Array<Profile>>('/api/profile/', {
  method: 'GET',
});
</script>
