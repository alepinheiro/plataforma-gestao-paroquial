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
            name="coupleId"
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
            name="parishId"
            class="w-full"
          >
            <FormItem class="flex flex-col w-full">
              <FormLabel>
                Paróquia
              </FormLabel>

              <Combobox
                by="label"
                class="w-full"
              >
                <FormControl>
                  <ComboboxAnchor class="w-full">
                    <div class="relative w-full items-center">
                      <ComboboxInput
                        :disabled="parishesStatus === 'pending' || parishesStatus === 'error'"
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
                    v-if="parishes?.length"
                  >
                    <ComboboxItem
                      v-for="item in parishes"
                      :key="item.id"
                      :value="item"
                      @select="() => {
                        setFieldValue('parishId', item.id)
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

          <FormField
            name="member1Id"
            class="w-full"
          >
            <FormItem class="flex flex-col w-full">
              <FormLabel>
                Nome dela
              </FormLabel>

              <Combobox
                by="label"
                class="w-full"
              >
                <FormControl>
                  <ComboboxAnchor class="w-full">
                    <div class="relative w-full items-center">
                      <ComboboxInput
                        :disabled="profilesStatus === 'pending' || profilesStatus === 'error'"
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
                    v-if="profiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in profiles"
                      :key="item.id"
                      :value="item"
                      @select="() => {
                        setFieldValue('member1Id', item.id)
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

          <FormField
            name="member2Id"
            class="w-full"
          >
            <FormItem class="flex flex-col w-full">
              <FormLabel>
                Nome dele
              </FormLabel>

              <Combobox
                by="label"
                class="w-full"
              >
                <FormControl>
                  <ComboboxAnchor class="w-full">
                    <div class="relative w-full items-center">
                      <ComboboxInput
                        :disabled="profilesStatus === 'pending' || profilesStatus === 'error'"
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
                    v-if="profiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in profiles"
                      :key="item.id"
                      :value="item"
                      @select="() => {
                        setFieldValue('member2Id', item.id)
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

          <FormField
            v-slot="{ componentField }"
            name="marriageDate"
          >
            <FormItem class="w-full md:w-1/5 grow">
              <FormLabel> Data do casamento </FormLabel>
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
            name="godparent1Id"
            class="w-full"
          >
            <FormItem class="flex flex-col w-full">
              <FormLabel>
                Madrinha
              </FormLabel>

              <Combobox
                by="label"
                class="w-full"
              >
                <FormControl>
                  <ComboboxAnchor class="w-full">
                    <div class="relative w-full items-center">
                      <ComboboxInput
                        :disabled="profilesStatus === 'pending' || profilesStatus === 'error'"
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
                    v-if="profiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in profiles"
                      :key="item.id"
                      :value="item"
                      @select="() => {
                        setFieldValue('godparent1Id', item.id)
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

          <FormField
            name="godparent2Id"
            class="w-full"
          >
            <FormItem class="flex flex-col w-full">
              <FormLabel>
                Padrinho
              </FormLabel>

              <Combobox
                by="label"
                class="w-full"
              >
                <FormControl>
                  <ComboboxAnchor class="w-full">
                    <div class="relative w-full items-center">
                      <ComboboxInput
                        :disabled="profilesStatus === 'pending' || profilesStatus === 'error'"
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
                    v-if="profiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in profiles"
                      :key="item.id"
                      :value="item"
                      @select="() => {
                        setFieldValue('godparent2Id', item.id)
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

          <!-- <FormField
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
          </FormField> -->
          <!--
          <FormAddressFields
            @set-values="(address) => setValues({
              address,
            }, false)"
          /> -->

          <!-- <FormTitleTemplate
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
          </FormField> -->
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
import { Check, ChevronsUpDown } from 'lucide-vue-next';
import { vMaska } from 'maska/vue';
import { toast } from 'vue-sonner';
import z from 'zod';
import { cn } from '~/lib/utils';
import { createCoupleSchema } from '~~/shared/schemas/couple/index.schema';
import type { Parish, Profile, User } from '~~/shared/types/generated/prisma';

definePageMeta({
  title: 'Cadastrar casal',
  description: 'Crie ou altere as informações do casal',
});

const route = useRoute();

const { handleSubmit, setValues, setFieldValue } = useForm({
  validationSchema: toTypedSchema(createCoupleSchema.extend({
    coupleId: z.string(),
  })),
  initialValues: {
    coupleId: `${route.params.id}`,
  },
});

const { data: profiles, status: profilesStatus } = await useFetch<Array<Profile>>('/api/profile/', {
  method: 'GET',
});
const { data: parishes, status: parishesStatus } = await useFetch<Array<Parish>>('/api/parish/', {
  method: 'GET',
});

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch<{ profile: Profile; user: User }>(`/api/couple/${id}`, {
    method: 'POST',
    body: values,
  });

  const [firstName] = response.profile.name.split(' ');

  toast.success(firstName + 'Foi cadastrado com sucesso!');

  await navigateTo('/couple');
}, error => console.error(error));
</script>
