/// <reference types="vitest" />
/// <reference types="vite/client" />

import {VitePWA} from 'vite-plugin-pwa';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    // babel({
    //   babelConfig: {
    //     babelrc: false,
    //     configFile: false,
    //     presets: [
    //       '@babel/preset-env',
    //       '@babel/preset-react',
    //       '@babel/preset-typescript',
    //     ],
    //     plugins: ['@emotion', '@babel/plugin-transform-runtime'],
    //   },
    // }),
    VitePWA({injectRegister: 'auto'}),
  ],
});
