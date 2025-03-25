import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    open: true,
    port: 3000,
  },
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactPreloaders',
      fileName: format => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  },
})
