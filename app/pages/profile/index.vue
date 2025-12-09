<template>
  <div v-if="status ==='pending'">
    carregando
  </div>

  <div
    v-else-if="status ==='error'"
    class="p-4"
  >
    <Card>
      <CardContent class="text-red-600">
        Erro ao carregar os dados
      </CardContent>
    </Card>
  </div>

  <div
    v-else
    class="flex flex-col gap-2"
  >
    <div class="w-full flex">
      <Button
        class="ml-auto"
        as-child
      >
        <NuxtLink to="/profile/new">
          Cadastrar novo perfil
        </NuxtLink>
      </Button>
    </div>

    <div
      v-if="user"
      class="flex flex-col gap-2"
    >
      <Card
        v-for="profile in data"
        :key="profile._id"
        :class="user.profile._id === profile._id ? 'border-2 border-primary' : ''"
      >
        <CardHeader>
          <CardTitle>
            {{ profile.name }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>ID:</strong> {{ profile._id }}</p>
          <p><strong>Nome:</strong> {{ profile.name }}</p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script lang='ts' setup>
import type { Profile } from '~~/shared/schemas/models/profile.schema';

definePageMeta({
  title: 'Perfis',
  description: 'Listagem de todos os perfis cadastrados',
  middleware: ['authenticated'],
});

const { user } = useUserSession();

const { data, status } = await useFetch<Array<Profile>>('/api/profile/', {
  method: 'GET',
});
</script>
