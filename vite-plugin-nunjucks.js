// vite-plugin-nunjucks.js
import nunjucks from 'nunjucks';
import fs from 'fs';
import path from 'path';

export default function nunjucksPlugin() {
  return {
    name: 'vite-plugin-nunjucks',
    transformIndexHtml(html) {
      const templateDir = path.resolve(__dirname, './src/html');
      nunjucks.configure(templateDir);

      // Здесь вы можете указать, какую страницу нужно обработать
      const renderedHtml = nunjucks.renderString(html, { /* ваши переменные */ });

      return renderedHtml;
    },
  };
}