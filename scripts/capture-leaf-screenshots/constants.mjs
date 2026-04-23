import path from 'node:path'
import process from 'node:process'

export const ROOT = process.cwd()
export const INDEX_FILE = path.join(ROOT, 'src', 'index.tsx')
export const THEMES_FILE = path.join(ROOT, 'src', 'logic', 'themes.ts')
export const BASE_URL = 'http://127.0.0.1:4173'
export const VE_ROOT = path.join(ROOT, 've-project')
export const VE_INDEX_FILE = path.join(VE_ROOT, 'src', 'index.tsx')
export const VE_BASE_URL = 'http://127.0.0.1:4174'
export const DEFAULT_VIEWPORT = { width: 360, height: 576 }
export const MIN_HEIGHT = 120
export const MAX_HEIGHT = 1800
export const TARGET_PREFIXES = ['/contents', '/forms', '/ui']
export const MAX_ATTEMPTS_PER_SCREENSHOT = 3
export const RESTART_BROWSER_EVERY = 120
export const ZERO_HEIGHT_RETRY_DELAY = 2000
