import { defineConfig } from "vite";
import nunjucksPlugin from './vite-plugin-nunjucks';

 
export default defineConfig({
  plugins: [nunjucksPlugin()],
  
  base: './',
  build: {
    sourcemap: true,
    assetsDir:'./assets'
     
},
  
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

