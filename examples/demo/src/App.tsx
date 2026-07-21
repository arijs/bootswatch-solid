import type { JSX } from 'solid-js'
import { BootswatchProvider } from '../../../solid/index.tsx'
import { bootstrapScope } from '../../../dist-pkg/themes/bootstrap/contract.js'

// CSS pré-compilado do pacote (side-effect): scope (vars base do tema),
// vars públicas (paleta), global e a família buttons. Só o que a demo usa.
import '../../../dist-pkg/themes/bootstrap/scope.css.ts.css'
import '../../../dist-pkg/themes/bootstrap/public-vars.css'
import '../../../dist-pkg/themes/bootstrap/global.css'
import '../../../dist-pkg/themes/bootstrap/buttons.css'

import { Button } from './Button'

export function App(): JSX.Element {
	return (
		<BootswatchProvider scope={bootstrapScope} utilityPrefix="bsu-">
			<div class={bootstrapScope}>
				<Button>Salvar</Button>
				<Button>Cancelar</Button>
			</div>
		</BootswatchProvider>
	)
}
