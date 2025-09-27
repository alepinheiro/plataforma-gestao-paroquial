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

          <FormField name="language">
            <FormItem class="flex flex-col">
              <FormLabel>Language</FormLabel>

              <Combobox by="label">
                <FormControl>
                  <ComboboxAnchor>
                    <div class="relative w-full max-w-sm items-center">
                      <ComboboxInput
                        :display-value="(val) => val?.label ?? ''"
                        placeholder="Select language..."
                      />
                      <ComboboxTrigger class="absolute end-0 inset-y-0 flex items-center justify-center px-3">
                        <ChevronsUpDown class="size-4 text-muted-foreground" />
                      </ComboboxTrigger>
                    </div>
                  </ComboboxAnchor>
                </FormControl>

                <ComboboxList>
                  <ComboboxEmpty>
                    Nothing found.
                  </ComboboxEmpty>

                  <ComboboxGroup>
                    <ComboboxItem
                      v-for="language in languages"
                      :key="language.value"
                      :value="language"
                      @select="() => {
                        setFieldValue('language', language.value)
                      }"
                    >
                      {{ language.label }}

                      <ComboboxItemIndicator>
                        <Check :class="cn('ml-auto h-4 w-4')" />
                      </ComboboxItemIndicator>
                    </ComboboxItem>
                  </ComboboxGroup>
                </ComboboxList>
              </Combobox>

              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
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
          <Button>
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
import { profileSchema } from '~~/shared/schemas/profile/index.schema';
import type { Profile, User } from '~~/shared/types/generated/prisma';

definePageMeta({
  title: 'Cadastrar casal',
  description: 'Crie ou altere as informações do casal',
});

const route = useRoute();

const { handleSubmit, setValues, setFieldValue } = useForm({
  validationSchema: toTypedSchema(profileSchema),
  initialValues: {
    id: `${route.params.id}`,
  },
});

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch<{ profile: Profile; user: User }>(`/api/profile/${id}`, {
    method: 'POST',
    body: values,
  });

  const [firstName] = response.profile.name.split(' ');

  toast.success(firstName + 'Foi cadastrado com sucesso!');

  await navigateTo('/profile');
});
</script>
