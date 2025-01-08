import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['**/*.test.js', '**/*.spec.js', '**/test.js'],
  },
})
