<template>
  <div>
    <form @submit="onSubmit">
      <Card>
        <CardContent class="flex flex-wrap gap-2 items-start">
          <FormTitleTemplate
            description="Vamos nos conhecer melhor"
            title="Dados pessoais"
            class="w-full"
          />

          <Separator class="w-full" />

          <FormField
            v-slot="{ componentField }"
            name="id"
          >
            <FormItem class="w-full">
              <FormLabel> id </FormLabel>
              <FormControl>
                <Input
                  placeholder="id"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="name"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Nome completo </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome completo"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>
        </CardContent>

        <CardFooter class="w-full flex justify-between items-center gap-2">
          <Button
            variant="outline"
            type="button"
          >
            Cancelar
          </Button>
          <Button>
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </form>
  </div>
</template>

<script lang='ts' setup>
import { toast } from 'vue-sonner';
import z from 'zod';
import { archdioceseSchema } from '~~/shared/schemas/archdiocese/index.schema';
import type { Archdiocese } from '~~/shared/schemas/models/archdiocese.schema';

definePageMeta({
  title: 'Cadastrar Área',
  description: 'Crie ou altere as informações da Área',
});

const route = useRoute();

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(archdioceseSchema),
  initialValues: {
    id: `${route.params.id}`,
  },
});

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch<Archdiocese>(`/api/archdiocese/${id}`, {
    method: 'POST',
    body: values,
  });

  toast.success(response.name + ' Foi cadastrado com sucesso!');

  await navigateTo('/area');
});
</script>
