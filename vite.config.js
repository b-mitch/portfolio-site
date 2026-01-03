import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // use a repo-relative base when building for GitHub Pages
  base: mode === 'production' ? '/portfolio-site/' : '/',
  plugins: [react()],
}))
