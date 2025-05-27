import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const nodeBuiltIns = [
  'fs',
  'path',
  'crypto',
  'stream',
  'buffer',
  'util',
  'url',
  'http',
  'https',
  'os',
  'zlib'
]
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      external: nodeBuiltIns
    }
  }
})
