import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
	root: path.resolve(__dirname, 'demo'),
	plugins: [react()],
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
