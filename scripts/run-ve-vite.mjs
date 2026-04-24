import path from 'node:path'
import process from 'node:process'

import { build, createServer, preview } from 'vite'

const mode = process.argv[2]
const root = path.resolve(process.cwd(), 've-project')
const configFile = path.resolve(root, 'vite.config.ts')

if (mode !== 'build' && mode !== 'preview' && mode !== 'dev') {
	throw new Error('Usage: node scripts/run-ve-vite.mjs <build|preview|dev>')
}

if (mode === 'build') {
	await build({
		root,
		configFile,
	})
	process.exit(0)
}

if (mode === 'dev') {
	const devServer = await createServer({
		root,
		configFile,
		server: {
			host: '127.0.0.1',
			port: 4174,
			strictPort: true,
		},
	})

	await devServer.listen()
	devServer.printUrls()

	const httpServer = devServer.httpServer
	if (!httpServer) {
		throw new Error('Vite dev server failed to initialize')
	}

	const closeServer = async () => {
		await devServer.close()
	}

	process.on('SIGTERM', () => {
		void closeServer().finally(() => process.exit(0))
	})

	process.on('SIGINT', () => {
		void closeServer().finally(() => process.exit(0))
	})

	await new Promise((resolve, reject) => {
		httpServer.on('close', resolve)
		httpServer.on('error', reject)
	})

	process.exit(0)
}

const previewServer = await preview({
	root,
	configFile,
	preview: {
		host: '127.0.0.1',
		port: 4174,
		strictPort: true,
	},
})

const httpServer = previewServer.httpServer
if (!httpServer) {
	throw new Error('Vite preview server failed to initialize')
}

const closeServer = async () => {
	await previewServer.close()
}

process.on('SIGTERM', () => {
	void closeServer().finally(() => process.exit(0))
})

process.on('SIGINT', () => {
	void closeServer().finally(() => process.exit(0))
})

await new Promise((resolve, reject) => {
	httpServer.on('close', resolve)
	httpServer.on('error', reject)
})
