import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [tailwindcss()],
  },

  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
    checker: {
      lintOnStart: true,
      fix: true,
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui',
  },
})
