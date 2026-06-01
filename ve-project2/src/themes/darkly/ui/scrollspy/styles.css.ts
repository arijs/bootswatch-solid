import { globalStyle } from '@vanilla-extract/css'
import { scrollspyExample } from '../../../../theme-contract/ui/scrollspy/contract.css'
import { darklyScope } from '../../scope.css'

globalStyle(`${darklyScope}${scrollspyExample}`, {
	position: "relative",
	height: "200px",
	marginTop: "0.5rem",
	overflow: "auto",
})
