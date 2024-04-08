import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@theme-toggles/react/css/expand.css': './node_modules/@theme-toggles/react/css/Expand.css'
    }
  }
})
