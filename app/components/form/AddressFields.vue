<template>
  <div class="flex gap-2 flex-wrap items-start">
    <FormTitleTemplate
      description="Insira seu endereço residencial"
      title="Endereço"
      class="w-full"
    />

    <Separator class="w-full" />

    <FormField
      v-slot="{ componentField }"
      name="address.postalCode"
    >
      <FormItem class="w-full md:w-1/4 grow">
        <FormLabel> CEP </FormLabel>
        <FormControl>
          <div class="relative">
            <Input
              v-maska="'#####-###'"
              placeholder="00000-000"
              v-bind="componentField"
              @blur="onPostalCodeBlur(componentField.modelValue)"
            />
            <div
              v-if="loading"
              class="absolute inset-y-0 right-2 flex"
            >
              <Icon
                name="eos-icons:loading"
                width="24"
                height="24"
                class="my-auto"
              />
            </div>
          </div>
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.street"
    >
      <FormItem class="w-full md:w-1/2 grow">
        <FormLabel> Endereço </FormLabel>
        <FormControl>
          <Input
            placeholder="Digite o endereço"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.number"
    >
      <FormItem class="w-full md:w-1/5 grow">
        <FormLabel> Número </FormLabel>
        <FormControl>
          <Input
            placeholder="Número"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.complement"
    >
      <FormItem class="w-full md:w-1/3 grow">
        <FormLabel> Complemento </FormLabel>
        <FormControl>
          <Input
            placeholder="Complemento"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.neighborhood"
    >
      <FormItem class="w-full md:w-1/4 grow">
        <FormLabel> Bairro </FormLabel>
        <FormControl>
          <Input
            placeholder="Bairro"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.city"
    >
      <FormItem class="w-full md:w-1/4 grow">
        <FormLabel> Cidade </FormLabel>
        <FormControl>
          <Input
            placeholder="Cidade"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.state"
    >
      <FormItem class="w-full md:w-1/2 grow">
        <FormLabel> Estado </FormLabel>
        <Select
          v-bind="componentField"
        >
          <FormControl>
            <SelectTrigger class="w-full ">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="item of statesOptions"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField
      v-slot="{ componentField }"
      name="address.country"
    >
      <FormItem class="w-full md:w-1/4 grow">
        <FormLabel> País </FormLabel>
        <FormControl>
          <Input
            placeholder="País"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    </FormField>
  </div>
</template>

<script lang='ts' setup>
import { vMaska } from 'maska/vue';
import type { AddressSchema } from '~~/shared/types/address/index';
import type { ViaCepResponse } from '~~/shared/types/viaCepResponse';

const statesOptions = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Tocantins', value: 'TO' },
];

const emit = defineEmits({
  setValues: (data: Partial<AddressSchema>) => data,
});

const loading = ref<boolean>(false);

const onPostalCodeBlur = async (value: string) => {
  try {
    const cep = value.replace(/\D/g, '');
    if (cep.length < 8) return;
    loading.value = true;
    const response = await $fetch<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
    emit('setValues', {
      city: response.localidade,
      complement: undefined,
      country: 'Brasil',
      neighborhood: response.bairro,
      number: undefined,
      postalCode: response.cep,
      state: response.uf,
      street: response.logradouro,
    });
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
};
</script>
