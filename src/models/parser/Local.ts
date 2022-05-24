import { z } from "zod"
import { idParser, getConnectionParser, getEntityParser } from "./_common"
import { tipoLocalParser } from "./TipoLocal"
import type { TipoLocal } from "./TipoLocal"

// Automatic

export const localParser = getEntityParser(
	z.object({
		id: idParser,
		nome: z.string(),
		sigla: z.string(),
	}),
	z.object({
		relTipo: tipoLocalParser.parser,
	}),
)

// Node Types (Automatic)

export type LocalRaw = z.output<typeof localParser.rawParser>

export type LocalRawList = z.output<typeof localParser.rawListParser>

export type LocalPartial = z.output<typeof localParser.partialParser>

export type LocalPartialList = z.output<typeof localParser.partialListParser>

// Connection Types

export type LocalRawConnectionRaw = z.output<typeof localParser.rawConnectionRawParser>

export type LocalRawConnectionPartial = z.output<typeof localParser.rawConnectionPartialParser>

export type LocalPartialConnectionRaw = z.output<typeof localParser.partialConnectionRawParser>

export type LocalPartialConnectionPartial = z.output<typeof localParser.partialConnectionPartialParser>

export type Local = z.output<typeof localParser.parser>
// export interface Local extends LocalPartial {
// 	refLocaisTipo?: LocalConnectionPartial | undefined
// }

export type LocalConnectionRaw = z.output<typeof localParser.connectionRawParser>

export type LocalConnectionPartial = z.output<typeof localParser.connectionPartialParser>

// Manual
/*
export const localRawParser = z.object({
	id: idParser,
	nome: z.string(),
});

export const localRawListParser = z.array(localRawParser)

export const localPartialParser = localRawParser.partial()

export const localPartialListParser = z.array(localPartialParser)

export const {
	raw: localRawConnectionRawParser,
	partial: localRawConnectionPartialParser,
} = getConnectionParser(localRawParser)

export const {
	raw: localPartialConnectionRawParser,
	partial: localPartialConnectionPartialParser,
} = getConnectionParser(localPartialParser)

export const localParser: z.ZodType<Local> = z.lazy(() => localPartialParser.extend({
	relTipo: z.optional(tipoLocalParser),
}))

export const {
	raw: localConnectionRawParser,
	partial: localConnectionPartialParser,
} = getConnectionParser(localParser)

// Node Types

export type LocalRaw = z.output<typeof localRawParser>

export type LocalRawList = z.output<typeof localRawListParser>

export type LocalPartial = z.output<typeof localPartialParser>

export type LocalPartialList = z.output<typeof localPartialListParser>

// Connection Types

export type LocalRawConnectionRaw = z.output<typeof localRawConnectionRawParser>

export type LocalRawConnectionPartial = z.output<typeof localRawConnectionPartialParser>

export type LocalPartialConnectionRaw = z.output<typeof localPartialConnectionRawParser>

export type LocalPartialConnectionPartial = z.output<typeof localPartialConnectionPartialParser>

export interface Local extends LocalPartial {
	refLocaisTipo?: LocalConnectionPartial | undefined
}

export type LocalConnectionRaw = z.output<typeof localConnectionRawParser>

export type LocalConnectionPartial = z.output<typeof localConnectionPartialParser>
*/
