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
        Erro ao carregar os dados: {{ error.message }}
      </CardContent>
    </Card>
  </div>

  <div
    v-else
    class="flex flex-col gap-4"
  >
    <div class="w-full flex">
      <Button
        class="ml-auto"
        as-child
      >
        <NuxtLink to="/couple/new">
          Criar casal
        </NuxtLink>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Card
        v-for="couple in data"
        :key="couple.id"
        class=""
      >
        <CardHeader>
          <CardTitle>
            {{ couple.member1.name }} do {{ couple.member2.name }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Data do casamento:
            {{ new Date(couple.marriageDate).toLocaleDateString() }}
          </p>
          <p>
            Paróquia:
            {{ couple.parish.name }}
          </p>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            as-child
          >
            <NuxtLink :to="`/couple/${couple.id}`">
              Ver detalhes
            </NuxtLink>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script lang='ts' setup>
import type { Prisma } from '~~/shared/types/generated/prisma';

definePageMeta({
  title: 'Casais',
  description: 'Listagem de todos os casais',
});

const { data, status } = await useFetch<Array<Prisma.CoupleGetPayload<{
  include: { parish: true; member1: true; member2: true };
}>>>('/api/couple/', {
  method: 'GET',
});
</script>
