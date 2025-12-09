# Plataforma de Gestão Paroquial — Copilot Instructions

## Visão Geral do Projeto

Este é um sistema web para **gestão de casais, perfis e paróquias** em um contexto paroquial/católico, usando **Nuxt 4** (Vue 3), **Tailwind CSS**, **shadcn-vue** e **Zod** para validação. O banco de dados é **MongoDB** acessado via o driver oficial (`mongodb`), sem ORM relacional. O foco é cadastro, edição e gestão de casais, perfis, convites, permissões e papéis em paróquias e arquidioceses.

- Primitivos de UI: `app/components/ui/` (exportados via `index.ts`)
- Componentes de lógica de negócio e formulários: `app/components/form/`
- Tipos compartilhados: `shared/types/`
- Modelos e acesso a dados: `server/models/` e `server/utils/`

## Padrões Arquiteturais

- **Organização de Componentes:**
  - Primitivos de UI (botões, avatar, inputs, etc.) em `app/components/ui/`, exportados via `index.ts`.
  - Formulários e lógica de negócio em `app/components/form/`.
  - Tipos compartilhados em `shared/types/`.
  - Modelos e acesso a dados em `server/models/` e helpers em `server/utils/`.
- **Validação:**
  - Use **Zod** para schemas de validação (ex: `shared/schemas/`).
- **Estilização:**
  - Tailwind CSS em `app/assets/css/tailwind.css` (referenciado em `nuxt.config.ts`).
- **UI Libraries:**
  - shadcn-vue, reka-ui, lucide-vue-next (ícones). Registro e aliases em `components.json`.
- **Banco de Dados:**
  - Use o driver oficial do MongoDB (`mongodb`). Conexão e helpers em `server/utils/`.

## Fluxos de Trabalho do Desenvolvedor

- **Instalar dependências:**
  - `bun install` (ou `npm install`, `pnpm install`, `yarn install`)
- **Servidor de desenvolvimento:**
  - `bun run dev` (ou `npm run dev` etc.)
- **Build para produção:**
  - `bun run build` (ou `npm run build` etc.)
- **Preview da build:**
  - `bun run preview` (ou `npm run preview` etc.)
- **Lint:**
  - ESLint via `@nuxt/eslint` (ver `nuxt.config.ts`).

## Convenções do Projeto

- **Commits:**
  - Sempre escreva as mensagens de commit em **inglês**.
  - Use o padrão **Conventional Commits** com **emoji** no início da mensagem. Exemplo: `✨ feat: add new login page` ou `🐛 fix: correct address validation`.
  - Se os arquivos alterados não pertencerem ao mesmo contexto, **divida as alterações em múltiplos commits** para manter o histórico claro e organizado.
  - Se for necessário escrever 'AND' na mensagem do commit, deve-ser utilizar 2 commits para separar as
    modificações. Exemplo:
    - Commit Original: `✨ feat: add login and registration pages`
    - Commits Corrigidos:
      - `✨ feat: add login page`
      - `✨ feat: add registration page`

- **Importação de Componentes:**
  - Sempre importe primitivos de UI via seus `index.ts` (ex: `import { Button } from '@/components/ui/button'`).
  - **Nunca coloque imports no meio do arquivo.** Todos os imports devem estar sempre no topo do arquivo, antes de qualquer código, declaração ou exportação. Isso vale para componentes, tipos, helpers, etc.
- **TypeScript:**
  - Todos os componentes, modelos e helpers usam TypeScript. Tipos em `shared/types/`.
- **Aliases:**
  - Use aliases Nuxt conforme `components.json` (ex: `@/components`, `@/lib/utils`).
- **Props/Emits:**
  - Use `defineProps`/`defineEmits` e helpers do reka-ui para props e eventos.
- **Validação:**
  - Use Zod para validação de dados e schemas compartilhados.
- **Fluxo de Dados:**
  - Dados fluem dos modelos/server para componentes via props e v-model.
- **Requisições/API:**
  - Use `$fetch` ou `useFetch` do Nuxt para chamadas API. Priorize métodos recomendados para SSR, reatividade e performance.
- **Banco de Dados:**
  - Use o driver oficial do MongoDB (`mongodb`). Não use ORMs SQL.

## Integrações

- **Bibliotecas externas:**
  - shadcn-vue, reka-ui, lucide-vue-next (ícones), @vueuse/core (composables), zod, maska, mongodb.
- **Módulos Nuxt:**
  - Veja `nuxt.config.ts` para módulos habilitados (ex: `@nuxt/eslint`, `@vee-validate/nuxt`, `shadcn-nuxt`).

## Exemplos

- **Uso de UI Primitives:**
  - Veja `app/components/ui/button/Button.vue` e `app/components/ui/avatar/Avatar.vue` para composição de UI.
- **Formulários e validação:**
  - Veja `app/components/form/ProfileFields.vue` e `app/components/form/AddressFields.vue` para formulários complexos e integração com Zod.
- **Modelos e acesso a dados:**
  - Veja `server/models/couple.model.ts` e `server/models/parish.model.ts` para exemplos de acesso a dados usando o driver MongoDB.

## Troubleshooting

- Se `bun run dev` ou `npm run dev` falhar, cheque dependências ou aliases em `components.json` e `nuxt.config.ts`.
- Para problemas de registro de componentes, verifique `components.json` e configuração do shadcn-vue.
- Para erros de conexão com o banco, revise variáveis de ambiente e a configuração do driver MongoDB em `server/utils/mongo-singleton.ts`.

## Referências

- Arquivos-chave: `nuxt.config.ts`, `components.json`, `app/components/ui/`, `app/components/form/`, `shared/types/`, `server/models/`, `server/utils/`
- Para mais, veja README.md e a documentação do Nuxt.
