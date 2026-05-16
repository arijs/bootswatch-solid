import { createContext, createRenderEffect, useContext } from 'solid-js'
import type { Ve2StyleFamily } from './style-families'

export interface Ve2StyleLoaderApi {
	requestFamilies: (families: readonly Ve2StyleFamily[]) => Promise<void>
}

export const Ve2StyleLoaderContext = createContext<Ve2StyleLoaderApi | null>(null)

export function useVe2StyleLoaderApi(): Ve2StyleLoaderApi | null {
	return useContext(Ve2StyleLoaderContext)
}

export function useVe2RequiredStyleFamilies(families: readonly Ve2StyleFamily[]): void {
	const styleLoaderApi = useVe2StyleLoaderApi()

	createRenderEffect(() => {
		if (!styleLoaderApi || families.length === 0) return
		void styleLoaderApi.requestFamilies(families)
	})
}
