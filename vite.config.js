import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/winup/'   // 👈 nombre exacto de tu repo en GitHub
});
