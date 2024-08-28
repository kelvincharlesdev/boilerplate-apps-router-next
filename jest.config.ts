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
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

// Cria e exporta a configuração do Jest para o Next.js
export default createJestConfig(config)
