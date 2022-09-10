import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    silent: true,
  },
});
