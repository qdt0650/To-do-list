import { defineConfig } from 'vite'

export default defineConfig({
   server: {
      port: 3000,
      open: true,
   },
   base: '/To-do-list/',
   build: {
      outDir: 'dist',
   },
})
