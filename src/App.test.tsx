import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.setAttribute('data-theme', 'light')
    document.documentElement.style.colorScheme = 'light'
  })

  it('renders the brand and default topic', () => {
    render(<App />)

    expect(
      screen.getByText('Coding Cheat Sheet', { selector: '.brand' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /personal revision sheet/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'HTML' }),
    ).toBeInTheDocument()
  })

  it('toggles between light and dark theme', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', {
      name: /switch to dark theme/i,
    })
    await user.click(toggle)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(
      screen.getByRole('button', { name: /switch to light theme/i }),
    ).toBeInTheDocument()
  })

  it('sorts categories alphabetically when A-Z is enabled', async () => {
    const user = userEvent.setup()
    render(<App />)

    const nav = screen.getByRole('navigation', {
      name: /topic types/i,
    })
    const categoryButtons = () =>
      within(nav)
        .getAllByRole('button')
        .filter((button) => /: /.test(button.getAttribute('aria-label') ?? ''))

    expect(categoryButtons()[0]).toHaveAccessibleName(/html:/i)

    await user.click(
      within(nav).getByRole('button', {
        name: /sort categories alphabetically/i,
      }),
    )

    expect(categoryButtons()[0]).toHaveAccessibleName(/angular:/i)
    expect(
      within(nav).getByRole('button', {
        name: /sort categories by default order/i,
      }),
    ).toHaveAttribute('aria-pressed', 'true')
  })

  it('searches across all categories when enabled', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('switch', { name: /search all categories/i }),
    )
    await user.type(
      screen.getByRole('searchbox', { name: /search in all topics/i }),
      'closure',
    )

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /results across topics/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /what is a closure/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'JavaScript' }),
    ).toBeInTheDocument()
  })

  it('shows answers openly when switching topics', async () => {
    const user = userEvent.setup()
    render(<App />)

    const nav = screen.getByRole('navigation', {
      name: /topic types/i,
    })
    await user.click(
      within(nav).getByRole('button', { name: /js: javascript/i }),
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'JavaScript' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /difference between var, let, and const/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/prefer const by default/i),
    ).toBeInTheDocument()
  })
})
