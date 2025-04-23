import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/WEB2/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js',
    reporters: ['default', 'junit'],
    outputFile: {
      junit: 'coverage/junit.xml',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'html', 'json', 'lcov', 'clover'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['src/tests/**', 'src/**/*.test.{js,jsx,ts,tsx}']
    }
  }
})
