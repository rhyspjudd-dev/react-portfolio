import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'rollup-plugin-postcss';

// import { svelte } from 'vite-plugin-svelte';
import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    //postcss(),
    sass(),
    // postcss({
    //   plugins: [
    //     // List your PostCSS plugins here
    //     require('autoprefixer'),
    //     require('tailwindcss'),
    //     // Other plugins...
    //   ],
    // }),
    
  ],
})
