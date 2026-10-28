import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { renderWithRouter } from './test/renderWithRouter'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.setAttribute('data-theme', 'light')
    document.documentElement.style.colorScheme = 'light'
  })

  it('renders the brand and default topic', () => {
    renderWithRouter(<App />)

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
    renderWithRouter(<App />)

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
    renderWithRouter(<App />)

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

    expect(categoryButtons()[0]).toHaveAccessibleName(/algo:/i)
    expect(
      within(nav).getByRole('button', {
        name: /sort categories by default order/i,
      }),
    ).toHaveAttribute('aria-pressed', 'true')
  })

  it('searches across all categories when enabled', async () => {
    const user = userEvent.setup()
    renderWithRouter(<App />)

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
    renderWithRouter(<App />)

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
    expect(document.body.textContent).toMatch(/prefer const by default/i)
  })

  it('offers a PDF cheat sheet download on a topic', () => {
    renderWithRouter(<App />)

    expect(screen.getByRole('button', { name: /print pdf/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /png|image/i }),
    ).not.toBeInTheDocument()
  })

  it('scrolls to the top from the floating button', async () => {
    const user = userEvent.setup()
    const scrollTo = vi
      .spyOn(window, 'scrollTo')
      .mockImplementation(() => undefined)
    renderWithRouter(<App />)

    await user.click(screen.getByRole('button', { name: /scroll to top/i }))

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    scrollTo.mockRestore()
  })

  it('navigates to the JS playground', async () => {
    const user = userEvent.setup()
    renderWithRouter(<App />)

    await user.click(screen.getByRole('link', { name: /js playground/i }))

    expect(
      screen.getByRole('heading', { level: 1, name: /javascript console/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^run$/i })).toBeInTheDocument()
  })
})
