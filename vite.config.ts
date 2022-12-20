/// <reference types="vitest" />
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tsconfigPaths(), solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	test: {
		globals: true,
		include: ['**/src/**{test,spec}.{ts,tsx}'],
		environment: 'happy-dom',
		transformMode: {
			web: [/\.tsx?$/],
		},
		deps: { registerNodeLoader: true },
		setupFiles: './setup-tests.ts',
		coverage: {
			provider: 'istanbul',
		},
	},
	resolve: {
		conditions: ['development', 'browser'],
	},
})
