<template>
  <div>
    <form @submit="onSubmit">
      <Card>
        <CardContent class="flex flex-wrap gap-2 items-start">
          <FormTitleTemplate
            description="Insira os dados iniciais para gerar um convite"
            title="Dados pessoais"
            class="w-full"
          />

          <Separator class="w-full" />

          <FormField
            v-slot="{ componentField }"
            name="id"
          >
            <FormItem class="w-full hidden">
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
            name="userId"
          >
            <FormItem class="w-full hidden">
              <FormLabel> userId </FormLabel>
              <FormControl>
                <Input
                  placeholder="userId"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="herName"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Nome dela </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome dela"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="hisName"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Nome dele </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome dele"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <Separator class="w-full" />

          <FormField
            v-slot="{ componentField }"
            name="email"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Email </FormLabel>
              <FormControl>
                <Input
                  placeholder="email@exemplo.com"
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
import { z } from 'zod';
import { inviteFormSchema } from '~~/shared/schemas/invite/index.schema';

definePageMeta({
  title: 'Criar Convite',
  description: 'Crie um convite',
});

const { user, session } = useUserSession();
if (!user.value) throw new Error('User not found');
const route = useRoute();

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(inviteFormSchema),
  initialValues: {
    id: `${route.params.id}`,
    userId: user.value.profile.id,
    coupleId: session.value?.couple.id,
  },
});

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch(`/api/invite/${id}`, {
    method: 'POST',
    body: values,
  });

  // const [firstName] = response.profile.name.split(' ');

  toast.success(response?.invitation.coupleName + ' Foi cadastrado com sucesso!');

  await navigateTo('/invite');
},
error =>

  console.error(error),
);
</script>
