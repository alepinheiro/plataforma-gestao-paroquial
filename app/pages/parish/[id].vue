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

          <FormAddressFields
            @set-values="(address) => setValues({
              address,
            }, false)"
          />

          <FormField
            name="archdioceseId"
            class="w-full"
          >
            <FormItem class="flex flex-col w-full">
              <FormLabel>
                Área da paróquia
              </FormLabel>

              <Combobox
                by="label"
                class="w-full"
              >
                <FormControl>
                  <ComboboxAnchor class="w-full">
                    <div class="relative w-full items-center">
                      <ComboboxInput
                        :disabled="pending || !!error"
                        class="w-full"
                        :display-value="(val) => val?.name ?? ''"
                        placeholder="Digite para pesquisar"
                      />
                      <ComboboxTrigger class="absolute end-0 inset-y-0 flex items-center justify-center px-3 right-0">
                        <ChevronsUpDown class="size-4 text-muted-foreground" />
                      </ComboboxTrigger>
                    </div>
                  </ComboboxAnchor>
                </FormControl>

                <ComboboxList>
                  <ComboboxEmpty>
                    Nenhum resultado.
                  </ComboboxEmpty>

                  <ComboboxGroup
                    v-if="archdioceses?.length"
                  >
                    <ComboboxItem
                      v-for="item in archdioceses"
                      :key="item.id"
                      :value="item"
                      @select="() => {
                        setFieldValue('archdioceseId', item.id)
                      }"
                    >
                      {{ item.name }}

                      <ComboboxItemIndicator>
                        <Check :class="cn('ml-auto h-4 w-4')" />
                      </ComboboxItemIndicator>
                    </ComboboxItem>
                  </ComboboxGroup>
                </ComboboxList>
              </Combobox>

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
          <Button :disabled="isSubmitting">
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </form>
  </div>
</template>

<script lang='ts' setup>
import { Check, ChevronsUpDown } from 'lucide-vue-next';
import { toast } from 'vue-sonner';
import z from 'zod';
import { cn } from '~/lib/utils';
import type { Archdiocese } from '~~/shared/schemas/models/archdiocese.schema';
import type { Profile } from '~~/shared/schemas/models/profile.schema';
import type { User } from '~~/shared/schemas/models/user.schema';
import { parishSchema } from '~~/shared/schemas/parish/index.schema';

definePageMeta({
  title: 'Cadastrar Perfil',
  description: 'Crie ou altere as informações do perfil',
});

const route = useRoute();

const { handleSubmit, setValues, setFieldValue, isSubmitting } = useForm({
  validationSchema: toTypedSchema(parishSchema),
  initialValues: {
    id: `${route.params.id}`,
  },
});

const { data: archdioceses, error, pending } = await useFetch<Array<Archdiocese>>('/api/archdiocese/', {
  method: 'GET',
});

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch<{ profile: Profile; user: User }>(`/api/parish/${id}`, {
    method: 'POST',
    body: values,
  });

  const [firstName] = response.profile.name.split(' ');

  toast.success(firstName + 'Foi cadastrado com sucesso!');

  await navigateTo('/profile');
},
({ errors }) => {
  console.error('Erro ao cadastrar:', errors);
  for (const error of Object.values(errors).splice(0, 3))
    toast.error('Erro ao cadastrar: ' + error);
});
</script>
