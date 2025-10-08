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
    class="flex flex-col gap-2 w-full items-center"
  >
    <!-- {{ data }} -->
    <div class="max-w-3xl max-auto pt-12 flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h1>Cadastro dela</h1>
        <FormProfileFields
          prefix="member1"
          :use-form="formData"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h1>Cadastro dele</h1>
        <FormProfileFields
          prefix="member2"
          :use-form="formData"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import z from 'zod';
import { profileSchema } from '~~/shared/schemas/profile/index.schema';

definePageMeta({
  title: 'Convites',
  description: 'Listagem dos convites',
  layout: 'no-sidebar',
});

const route = useRoute();

const { data, error, pending } = await useFetch('/api/invite/', {
  method: 'GET',
  query: {
    token: route.params.token,
  },
});

const formData = useForm({
  validationSchema: toTypedSchema(z.object({
    member1: profileSchema,
    member2: profileSchema,
  })),
  initialValues: {
    member1: {
      id: 'new',
    },
    member2: {
      id: 'new',
    },
  },

});
</script>
