# Diretivas Globais — Antigravity

## 🔁 Protocolo de sessão

### Início de sessão
- Sempre verifique se existe `session-notes.md` na raiz do projeto
- Se existir, leia antes de qualquer coisa e continue de onde parou
- Confirme: "Li as notas da sessão anterior. Estamos em [contexto resumido]."

### Fim de sessão
- Ao finalizar ou quando solicitado, atualize `session-notes.md` com:
  - Decisões técnicas tomadas
  - O que foi implementado / alterado
  - Problemas em aberto
  - Próximos passos recomendados
- Formato padrão do arquivo:

```md
## Última sessão — [data]
**Contexto:** [resumo em 1 linha]
**Feito:** [lista curta]
**Decisões:** [decisões técnicas relevantes]
**Pendências:** [o que ficou para resolver]
**Próximos passos:** [ações concretas]
```

---

## 📁 Contexto de arquivos

- Leia apenas arquivos relevantes para a tarefa atual — não analise o projeto inteiro
- Prefira leitura incremental: só expanda para outros arquivos se necessário
- Nunca leia arquivos em: `node_modules/`, `.git/`, `dist/`, `build/`, `.next/`, `*.log`

---

## ✅ Regras gerais

- Diretório padrão de projetos: **C:\Mod\Scripts\** — sempre criar/salvar novos projetos, scripts e apps dentro dessa pasta (em uma subpasta com nome do projeto), nunca em `Documents` ou outro local, salvo instrução contrária
- Package manager padrão: **pnpm** (nunca npm ou yarn, salvo instrução contrária)
- Nunca editar arquivos gerados automaticamente
- Antes de refatorar, confirmar escopo com o usuário
- Manter CLAUDE.md do projeto com menos de 200 linhas
- Copiar `.env.example` → `.env` antes de rodar. Nunca commitar `.env`

---

## 🔐 Segredos

- NUNCA aceitar ou pedir tokens/senhas colados no chat — os transcripts ficam salvos em disco em texto puro
- Segredos entram via `.env` do projeto ou `~/.claude/deploy-secrets.env`; referenciar o arquivo, nunca o valor
- Se o usuário colar uma credencial no chat, avisar na hora e sugerir rotação

---

## 🪟 Ambiente Windows (lições recorrentes)

- PowerShell 5.1: sem `&&`; scripts Python sempre com UTF-8 explícito (`encoding="utf-8"` / `PYTHONIOENCODING=utf-8`) — cp1252 quebra acentos
- `gh` e `jq` não existem no Git Bash — usar API REST do GitHub e PowerShell/Node para JSON
- Rede corporativa Fortinet intercepta SSL: chamadas diretas a APIs externas (ex.: Coolify) falham com `curl exit 60` → preferir GitHub Actions como executor de deploy
- Antes de subir dev server: conferir se a porta está livre (`node.exe` zumbi é comum) e se o Docker Desktop está rodando

---

## 🔁 Fluxo de trabalho

- Validar LOCAL primeiro; deploy só quando o usuário pedir explicitamente
- Ao entregar feature: deixar o app rodando e informar URL + credenciais de acesso
- Em roadmaps por fases: quando a verificação da fase passar, seguir para a próxima automaticamente — não perguntar "posso continuar?"
- Refactors não mudam visual nem regras de negócio; se for inevitável, avisar antes

---

## 🎨 Design

- Preferência: visual premium/grife, "sem cara de IA" — usar as skills frontend-design/impeccable em trabalho de UI

---

## 🧠 Auto Memory

- Use auto memory para registrar padrões recorrentes, comandos de build e decisões de arquitetura por projeto
- Não registre preferências pessoais genéricas — essas ficam aqui neste arquivo global

---

## 🚫 .claudeignore (lembrete)

Todo projeto deve ter `.claudeignore` excluindo:
```
node_modules/
dist/
build/
.next/
*.log
*.lock
coverage/
.git/
```