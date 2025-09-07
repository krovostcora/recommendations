import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoginButton from '../Login/LoginButton'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

export default function Navbar() {
    const [user] = useAuthState(auth)
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="navbar">
            {/* Upper row */}
            <div className="top-row">
                <NavLink to="/" className="logo-link" onClick={closeMenu}>
                    <img src="/logo.png" alt="Home" className="logo" />
                </NavLink>
            </div>

            {/* Lower row */}
            <nav className="main-links" aria-label="Primary">
                <NavLink to="/books" className={({ isActive }) => (isActive ? 'active' : '')}>Books</NavLink>
                <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>Movies</NavLink>
                <NavLink to="/series" className={({ isActive }) => (isActive ? 'active' : '')}>Series</NavLink>
                <NavLink to="/cartoons" className={({ isActive }) => (isActive ? 'active' : '')}>Cartoons</NavLink>
            </nav>

            {/* Secondaries — hamburger menu */}
            <nav
                id="secondary-menu"
                className={`secondary-menu ${menuOpen ? 'active' : ''}`}
                aria-label="Secondary"
                onClick={closeMenu}
            >
                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        isActive ? 'favorite-icon-link active' : 'favorite-icon-link'
                    }
                >
                    <img src="/after_like.svg" alt="Favorites" className="favorite-icon" />
                </NavLink>
                <ThemeToggle />
                <LoginButton user={user} />
            </nav>
        </header>
    )
}
