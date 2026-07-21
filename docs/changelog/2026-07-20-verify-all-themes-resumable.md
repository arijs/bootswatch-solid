# Verificação VE resumível para todos os temas

## Prompt original

> Meu objetivo é rodar a captura de screenshots (no modo Verificação do Vanila
> Extract) para os 26 temas do bootswatch (tema bootstrap já validado). Mas cada
> tema pode passar de 10 minutos. Me ajude a montar um pequeno plano, algo
> reutilizável futuramente para outra verificação completa. Por exemplo, salvar
> um pequeno json listando qual o último tema e componente testado, para que o
> script possa ser interrompido a qualquer momento e continuado posteriormente
> [...]. Também é preciso salvar um outro arquivo listando os mismatches
> encontrados e seus valores organizados por tema.

## O que foi implementado

Um orquestrador que roda a verificação VE (`--verify-ve-rendering`, ve-project2)
tema a tema, com estado persistido em disco para permitir interromper e continuar.

- `scripts/verify-all-themes.mjs` — driver resumível. Descobre os temas de
  `src/logic/themes.ts`, roda `capture-leaf-screenshots.mjs --theme=<t>
  --verify-ve-rendering --skip-to-route=<anchor>` para cada um (default: todos
  menos `bootstrap`). Resume por **rota (componente)**: retoma um tema
  interrompido a partir da última rota concluída.
- `scripts/capture-leaf-screenshots/workflow.mjs`:
  - Dump JSON **incremental** — reescreve `VERIFY_JSON_OUT` após cada cenário
    verificado, com `complete`, `lastRoute`, `lastState`, contadores e
    mismatches acumulados. Evita parsear stdout.
  - Handler de **SIGINT/SIGTERM**: ao receber o sinal, termina o cenário em voo,
    faz o flush final (`complete:false`) e para graciosamente. Um segundo sinal
    força a saída imediata (exit 130).
- `package.json` — script `verify:themes`.
- `.gitignore` — `/verify-run/`.

### Granularidade do resume (por rota/componente)

O child processa rotas em ordem e `--skip-to-route=<rota>` faz ele começar
naquela rota (`scenario.route >= anchor`). O driver:

- Começa um tema do zero com `--skip-to-route=/**` (glob → primeira rota
  ordenada).
- Retoma um tema interrompido com `--skip-to-route=<lastRoute>`, refazendo
  apenas essa rota (idempotente) e as seguintes. No máximo **uma rota** é
  reverificada por interrupção.
- Um tema só é marcado `complete` quando o child reporta `complete:true`.

Os mismatches são **acumulados entre execuções parciais**: ao retomar em
`anchor`, o driver mantém os mismatches de rotas `< anchor` (verificadas antes)
e substitui as de `>= anchor` pelos resultados frescos — sem perda nem
duplicação.

### Arquivos de estado (em `verify-run/`)

- `progress.json` — `current` e, por tema, `{ complete, lastRoute, stats:
  {ran,matched,mismatched,skipped}, updatedAt }`.
- `mismatches.json` — mismatches agrupados por tema (acumulados entre resumes),
  cada um com `route`, `state`, `diffRatio`, `diffPixels`, `totalPixels`,
  `reason`.
- `logs/<theme>.log` — saída completa do child (append a cada resume, com
  marcador de run + anchor).

## Antes/depois

- **Antes:** rodar `--verify-ve-rendering` por tema manualmente, sem estado
  agregado; interromper perdia todo o rastro; mismatches só no stdout.
- **Depois:** `pnpm verify:themes` roda a fila inteira, retomável, com progresso
  e mismatches persistidos e organizados por tema.

## Uso

```
pnpm verify:themes                      # todos os temas exceto bootstrap
pnpm verify:themes --width=720
pnpm verify:themes --themes=darkly,quartz
pnpm verify:themes --reset              # recomeça do zero
pnpm verify:themes --include-bootstrap
```

## Como foi testado

- `node --check` em `verify-all-themes.mjs` e `workflow.mjs` — sem erros de
  sintaxe.
- Self-check da lógica de merge de mismatches (a parte não-trivial): 3 casos
  (from-scratch substitui tudo; resume mantém `< anchor` e não duplica a
  `anchor`; resume descarta prévias `>= anchor`) — todos passam.
- Self-check da derivação `theme/route/state` a partir do path do artefato.
- `--themes=notatheme` → erro `Unknown theme` antes de qualquer spawn.
- A verificação completa por tema reutiliza o pipeline já validado do
  `capture-leaf-screenshots.mjs` (tema `bootstrap` já passa com `failed=0`).

## Não testado ainda (requer run real de ~10 min/tema)

- Sinal SIGINT/SIGTERM ponta-a-ponta durante um tema real (o handler + flush
  incremental estão implementados; falta o teste manual do usuário deixando um
  tema rodando e apertando Ctrl-C).

## Testes criados/alterados

Nenhum arquivo de teste automatizado dedicado — o comportamento não-trivial
(merge de mismatches, parse de path) foi coberto por self-checks manuais; o
resto é orquestração sobre um pipeline já testado.
