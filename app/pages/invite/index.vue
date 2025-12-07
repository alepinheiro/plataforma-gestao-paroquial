<template>
  <div v-if="status === 'pending'">
    carregando
  </div>

  <div
    v-else-if="status === 'error'"
    class="p-4"
  >
    <Card>
      <CardContent class="text-red-600">
        Erro ao carregar os dados:
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

    <Card
      v-for="item of data"
      :key="item.id"
    >
      <CardHeader>
        {{ item.coupleName }}
      </CardHeader>
      <CardFooter class="flex gap-2">
        <Button
          variant="destructive"
          @click="onRemoveInvite(item.id)"
        >
          Excluir convite
        </Button>
        <Button as-child>
          <NuxtLink
            :to="`/cadastro/${item.token}`"
            target="_blank"
          >
            Abrir link
          </NuxtLink>
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script lang='ts' setup>
import { toast } from 'vue-sonner';
import type { Invitation } from '~~/shared/schemas/models/invitation.schema';

definePageMeta({
  title: 'Convites',
  description: 'Listagem dos convites',
});

const { user, fetch } = useUserSession();
await fetch();
if (!user.value) {
  toast.error('Usuário não autenticado');
  await navigateTo('/login');
  throw new Error('Usuário não autenticado');
}

const { data, status, refresh } = await useFetch<Array<Invitation>>('/api/invite/', {
  method: 'GET',
  query: {
    userId: user.value.id,
  },
});

const onRemoveInvite = async (id: string) => {
  await useFetch(`/api/invite/${id}`, {
    method: 'DELETE',
  });
  await refresh();
};
</script>
