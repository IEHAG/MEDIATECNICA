import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MEDIATECNICA/', // Asegúrate de que el nombre del repo sea correcto
  plugins: [react()],
});
