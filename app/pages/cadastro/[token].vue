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

  <div
    v-else
    class="flex flex-col gap-2 w-full items-center"
  >
    {{ data }}
    <form
      class="max-w-3xl max-auto py-12 flex flex-col gap-4"
      @submit="onSubmit"
    >
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
      <Button type="submit">
        Cadastrar
      </button>
    </form>
  </div>
</template>

<script lang='ts' setup>
import { z } from 'zod';
import { ProfileSchema } from '~~/shared/schemas/models/profile.schema';

definePageMeta({
  title: 'Convites',
  description: 'Listagem dos convites',
  layout: 'no-sidebar',
});

const route = useRoute();
const token = route.params.token;

const { data, status } = await useFetch('/api/invite/', {
  method: 'GET',
  query: {
    token,
  },
});

const formData = useForm({
  validationSchema: toTypedSchema(z.object({
    member1: ProfileSchema,
    member2: ProfileSchema,
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

const onSubmit = formData.handleSubmit(async (values) => {
  await useFetch(`/api/couple/register/${token}`, {
    method: 'POST',
    body: values,
  });
});
</script>
