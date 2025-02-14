import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'], // Ensure this includes all relevant files
      theme: {
        extend: {
          backgroundImage: {
            'custom-gradient': "linear-gradient(180deg, #02191D 100%, #031F24 100%, #073037 100%)",
          },
          fontFamily: {
            roadrage: ['"Road Rage"', 'cursive'],
            jejumyeongjo: ['Jeju Myeongjo', 'serif'],

          },
        },
      },
    }),
  ],
});
