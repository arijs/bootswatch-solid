// Runtime SolidJS mínimo do @arijs/bootswatch-ve (Fase 4).
// NÃO são componentes de UI — é só o elo entre o consumidor e o pacote:
//  - o scope do tema ativo (classe hasheada do VE);
//  - o prefixo (opcional) das utilities do preset UnoCSS.
// Os componentes (de exemplo, e os do DDSOFT) leem isto do contexto para
// ficarem agnósticos a tema/prefixo. A montagem de classes de UTILITY passa
// por `u(...)`; as classes de COMPONENTE vêm dos contracts (hasheadas, sem
// prefixo) e são aplicadas direto.

import { createContext, useContext, type JSX } from 'solid-js'
import { prefixClasses } from './prefix.mjs'

export { prefixClasses }

export interface BootswatchConfig {
	/** Classe de scope do tema ativo (ex.: o export `bootstrapScope`). */
	scope: string
	/** Prefixo das utilities do preset (ex.: '' ou 'bsu-'). SÓ utilities. */
	utilityPrefix: string
}

const BootswatchContext = createContext<BootswatchConfig>({ scope: '', utilityPrefix: '' })

export function BootswatchProvider(props: { scope: string; utilityPrefix?: string; children: JSX.Element }): JSX.Element {
	const value: BootswatchConfig = {
		scope: props.scope,
		utilityPrefix: props.utilityPrefix ?? '',
	}
	// Solid 2.0: o próprio context é o provider (sem .Provider).
	return (
		<BootswatchContext value={value}>
			{props.children}
		</BootswatchContext>
	)
}

export function useBootswatch(): BootswatchConfig {
	return useContext(BootswatchContext)
}

/**
 * Hook: devolve `u(...)`, que prefixa utilities com o prefixo do contexto.
 * Uso: `const u = useUtility(); <div class={u('d-flex', cond && 'mb-3')} />`.
 */
export function useUtility(): (...classes: Array<string | false | null | undefined>) => string {
	const ctx = useBootswatch()
	return (...classes) => prefixClasses(ctx.utilityPrefix, classes)
}
