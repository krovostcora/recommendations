// src/components/navbar/Navbar.js
import { NavLink } from 'react-router-dom'
import LoginButton from '../Login/LoginButton'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

export default function Navbar() {
    const [user] = useAuthState(auth)

    return (
        <header className="navbar">
            <NavLink to="/" className="logo-link">
                <img src="/logo.png" alt="Home" className="logo" />
            </NavLink>
            <nav className="nav-links">
                <NavLink to="/books" className={({ isActive }) => isActive ? "active" : ""}>Books</NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}>Movies</NavLink>
                <NavLink to="/series" className={({ isActive }) => isActive ? "active" : ""}>Series</NavLink>
                <NavLink to="/cartoons" className={({ isActive }) => isActive ? "active" : ""}>Cartoons</NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        isActive ? "favorite-icon-link active" : "favorite-icon-link"
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
