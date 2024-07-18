import { renderWithProviders } from '@/app/test-utils'
import Posts from '../Posts'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Posts', () => {
  it('should render', () => {
    renderWithProviders(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>,
    )
    expect(screen.getByText(/posts/i)).toBeInTheDocument()
  })
})
