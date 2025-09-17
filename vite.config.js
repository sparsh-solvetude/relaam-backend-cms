import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['nodemailer'],  // tell Vite not to bundle Nodemailer
  },
});
