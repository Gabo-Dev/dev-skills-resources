import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/dev-skills-resources/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@domain': path.resolve(__dirname, './src/domain'),
      '@application': path.resolve(__dirname, './src/application'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@presentation': path.resolve(__dirname, './src/presentation'),
      '@projects': path.resolve(__dirname, './src/projects'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@store': path.resolve(__dirname, './src/store'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
