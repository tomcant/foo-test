import { render, screen } from '@testing-library/react'
import App from './App'

it('renders the root component', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
