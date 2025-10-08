<template>
  <div class="flex flex-row flex-wrap gap-2">
    <FormField
      v-slot="{ componentField }"
      :name="`${prefix}.id`"
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
      :name="`${prefix}.name`"
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
      :name="`${prefix}.birthDate`"
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
      :name="`${prefix}.gender`"
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
      :prefix="props.prefix"
      @set-values="(address) => props.useForm.setValues({
        [props.prefix]: {
          address,
        },
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
      :name="`${prefix}.phone`"
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
      :name="`${prefix}.email`"
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
      :name="`${prefix}.instagram`"
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
      :name="`${prefix}.facebook`"
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
      :name="`${prefix}.photo`"
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
      :name="`${prefix}.password`"
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
      :name="`${prefix}.confirmPassword`"
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
  </div>
</template>

<script lang='ts' setup>
type UseForm = ReturnType<typeof useForm>;
const props = defineProps<{
  useForm: UseForm;
  prefix: string;
}>();
</script>
