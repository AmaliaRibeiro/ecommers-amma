import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Esto asegura que las rutas sean relativas
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegura que el build se guarde en la carpeta correcta
    }
})
