import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        'trips/japan': fileURLToPath(new URL('./trips/japan/index.html', import.meta.url)),
        'trips/brazil': fileURLToPath(new URL('./trips/brazil/index.html', import.meta.url)),
        'trips/vietnam': fileURLToPath(new URL('./trips/vietnam/index.html', import.meta.url)),
        'trips/galapagos': fileURLToPath(new URL('./trips/galapagos/index.html', import.meta.url)),
        'trips/patagonia': fileURLToPath(new URL('./trips/patagonia/index.html', import.meta.url)),
        'trips/san-francisco': fileURLToPath(new URL('./trips/san-francisco/index.html', import.meta.url)),
        'trips/egypt': fileURLToPath(new URL('./trips/egypt/index.html', import.meta.url)),
        'trips/jordan': fileURLToPath(new URL('./trips/jordan/index.html', import.meta.url)),
      },
    },
  },
})
