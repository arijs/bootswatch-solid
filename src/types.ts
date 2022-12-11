
export interface OrcamentoRowVendedores {
	NR_ORCAMENTO: number
	NR_ORDSERV: number | null
	DT_EXECUCAO: string | null
	NM_CLIENTE: string
	NM_FANTASIA: string | null
	MN_BAIRRO: string | null
	CD_STATUS: string
	NM_VENDEDOR1: string | null
	NM_VENDEDOR2: string | null
}

export interface OrcamentoPage {
	count: number
	page: OrcamentoRowVendedores[]
}
