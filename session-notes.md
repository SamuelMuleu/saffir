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
