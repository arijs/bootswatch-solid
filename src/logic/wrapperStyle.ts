import { createMemo, createSignal } from 'solid-js'
import storageAsync from '@arijs/frontend/client/storage/async/localstore'
import { WrapperBgColor, WrapperStyle, WrapperTextColor } from '../components/common/Wrapper'
import { MenuItem } from '../components/Menu'

const stWrapperStyle     = storageAsync.promise.key('/Z.ns4Dn>u4Os=>')
const stWrapperBgColor   = storageAsync.promise.key('qsn73Z. 074gH+<')
const stWrapperTextColor = storageAsync.promise.key('sv3yD6P4B->g/n7')

export const [wrapperStyle, setWrapperStyle] = createSignal<WrapperStyle>('card-border')
export const [wrapperBgColor, setWrapperBgColor] = createSignal<WrapperBgColor>('primary')
export const [wrapperTextColor, setWrapperTextColor] = createSignal<WrapperTextColor>('default')

stWrapperStyle.get().then(
	(v: any) => null == v || setWrapperStyle(v),
	(e: any) => console.warn(`Error loading saved style from localstorage`, e)
)

stWrapperBgColor.get().then(
	(v: any) => null == v || setWrapperBgColor(v),
	(e: any) => console.warn(`Error loading saved bg color from localstorage`, e)
)

stWrapperTextColor.get().then(
	(v: any) => null == v || setWrapperTextColor(v),
	(e: any) => console.warn(`Error loading saved text color from localstorage`, e)
)

export const wrapperStyleList = createMemo<MenuItem<WrapperStyle>[]>(() => {
	return [
		{
			label: 'Sem quadro',
			value: 'raw',
		},
		{
			label: 'Preenchido',
			value: 'card-fill',
		},
		{
			label: 'Borda',
			value: 'card-border',
		},
	]
})

export const wrapperBgColorList = createMemo<MenuItem<WrapperBgColor>[]>(() => {
	return [
		{
			label: 'Padrão',
			value: 'default',
		},
		{
			label: 'Primário',
			value: 'primary',
		},
		{
			label: 'Secundário',
			value: 'secondary',
		},
		{
			label: 'Sucesso',
			value: 'success',
		},
		{
			label: 'Perigo',
			value: 'danger',
		},
		{
			label: 'Aviso',
			value: 'warning',
		},
		{
			label: 'Informação',
			value: 'info',
		},
		{
			label: 'Claro',
			value: 'light',
		},
		{
			label: 'Escuro',
			value: 'dark',
		},
	]
})

export const wrapperTextColorList = createMemo<MenuItem<WrapperTextColor>[]>(() => {
	return [
		{
			label: 'Padrão',
			value: 'default',
		},
		{
			label: 'Branco',
			value: 'white',
		},
		{
			label: 'Preto',
			value: 'black',
		},
	]
})

export const onClickStyle = (item: MenuItem<WrapperStyle>, ev: Event) => {
	setWrapperStyle(item.value)
	stWrapperStyle.set(item.value).then(
		(v: any) => {},
		(e: any) => console.warn(`Error saving style to localstorage`, e)
	)
}

export const onClickBgColor = (item: MenuItem<WrapperBgColor>, ev: Event) => {
	setWrapperBgColor(item.value)
	stWrapperBgColor.set(item.value).then(
		(v: any) => {},
		(e: any) => console.warn(`Error saving bg color to localstorage`, e)
	)
}

export const onClickTextColor = (item: MenuItem<WrapperTextColor>, ev: Event) => {
	setWrapperTextColor(item.value)
	stWrapperTextColor.set(item.value).then(
		(v: any) => {},
		(e: any) => console.warn(`Error saving text color to localstorage`, e)
	)
}
