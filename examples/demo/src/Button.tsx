// Componente de EXEMPLO (não é API reutilizável do pacote — é demonstração de
// como um consumidor, tipo o frontend DDSOFT, monta um componente).
// Estampa: scope do tema (do contexto) + classes de contrato (hasheadas, sem
// prefixo) + utilities via u() (prefixadas conforme o contexto).
import type { JSX } from 'solid-js'
import { useBootswatch, useUtility } from '../../../solid/index.tsx'
import { btn, btnPrimary } from '../../../dist-pkg/themes/bootstrap/contract.js'

export function Button(props: { children: JSX.Element }): JSX.Element {
	const bs = useBootswatch()
	const u = useUtility()
	return (
		<button type="button" class={`${bs.scope} ${btn} ${btnPrimary} ${u('mb-3 me-2')}`}>
			{props.children}
		</button>
	)
}
