import { z } from "zod"
import { idParser, getConnectionParser, getEntityParser } from "./_common"
import { localParser } from "./Local"
import type { LocalConnectionPartial } from "./Local"

// Manual
/*
export const tipoLocalRawParser = z.object({
	id: idParser,
	nome: z.string(),
});

export const tipoLocalRawListParser = z.array(tipoLocalRawParser)

export const tipoLocalPartialParser = tipoLocalRawParser.partial()

export const tipoLocalPartialListParser = z.array(tipoLocalPartialParser)

export const {
	raw: tipoLocalRawConnectionRawParser,
	partial: tipoLocalRawConnectionPartialParser,
} = getConnectionParser(tipoLocalRawParser)

export const {
	raw: tipoLocalPartialConnectionRawParser,
	partial: tipoLocalPartialConnectionPartialParser,
} = getConnectionParser(tipoLocalPartialParser)

export const tipoLocalParser: z.ZodType<TipoLocal> = z.lazy(() => tipoLocalPartialParser.extend({
	refLocaisTipo: z.optional(localConnectionPartialParser),
}))

export const {
	raw: tipoLocalConnectionRawParser,
	partial: tipoLocalConnectionPartialParser,
} = getConnectionParser(tipoLocalParser)
*/

// Automatic
export const tipoLocalParser = getEntityParser(
	z.object({
		id: idParser,
		nome: z.string(),
	}),
	z.object({
		refLocaisTipo: localParser.connectionPartialParser,
	}),
)

// Node Types (Automatic)

export type TipoLocalRaw = z.output<typeof tipoLocalParser.rawParser>

export type TipoLocalRawList = z.output<typeof tipoLocalParser.rawListParser>

export type TipoLocalPartial = z.output<typeof tipoLocalParser.partialParser>

export type TipoLocalPartialList = z.output<typeof tipoLocalParser.partialListParser>

// Connection Types

export type TipoLocalRawConnectionRaw = z.output<typeof tipoLocalParser.rawConnectionRawParser>

export type TipoLocalRawConnectionPartial = z.output<typeof tipoLocalParser.rawConnectionPartialParser>

export type TipoLocalPartialConnectionRaw = z.output<typeof tipoLocalParser.partialConnectionRawParser>

export type TipoLocalPartialConnectionPartial = z.output<typeof tipoLocalParser.partialConnectionPartialParser>

export type TipoLocal = z.output<typeof tipoLocalParser.parser>
// export interface TipoLocal extends TipoLocalPartial {
// 	refLocaisTipo?: LocalConnectionPartial | undefined
// }

export type TipoLocalConnectionRaw = z.output<typeof tipoLocalParser.connectionRawParser>

export type TipoLocalConnectionPartial = z.output<typeof tipoLocalParser.connectionPartialParser>

// Node Types (Manual)
/*
export type TipoLocalRaw = z.output<typeof tipoLocalRawParser>

export type TipoLocalRawList = z.output<typeof tipoLocalRawListParser>

export type TipoLocalPartial = z.output<typeof tipoLocalPartialParser>

export type TipoLocalPartialList = z.output<typeof tipoLocalPartialListParser>

// Connection Types

export type TipoLocalRawConnectionRaw = z.output<typeof tipoLocalRawConnectionRawParser>

export type TipoLocalRawConnectionPartial = z.output<typeof tipoLocalRawConnectionPartialParser>

export type TipoLocalPartialConnectionRaw = z.output<typeof tipoLocalPartialConnectionRawParser>

export type TipoLocalPartialConnectionPartial = z.output<typeof tipoLocalPartialConnectionPartialParser>

export interface TipoLocal extends TipoLocalPartial {
	refLocaisTipo?: LocalConnectionPartial | undefined
}

export type TipoLocalConnectionRaw = z.output<typeof tipoLocalConnectionRawParser>

export type TipoLocalConnectionPartial = z.output<typeof tipoLocalConnectionPartialParser>
*/
// ======================================
