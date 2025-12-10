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
                      :key="item._id"
                      :value="item"
                      @select="() => {
                        setFieldValue('parishId', item._id)
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
                        :disabled="notInCoupleProfilesStatus === 'pending' || notInCoupleProfilesStatus === 'error'"
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
                    v-if="notInCoupleProfiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in notInCoupleFemaleProfiles"
                      :key="item._id"
                      :value="item"
                      @select="() => {
                        setFieldValue('member1Id', item._id)
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
                        :disabled="notInCoupleProfilesStatus === 'pending' || notInCoupleProfilesStatus === 'error'"
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
                    v-if="notInCoupleProfiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in notInCoupleMaleProfiles"
                      :key="item._id"
                      :value="item"
                      @select="() => {
                        setFieldValue('member2Id', item._id)
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
                        :disabled="coupleProfilesStatus === 'pending' || coupleProfilesStatus === 'error'"
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
                    v-if="notInCoupleProfiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in coupleFemaleProfiles"
                      :key="item._id"
                      :value="item"
                      @select="() => {
                        setFieldValue('godparent1Id', item._id)
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
                        :disabled="coupleProfilesStatus === 'pending' || coupleProfilesStatus === 'error'"
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
                    v-if="notInCoupleProfiles?.length"
                  >
                    <ComboboxItem
                      v-for="item in coupleMaleProfiles"
                      :key="item._id"
                      :value="item"
                      @select="() => {
                        setFieldValue('godparent2Id', item._id)
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
import { vMaska } from 'maska/vue';
import { toast } from 'vue-sonner';
import z from 'zod';
import { cn } from '~/lib/utils';
import { createCoupleSchema } from '~~/shared/schemas/couple/index.schema';
import type { Parish } from '~~/shared/schemas/models/parish.schema';
import type { Profile } from '~~/shared/schemas/models/profile.schema';
import type { User } from '~~/shared/schemas/models/user.schema';

definePageMeta({
  title: 'Cadastrar casal',
  description: 'Crie ou altere as informações do casal',
});

const route = useRoute();

const { handleSubmit, setFieldValue, isSubmitting } = useForm({
  validationSchema: toTypedSchema(createCoupleSchema.extend({
    coupleId: z.string(),
  })),
  initialValues: {
    coupleId: `${route.params.id}`,
  },
});

setFieldValue('coupleId', `${route.params.id}`);

const { data: notInCoupleProfiles, status: notInCoupleProfilesStatus } = await useFetch<Array<Profile>>('/api/profile/', {
  method: 'GET',
  params: {
    married: false,
  },
});
const { data: coupleProfiles, status: coupleProfilesStatus } = await useFetch<Array<Profile>>('/api/profile/', {
  method: 'GET',
  params: {
    married: true,
  },
});
const { data: parishes, status: parishesStatus } = await useFetch<Array<Parish>>('/api/parish/', {
  method: 'GET',
});

const notInCoupleFemaleProfiles = computed(
  () => notInCoupleProfiles.value?.filter(profile => profile.gender === 'FEMALE'));
const notInCoupleMaleProfiles = computed(
  () => notInCoupleProfiles.value?.filter(profile => profile.gender === 'MALE'));
const coupleFemaleProfiles = computed(
  () => coupleProfiles.value?.filter(profile => profile
    .gender === 'FEMALE'));
const coupleMaleProfiles = computed(
  () => coupleProfiles.value?.filter(profile => profile
    .gender === 'MALE'));

const onSubmit = handleSubmit(async (values) => {
  const id = z.string().parse(route.params.id);

  const response = await $fetch<{ profile: Profile; user: User }>(`/api/couple/${id}`, {
    method: 'POST',
    body: values,
  });

  const [firstName] = response.profile.name.split(' ');

  toast.success(firstName + 'Foi cadastrado com sucesso!');

  await navigateTo('/couple');
},
({ errors }) => {
  console.error('Erro ao cadastrar:', errors);
  for (const error of Object.values(errors).splice(0, 3))
    toast.error('Erro ao cadastrar: ' + error);
});
</script>
