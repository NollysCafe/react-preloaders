import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
	base: '/react-preloaders/',
	root: path.resolve(__dirname, 'demo'),
	plugins: [
		react(),
		viteStaticCopy({ targets: [{ src: path.resolve(__dirname, 'demo', 'index.html'), dest: '', rename: '404.html' }] })
	],
	publicDir: path.resolve(__dirname, 'demo', 'public'),
	server: {
		port: 3000,
		open: path.resolve(__dirname, 'demo', 'index.html'),
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
