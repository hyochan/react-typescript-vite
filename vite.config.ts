/// <reference types="vitest" />
/// <reference types="vite/client" />

import svgr from '@honkhonk/vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), VitePWA({injectRegister: 'auto'})],
});
