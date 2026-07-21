// Driver de release do @arijs/bootswatch-ve.
//
// Roda a pipeline determinística (build 27 temas → pack → confere versão →
// probe de fidelidade → npm pack --dry-run) e, por padrão, PARA antes de
// publicar, imprimindo o comando exato. Com --publish, faz o `npm publish` de
// dentro de package/ (pedirá OTP se a conta tiver 2FA).
//
// Uso:
//   node scripts/release.mjs 0.1.0              # valida tudo, NÃO publica
//   node scripts/release.mjs 0.1.0 --publish    # valida e publica (npm login antes)
//   node scripts/release.mjs 0.1.0 --publish --dry-run  # simula o publish
//   node scripts/release.mjs 0.1.0 --skip-build # pula o build (usa dist-pkg atual)
//
// A versão também pode vir de BSVE_VERSION. O build NÃO depende de rede; só o
// `npm publish` precisa de login no npm.

import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT = process.cwd()
const args = process.argv.slice(2)
const flags = new Set(args.filter((a) => a.startsWith('--')))
const positional = args.filter((a) => !a.startsWith('--'))
const version = positional[0] || process.env.BSVE_VERSION

const DO_PUBLISH = flags.has('--publish')
const DRY_RUN = flags.has('--dry-run')
const SKIP_BUILD = flags.has('--skip-build')

function die(msg) {
	console.error(`\n✖ ${msg}\n`)
	process.exit(1)
}

// Semver básico (X.Y.Z com pré-release opcional, ex.: 0.1.1, 1.0.0-beta.2).
if (!version) die('Informe a versão: node scripts/release.mjs <X.Y.Z> [--publish] [--dry-run]')
if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(version))
	die(`Versão inválida: "${version}" (esperado X.Y.Z, sem o "v").`)

function run(label, cmd, cmdArgs, opts = {}) {
	console.log(`\n▶ ${label}\n  $ ${cmd} ${cmdArgs.join(' ')}`)
	const r = spawnSync(cmd, cmdArgs, { stdio: 'inherit', cwd: ROOT, shell: false, ...opts })
	if (r.status !== 0) die(`Falhou: ${label} (código ${r.status}).`)
}

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

console.log(`\n=== Release @arijs/bootswatch-ve @ ${version} ===`)
console.log(
	DO_PUBLISH
		? DRY_RUN
			? 'modo: publish --dry-run'
			: 'modo: PUBLISH real'
		: 'modo: só validação (não publica)',
)

// 1. Build dos 27 temas (gate: 0 literal --bs-*). Sai !=0 se sobrar literal.
if (!SKIP_BUILD) run('Build do pacote (0 literal em 27 temas)', npm, ['run', 'pkg:build'])
else console.log('\n▶ Build pulado (--skip-build) — usando dist-pkg atual.')

// 2. Monta a raiz publicável em package/ com a versão informada.
run('Monta a raiz publicável (package/)', npm, ['run', 'pkg:pack'], {
	env: { ...process.env, BSVE_VERSION: version },
})

// 3. Confere que package/package.json casa com a versão pedida.
const built = JSON.parse(readFileSync(path.join(ROOT, 'package', 'package.json'), 'utf8'))
if (built.version !== version)
	die(`Versão divergente: package/package.json tem ${built.version}, esperado ${version}.`)
console.log(`\n✔ package/package.json → ${built.name}@${built.version}`)

// 4. Probe de fidelidade do preset (46/46, determinístico).
run('Probe do preset (fidelidade)', npm, ['run', 'pkg:probe'])

// 5. Dimensiona o tarball sem publicar.
run('npm pack --dry-run (dimensiona o tarball)', npm, ['pack', '--dry-run'], {
	cwd: path.join(ROOT, 'package'),
})

// 6. Publica (opcional) ou imprime o próximo passo.
if (DO_PUBLISH) {
	run(
		DRY_RUN ? 'npm publish --dry-run' : 'npm publish (público)',
		npm,
		DRY_RUN ? ['publish', '--dry-run'] : ['publish'],
		{
			cwd: path.join(ROOT, 'package'),
		},
	)
	console.log(
		`\n✔ ${DRY_RUN ? 'Simulação de publish OK.' : `Publicado @arijs/bootswatch-ve@${version}.`}\n`,
	)
} else {
	console.log(`\n${'─'.repeat(64)}`)
	console.log('✔ Tudo validado. NADA foi publicado.')
	console.log('Para publicar de fato (precisa de `npm login` e OTP se tiver 2FA):')
	console.log('    cd package && npm publish')
	console.log('Ou re-rode com --publish:')
	console.log(`    node scripts/release.mjs ${version} --publish`)
	console.log(`${'─'.repeat(64)}\n`)
}
