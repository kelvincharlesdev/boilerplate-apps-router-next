import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Main } from './Main'

describe('jxdbcj', () => {
  it('cjj', () => {
    render(<Main />)

    const teste = screen.getByText('React Avançado')

    expect(teste).toBeInTheDocument()
  })

  it('Shoud render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
