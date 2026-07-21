// Runtime SolidJS mínimo do @arijs/bootswatch-ve (Fase 4).
// NÃO são componentes de UI — é só o elo REATIVO entre o consumidor e o pacote:
//  - o scope do tema ATIVO (classe hasheada do VE), reativo à troca de tema;
//  - o prefixo (opcional) das utilities do preset UnoCSS, também reativo.
// Os componentes (de exemplo, e os do DDSOFT) leem isto do contexto para ficarem
// agnósticos a tema/prefixo. Modelo element-owned: TODO elemento estilizado
// carrega o scope + os contracts (classes hasheadas). Monte classes de COMPONENTE
// com `cx(...)` (scope + contracts) e de UTILITY com `u(...)` (prefixo). O provider
// NÃO carrega o CSS do tema nem persiste a escolha — isso é do app (specifiers de
// import/persistência variam por bundler); ele só distribui o `scope` reativo.

import { createComponent, createContext, useContext, type Accessor, type JSX } from 'solid-js'
import { prefixClasses } from './prefix.mjs'

export { prefixClasses }

type ClassArg = string | false | null | undefined

export interface Bootswatch {
	/** Scope hasheado do tema ativo — REATIVO (accessor). Vazio até o tema resolver. */
	scope: Accessor<string>
	/** Prefixo das utilities do preset (ex.: "" ou "bsu-") — REATIVO (accessor). */
	utilityPrefix: Accessor<string>
	/**
	 * Monta classes de COMPONENTE: prefixa o scope do tema ativo aos contracts.
	 * Reativo à troca de tema. Ex.: `cx(btn, btnPrimary)` → "<scope> b… b…".
	 */
	cx: (...classes: ClassArg[]) => string
	/**
	 * Monta classes de UTILITY com o prefixo do contexto.
	 * Ex.: `u('d-flex', cond && 'mb-3')` → "bsu-d-flex bsu-mb-3".
	 */
	u: (...classes: ClassArg[]) => string
}

const EMPTY: Bootswatch = {
	scope: () => '',
	utilityPrefix: () => '',
	cx: (...classes) => classes.filter(Boolean).join(' '),
	u: (...classes) => prefixClasses('', classes),
}

const BootswatchContext = createContext<Bootswatch>(EMPTY)

/**
 * Provider do design system. Aceita `scope`/`utilityPrefix` como valor fixo OU
 * como accessor reativo (o caso da troca de tema em runtime). Distribui um
 * contexto reativo com `scope`/`utilityPrefix` (accessors) e os helpers `cx`/`u`.
 */
export function BootswatchProvider(props: {
	scope: string | Accessor<string>
	utilityPrefix?: string | Accessor<string>
	children: JSX.Element
}): JSX.Element {
	// Normaliza para accessor SEM perder reatividade: se vier função, é o accessor;
	// se vier valor, lê `props.*` a cada chamada (props do Solid já são reativas),
	// então uma string que mude também propaga.
	const scope: Accessor<string> =
		typeof props.scope === 'function' ? (props.scope as Accessor<string>) : () => props.scope as string
	const utilityPrefix: Accessor<string> =
		typeof props.utilityPrefix === 'function'
			? (props.utilityPrefix as Accessor<string>)
			: () => (props.utilityPrefix as string | undefined) ?? ''

	const value: Bootswatch = {
		scope,
		utilityPrefix,
		cx: (...classes) => {
			const s = scope()
			const rest = classes.filter(Boolean) as string[]
			return s ? [s, ...rest].join(' ') : rest.join(' ')
		},
		u: (...classes) => prefixClasses(utilityPrefix(), classes),
	}

	// Sem JSX de propósito: assim o pacote compila para JS executável em qualquer
	// consumidor (não depende do transform JSX do Solid no build do pacote).
	// Solid 2.0: o próprio context é o provider (sem `.Provider`); mantemos o
	// fallback p/ 1.x por robustez.
	const Provider = (BootswatchContext as unknown as { Provider?: unknown }).Provider ?? BootswatchContext
	return createComponent(Provider as Parameters<typeof createComponent>[0], {
		value,
		get children() {
			return props.children
		},
	}) as JSX.Element
}

/** Contexto reativo completo: `{ scope, utilityPrefix, cx, u }`. */
export function useBootswatch(): Bootswatch {
	return useContext(BootswatchContext)
}

/** Só o scope reativo do tema ativo. */
export function useScope(): Accessor<string> {
	return useBootswatch().scope
}

/** `cx(...)` — classes de componente: scope + contracts (reativo). */
export function useCx(): (...classes: ClassArg[]) => string {
	return useBootswatch().cx
}

/** `u(...)` — utilities com o prefixo do contexto. */
export function useUtility(): (...classes: ClassArg[]) => string {
	return useBootswatch().u
}
