<template>
  <section
    class="mx-auto h-screen flex items-center justify-center py-12 bg-base-100"
  >
    <form
      class="max-w-3xl w-full"
      @submit.prevent="onSubmit"
    >
      <Card>
        <CardHeader>
          <CardTitle> Login </CardTitle>
        </CardHeader>

        <CardContent class="w-full">
          <FormField
            v-slot="{ componentField }"
            name="email"
          >
            <FormItem>
              <FormLabel> E-mail </FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField
            v-slot="{ componentField }"
            name="password"
          >
            <FormItem>
              <FormLabel> Senha </FormLabel>
              <FormControl>
                <Input
                  type="placeholder"
                  placeholder="********"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>
        </CardContent>

        <CardFooter class="flex justify-end">
          <Button
            type="submit"
            :disabled="isSubmitting"
          >
            <span> Login </span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  </section>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { toast } from 'vue-sonner';
import { loginSchema } from '~~/shared/schemas/login.schema';
import type { User } from '~~/shared/schemas/models/user.schema';

const title = 'Login';

definePageMeta({
  title,
  auth: false,
  layout: 'no-sidebar',
});

const { loggedIn, fetch: refreshSession, clear } = useUserSession();

await clear();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const { user } = await $fetch<{ user: User }>('/api/auth/login', {
      method: 'POST',
      body: values,
    });
    await refreshSession();
    if (loggedIn && user._id) {
      await navigateTo('/profile');
    }
  }
  catch (error) {
    console.error(error);
    toast.error('Erro ao realizar login, tente novamente mais tarde');
  }
});
</script>
