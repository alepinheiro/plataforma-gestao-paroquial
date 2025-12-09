import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@nuxt/icon',
    'nuxt-auth-utils',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      appName: 'Plataforma de Gestão Paroquial',
    },
  },

  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'vercel',

    experimental: {
      wasm: false,
    },

    replace: {
      'import * as process': 'import * as processUnused',
    },
  },

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
});
