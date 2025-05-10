import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    useEffect(() => {
        document.body.className = darkMode ? 'dark-theme' : ''
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    )
}
