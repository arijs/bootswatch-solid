// Runtime SolidJS mínimo do @arijs/bootswatch-ve.
// NÃO são componentes de UI — é só o elo REATIVO entre o consumidor e o pacote:
// o scope do tema ATIVO (classe hasheada do VE), reativo à troca de tema.
// Modelo element-owned: TODO elemento estilizado carrega o scope + as classes de
// contract (hasheadas), importadas por família (ex.: `import { btn } from
// '@arijs/bootswatch-ve/buttons'`). Monte tudo com `cx(scope-aware)`. O provider
// NÃO carrega o CSS do tema nem persiste a escolha — isso é do app.

import { createComponent, createContext, useContext, type Accessor, type JSX } from 'solid-js'

type ClassArg = string | false | null | undefined

export interface Bootswatch {
	/** Scope hasheado do tema ativo — REATIVO (accessor). Vazio até o tema resolver. */
	scope: Accessor<string>
	/**
	 * Monta a lista de classes: prefixa o scope do tema ativo às classes de
	 * contract. Reativo à troca de tema. Ex.: `cx(btn, btnPrimary, mb3)` →
	 * "<scope> b… b… b…". Utilities e componentes passam pelo mesmo caminho.
	 */
	cx: (...classes: ClassArg[]) => string
}

const EMPTY: Bootswatch = {
	scope: () => '',
	cx: (...classes) => classes.filter(Boolean).join(' '),
}

const BootswatchContext = createContext<Bootswatch>(EMPTY)

/**
 * Provider do design system. Aceita `scope` como valor fixo OU accessor reativo
 * (o caso da troca de tema em runtime). Distribui um contexto reativo com `scope`
 * (accessor) e o helper `cx`.
 */
export function BootswatchProvider(props: {
	scope: string | Accessor<string>
	children: JSX.Element
}): JSX.Element {
	// Normaliza para accessor SEM perder reatividade: se vier função, é o accessor;
	// se vier valor, lê `props.scope` a cada chamada (props do Solid são reativas).
	const scope: Accessor<string> =
		typeof props.scope === 'function' ? (props.scope as Accessor<string>) : () => props.scope as string

	const value: Bootswatch = {
		scope,
		cx: (...classes) => {
			const s = scope()
			const rest = classes.filter(Boolean) as string[]
			return s ? [s, ...rest].join(' ') : rest.join(' ')
		},
	}

	// Sem JSX de propósito: o pacote compila para JS executável em qualquer
	// consumidor (não depende do transform JSX do Solid no build do pacote).
	// Solid 2.0: o próprio context é o provider; fallback p/ 1.x por robustez.
	const Provider = (BootswatchContext as unknown as { Provider?: unknown }).Provider ?? BootswatchContext
	return createComponent(Provider as Parameters<typeof createComponent>[0], {
		value,
		get children() {
			return props.children
		},
	}) as JSX.Element
}

/** Contexto reativo: `{ scope, cx }`. */
export function useBootswatch(): Bootswatch {
	return useContext(BootswatchContext)
}

/** Só o scope reativo do tema ativo. */
export function useScope(): Accessor<string> {
	return useBootswatch().scope
}

/** `cx(...)` — scope do tema ativo + classes de contract (reativo). */
export function useCx(): (...classes: ClassArg[]) => string {
	return useBootswatch().cx
}
