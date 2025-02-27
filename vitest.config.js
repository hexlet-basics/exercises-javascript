import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.test.js', '**/*.spec.js', '**/test.js'],
  },
})
