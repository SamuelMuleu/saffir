## Última sessão — 21 de Setembro de 2026
**Contexto:** SEO para ranquear no Google para "joalheria" e "joalheria Campos dos Goytacazes".
**Feito:**
- `index.html`: meta description e OG/Twitter tags reforçadas com "joalheria"; adicionado `<link rel="canonical">`; JSON-LD `JewelryStore` enriquecido (`url`, `description`, `priceRange`, `areaServed`, `@id`); `meta name="keywords"`, `robots`, `geo.region`/`geo.placename`.
- `public/robots.txt`: adicionada linha `Sitemap:`.
- `public/sitemap.xml` (novo): home + 5 páginas de coleção.
- `src/hooks/useDocumentMeta.ts` (novo): hook que define `<title>`/meta description por rota (sem SSR, mas dá título único a cada `CategoryPage`).
- `src/pages/CategoryPage.tsx`: usa `useDocumentMeta` com título/descrição por coleção.
- `src/components/Hero.tsx`: eyebrow "Joalheria em Campos dos Goytacazes" acima do H1 (reaproveitando classe `.eyebrow-rating`, que estava sem uso).
- `src/components/About.tsx`: "atelier de joias" → "joalheria" no primeiro parágrafo.
- `pnpm build` e `pnpm lint` rodados sem erros; confirmado que `sitemap.xml`/`robots.txt` vão para `dist/`.
**Decisões:**
- URLs absolutas (canonical, OG, sitemap, JSON-LD) usam placeholder `https://www.saffirjoias.com.br` — domínio final ainda não definido pelo usuário. Todas marcadas com comentário `TODO(dominio)` para find-and-replace depois.
- Não implementado SSR/prerender (mudança de arquitetura maior que o pedido) nem geo coordinates no JSON-LD (sem dado confiável disponível).
- Reforço de "joalheria" no conteúdo visível feito com o mínimo de mudança visual possível (reuso de classe CSS já existente).
**Pendências:**
- Definir domínio final e substituir todas as ocorrências de `https://www.saffirjoias.com.br` (index.html, robots.txt, sitemap.xml).
- Reivindicar/otimizar o perfil da empresa no Google (Google Business Profile) — é o fator com mais peso para aparecer no "pacote local" do Google para buscas como "joalheria Campos dos Goytacazes"; isso fica fora do código do site.
- Considerar registrar o site no Google Search Console e submeter o `sitemap.xml` assim que o domínio estiver no ar.
**Próximos passos:**
- Assim que o domínio for escolhido: atualizar as URLs e fazer o deploy; depois enviar o site ao Search Console.

## Última sessão — 02 de Setembro de 2026
**Contexto:** Logo, carrossel de galeria + aviso de cookies, e auditoria de conformidade com CLAUDE.md.
**Feito:**
- Logo Saffir aplicada no Header e Footer (`src/assets/saffir-logo.png`, fundo removido via chroma-key para ficar transparente).
- Carrossel de galeria (`Carousel.tsx`) abaixo do Header, com placeholders SVG (Anéis, Alianças, Colares, Brincos, Relógios) — autoplay, setas, dots.
- Banner de aviso de cookies (`CookieConsent.tsx`), persistido em `localStorage`.
- Fix de CSS: `.btn` sem reset de `background`/`font-family` fazia `<button>` (ex.: "Recusar") renderizar com fundo branco ilegível.
- Auditoria de conformidade com CLAUDE.md: removida referência quebrada `@RTK.md` (arquivo nunca existiu em nenhum projeto), removida pasta duplicada `sistema-novo/` (já existe em `~/Downloads/sistema-novo/`, era cópia perdida), removido `saffir_backup.html` (HTML estático pré-migração, não usado), renomeado `package.json` de `"temp-app"` para `"saffir"`.
**Decisões:**
- CSS Modules / Vanilla CSS mantido para garantir flexibilidade e visual premium original.
- React hooks (`useState`) utilizados para o menu e o carrossel.
- Mantido no diretório atual a pedido do usuário (ao invés de C:\Mod\Scripts\).
- Imagens do carrossel são placeholders ilustrativos (sem fotos reais de joias disponíveis) até o usuário fornecer fotos do catálogo.
**Pendências:**
- Adicionar as fotos reais das coleções no grid (`Collections.tsx`).
- Trocar os placeholders SVG do carrossel por fotos reais das peças quando fornecidas.
**Próximos passos:**
- Subir as fotos do catálogo na pasta de assets assim que fornecidas e atualizar `Collections.tsx` e `Carousel.tsx`.
