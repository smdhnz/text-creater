import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/text-creater/',
  plugins: [
    react(),
    tsconfigPaths(),
  ],
})
