import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
      theme: {
        extend: {
          fontFamily: {
            jejumyeongjo: ["JejuMyeongjo", "serif"],
            roadrage: ["Road Rage", "cursive"],
            roboto: ["Roboto", "sans-serif"],
    },
          
        },
      },
    }),
  ],
});
