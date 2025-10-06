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

  <div
    v-else
    class="flex flex-col gap-2 w-full"
  >
    <div class="w-full flex">
      <Button
        class="ml-auto"
        as-child
      >
        <NuxtLink to="/invite/new">
          Criar convite
        </NuxtLink>
      </Button>
    </div>
    {{ data }}
  </div>
</template>

<script lang='ts' setup>
import type { Profile } from '~~/shared/types/generated/prisma';

definePageMeta({
  title: 'Convites',
  description: 'Listagem dos convites',
});

const { user } = useUserSession();
if (!user.value) throw new Error('User not found');

const { data, error, pending } = await useFetch<Array<Profile>>('/api/invite/', {
  method: 'GET',
  query: {
    userId: user.value.id,
  },
});
</script>
