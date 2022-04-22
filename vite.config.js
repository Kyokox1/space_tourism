import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // *Activar para hacer Deploy en Github Pages
  // base:'/space_tourism/',
  plugins: [react()]
})
