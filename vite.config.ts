import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/it-code-lesson-8/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
