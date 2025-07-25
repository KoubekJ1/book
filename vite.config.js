import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages",
      components: "/src/components",
      assets: "/src/assets",
      lib: "/src/lib"
    },
  },
})
