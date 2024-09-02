import type { Config } from 'jest'
import nextJest from 'next/jest'

// Cria uma função de configuração personalizada para o Jest com Next.js
const createJestConfig = nextJest({
  dir: './'
})

// Adiciona a configuração personalizada ao Jest
const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // should be tested in e2e
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/styles/**'
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}

// Cria e exporta a configuração do Jest para o Next.js
export default createJestConfig(config)
