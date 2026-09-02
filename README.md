# Saffir Joias

Landing page da Saffir Joias — atelier de joias no Shopping Pelinca Square Center, Campos dos Goytacazes (RJ).

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build e dev server)
- CSS puro (sem framework), tokens de tema em `src/index.css`
- [oxlint](https://oxc.rs/) para lint

## Rodando localmente

```bash
pnpm install
pnpm dev
```

## Scripts

| Comando        | O que faz                          |
|-----------------|-------------------------------------|
| `pnpm dev`      | Sobe o servidor de desenvolvimento  |
| `pnpm build`    | Type-check (`tsc -b`) + build de produção em `dist/` |
| `pnpm lint`     | Roda o oxlint                       |
| `pnpm preview`  | Serve o build de produção localmente |

## Estrutura

```
src/
  components/   Header, Hero, Carousel, About, Collections, Reviews, Location, Footer, ...
  hooks/        useScrollReveal (animações de entrada ao rolar a página)
  assets/       logo e imagens
```

## Deploy

O projeto é 100% estático (sem backend, sem variáveis de ambiente) — build com `pnpm build` e sirva a pasta `dist/`. Já está configurado para deploy direto no [Vercel](https://vercel.com) a partir do repositório GitHub.
