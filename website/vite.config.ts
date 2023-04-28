import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-vue-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-paper-corners/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    Markdown(),
  ],
  resolve: {
    alias: {
      vue: path.resolve(`./node_modules/vue`),
    },
  },
});
