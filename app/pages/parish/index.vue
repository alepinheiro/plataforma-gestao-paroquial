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
        Erro ao carregar os dados: {{ status }}
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

    <div
      v-if="!data || data.length === 0"
      class="mt-4"
    >
      <Card>
        <CardContent>
          Nenhuma paróquia encontrada.
        </CardContent>
      </Card>
    </div>

    <div
      v-else
      class="grid gap-4 mt-4"
    >
      <div
        v-for="parish in data"
        :key="parish._id"
      >
        <Card>
          <CardContent>
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-lg font-semibold">
                  {{ parish.name || '—' }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ `${parish.address.street}, ${parish.address.number} - ${parish.address.neighborhood} - ${parish.address.city}` || 'Endereço não informado' }}
                </p>
              </div>

              <div class="flex items-center gap-2 ml-4">
                <Button as-child>
                  <NuxtLink :to="`/parish/${parish._id}`">Detalhes</NuxtLink>
                </Button>
                <Button as-child>
                  <NuxtLink :to="`/parish/${parish._id}/edit`">Editar</NuxtLink>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import type { Parish } from '~~/shared/schemas/models/parish.schema';

definePageMeta({
  title: 'Paróquias',
  description: 'Listagem das paróquias',
});

const { data, status } = await useFetch<Array<Parish>>('/api/parish/', {
  method: 'GET',
});
</script>
