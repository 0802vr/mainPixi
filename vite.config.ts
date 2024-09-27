import { defineConfig } from "vite";
import nunjucksPlugin from './vite-plugin-nunjucks';
import htmlTemplate from 'vite-plugin-html-template'
 
export default defineConfig({
  plugins: [nunjucksPlugin()],
  
  base: './',
  build: {
    sourcemap: true,
    assetsDir:'./assets'
     
},
  assetsInclude: ['**/*.html'], 
  css: {
    devSourcemap:true,
    /* preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style/_adapt.scss";
           
        `
      }
    } */
  },
  server: {
    host: '127.0.0.1'
  }
});

