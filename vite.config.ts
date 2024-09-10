import { defineConfig } from "vite";
 

 
export default defineConfig({
  base: './',
  build: {
    sourcemap: true,
    assetsDir:'./assets'
     
},
  css: {
     
    devSourcemap:true
  },
  server: {
    host: '127.0.0.1'
  }
});