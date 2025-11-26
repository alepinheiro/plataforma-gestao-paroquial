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
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],

  // build: {
  //   transpile: ['~/prisma/client'],
  // },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'vercel',
    // externals: {
    //   external: ['@prisma/client', 'prisma'],
    // },
    experimental: {
      wasm: false,
    },
    // esbuild: {
    //   options: {
    //     target: 'es2020',
    //   },
    // },
  },

  vite: {
    plugins: [tailwindcss()],
    // optimizeDeps: { exclude: ['@prisma/client'] },
    // resolve: {
    //   mainFields: ['browser', 'module', 'main'],
    //   alias: {
    //     '.prisma/client/index-browser':
    //       './node_modules/.prisma/client/index-browser.js',
    //   },
    // },
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
