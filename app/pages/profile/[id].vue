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

          <FormField
            v-slot="{ componentField }"
            name="birthDate"
          >
            <FormItem class="w-full md:w-1/5 grow">
              <FormLabel> Data de nascimento </FormLabel>
              <FormControl>
                <Input
                  v-maska="'##/##/####'"
                  placeholder="DD/MM/AAAA"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="gender"
          >
            <FormItem class="w-full md:w-1/5 grow">
              <FormLabel> Gênero </FormLabel>
              <Select
                v-bind="componentField"
              >
                <FormControl>
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="MALE">
                      Masculino
                    </SelectItem>
                    <SelectItem value="FEMALE">
                      Feminino
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormAddressFields
            @set-values="(address) => setValues({
              address,
            }, false)"
          />

          <FormTitleTemplate
            description="Insira como poderemos nos conectar"
            title="Contatos"
            class="w-full"
          />

          <Separator class="w-full" />

          <FormField
            v-slot="{ componentField }"
            name="phone"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Telefone / WhatsApp </FormLabel>
              <FormControl>
                <Input
                  v-maska="'(##) ####-#####'"
                  placeholder="(00) 0000-00000"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

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

          <FormField
            v-slot="{ componentField }"
            name="instagram"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Instagram </FormLabel>
              <FormControl>
                <Input
                  placeholder="@usuario"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="facebook"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Facebook </FormLabel>
              <FormControl>
                <Input
                  placeholder="@usuario"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="photo"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Foto </FormLabel>
              <FormControl>
                <Input
                  placeholder="Insira sua foto"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormTitleTemplate
            description="Digite sua senha de acesso"
            title="Acesso"
            class="w-full"
          />

          <Separator class="w-full" />

          <FormField
            v-slot="{ componentField }"
            name="password"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Senha </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="confirmPassword"
          >
            <FormItem class="w-full md:w-1/3 grow">
              <FormLabel> Confirme sua senha </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha"
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
          <Button :disabled="isSubmitting">
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </form>
  </div>
</template>

<script lang='ts' setup>
import { vMaska } from 'maska/vue';
import { toast } from 'vue-sonner';
import z from 'zod';
import { ProfileSchema, type Profile } from '~~/shared/schemas/models/profile.schema';
import type { User } from '~~/shared/schemas/models/user.schema';

definePageMeta({
  title: 'Cadastrar Perfil',
  description: 'Crie ou altere as informações do perfil',
});

const route = useRoute();

const { handleSubmit, setFieldValue, setValues, isSubmitting } = useForm({
  validationSchema: toTypedSchema(ProfileSchema
    .omit({
      createdAt: true,
      updatedAt: true,
    })
    .extend({
      birthDate: z.string({ error: 'Data de nascimento é obrigatória.' }),
      password: z.string('Informe uma senha').min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }).describe('Senha de acesso'),
      confirmPassword: z.string('Confirme a senha').min(6, { message: 'A confirmação de senha deve ter no mínimo 6 caracteres.' }).describe('Confirmação da senha de acesso'),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem.',
    })),
  initialValues: {
    id: `${route.params.id}`,
  },
});

setFieldValue('id', `${route.params.id}`);

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch<{
    profile: Profile; user: User;
  }>(`/api/profile/${id}`, {
    method: 'POST',
    body: values,
  });

  const [firstName] = response.profile.name.split(' ');

  toast.success(
    firstName
    + ` foi cadastrad${values.gender === 'FEMALE' ? 'a' : 'o'}`
    + ' com sucesso!',
  );

  await navigateTo('/profile');
},
({ errors }) => {
  console.error('Erro ao cadastrar:', errors);
  for (const error of Object.values(errors).splice(0, 3))
    toast.error('Erro ao cadastrar: ' + error);
});
</script>
