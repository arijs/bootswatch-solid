# Workflows do GitHub Actions (F5)

Estes dois arquivos são os workflows do pacote `@arijs/bootswatch-ve`. Eles
estão aqui (e não em `.github/workflows/`) porque o token do agente não tem o
escopo `workflow` p/ escrever naquele diretório.

**Para ativar:** mova os dois `.yml` para `.github/workflows/` e faça commit:

    mkdir -p .github/workflows
    git mv docs/github-workflows/ci.yml docs/github-workflows/publish.yml .github/workflows/
    git commit -m "ci: ativa workflows do pacote"

- `ci.yml` — gates determinísticos em push/PR na `main`.
- `publish.yml` — `npm publish` ao publicar um Release `vX.Y.Z` (requer o
  secret `NPM_TOKEN`).

Detalhes no `docs/packaging-plan.md` (F5).
