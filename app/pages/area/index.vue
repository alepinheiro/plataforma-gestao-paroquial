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
        Erro ao carregar os dados
      </CardContent>
    </Card>
  </div>

  <div v-else>
    <div class="w-full flex">
      <Button
        class="ml-auto"
        as-child
      >
        <NuxtLink to="/area/new">
          Criar área
        </NuxtLink>
      </Button>
    </div>

    <div class="flex flex-col w-full gap-4 mt-4">
      <Card
        v-for="area in data"
        :key="area._id"
      >
        <CardContent>
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-lg font-semibold">
                {{ area.name }}
              </h3>
              <p class="text-sm text-muted-foreground mt-1">
                Paróquias: {{ area.parishes?.length ?? 0 }}
              </p>
              <p class="text-sm text-muted-foreground">
                Criado: {{ area.createdAt ? new Date(area.createdAt).toLocaleDateString() : '-' }}
              </p>
            </div>

            <div class="ml-4 flex flex-col items-end gap-2">
              <Button as-child>
                <NuxtLink
                  :to="`/area/${area._id}`"
                  class="text-sm text-blue-600 hover:underline"
                >
                  Ver
                </NuxtLink>
              </Button>
              <Button
                as-child
                variant="secondary"
              >
                <NuxtLink
                  :to="`/area/${area._id}/edit`"
                  class="text-sm text-gray-600 hover:underline"
                >
                  Editar
                </NuxtLink>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script lang='ts' setup>
import type { Archdiocese } from '~~/shared/schemas/models/archdiocese.schema';

definePageMeta({
  title: 'Área',
  description: 'Listagem da área',
});

const { data, status } = await useFetch<Archdiocese[]>('/api/archdiocese/', {
  method: 'GET',
});
</script>
