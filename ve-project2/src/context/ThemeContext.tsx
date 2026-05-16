import { createContext } from 'solid-js'
export type { Ve2StyleFamily } from '../themes/runtime/style-families'
export { useVe2RequiredStyleFamilies } from '../themes/runtime/style-loader-context'

// Shared ThemeContext — propagates the active scope class (hashed VE identifier)
// down to every component so each element can stamp it onto itself alongside
// contract classes without prop-drilling.
export const ThemeContext = createContext<string>('')
