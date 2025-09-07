// src/components/navbar/ThemeToggle.test.js
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'  // <- import jest-dom matchers
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  it('renders button and toggles dark mode', () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()          // check button exists
    expect(button.querySelector('svg')).toBeInTheDocument() // check icon exists

    // click to toggle dark mode
    fireEvent.click(button)
    expect(document.body.className).toBe('dark-theme')

    // click again to turn off
    fireEvent.click(button)
    expect(document.body.className).toBe('')
  })
})