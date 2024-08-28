import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Main } from './Main'

describe('jxdbcj', () => {
  it('cjj', () => {
    render(<Main />)

    const teste = screen.getByText('teste')

    expect(teste).toBeInTheDocument()
  })
})
