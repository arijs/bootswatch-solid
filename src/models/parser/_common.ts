import { z } from "zod"

export const idParser = z.union([z.string(), z.number()]).transform(x => String(x))

export type Id = z.output<typeof idParser>

export function getConnectionParser<T extends z.ZodTypeAny>(schema: T) {
	const raw = z.object({
		totalCount: z.number(),
		nodes: schema,
	})
	const partial = raw.partial()
	return { raw, partial }
}

export function getEntityParser<
	RawParser extends z.ZodTypeAny,
	RefsParser extends z.ZodTypeAny,
>(
	rawParser: RawParser,
	refsParser: RefsParser,
) {

	type RawNode = z.output<RawParser>
	type RefsNode = z.output<RefsParser>
	type Node = RawNode & RefsNode
	type PartialRawNode = Partial<RawNode>
	type PartialNode = Partial<Node>
	type PartialRawParser = z.ZodType<PartialRawNode>
	type PartialRawListParser = z.ZodType<PartialRawNode[]>
	type PartialParser = z.ZodType<PartialNode>

	// const tipoLocalRawParser = z.object({
	// 	id: idParser,
	// 	nome: z.string(),
	// });

	const rawListParser = z.array(rawParser)

	const partialParser: PartialRawParser = rawParser.partial()

	const partialListParser: PartialRawListParser = z.array(partialParser)

	const {
		raw: rawConnectionRawParser,
		partial: rawConnectionPartialParser,
	} = getConnectionParser(rawParser)

	const {
		raw: partialConnectionRawParser,
		partial: partialConnectionPartialParser,
	} = getConnectionParser(partialParser)

	const parser: PartialParser = z.lazy(() => partialParser.merge(refsParser.partial()))

	const {
		raw: connectionRawParser,
		partial: connectionPartialParser,
	} = getConnectionParser(parser)

	return {
		rawParser,
		rawListParser,
		partialParser,
		partialListParser,
		rawConnectionRawParser,
		rawConnectionPartialParser,
		partialConnectionRawParser,
		partialConnectionPartialParser,
		parser,
		connectionRawParser,
		connectionPartialParser,
	}
}
