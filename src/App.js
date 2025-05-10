import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Cartoons from './pages/Cartoons'
import ThemeToggle from "./components/navbar";
import {useState} from "react";
import Login from "./components/Login";
import LoginButton from "./components/LoginButton";


export default function App() {
    const [user, setUser] = useState(null)
  return (
      <Router>
          <header className="navbar">
              <NavLink to="/" end className="logo-link" user={user}>
                  <img src="/logo.png" alt="Home" className="logo" />
              </NavLink>
              <nav>
                  <NavLink to="/books" className={({ isActive }) => isActive ? "active" : ""}>Books</NavLink>
                  <NavLink to="/movies" className={({ isActive }) => isActive ? "active" : ""}>Movies</NavLink>
                  <NavLink to="/series" className={({ isActive }) => isActive ? "active" : ""}>Series</NavLink>
                  <NavLink to="/cartoons" className={({ isActive }) => isActive ? "active" : ""}>Cartoons</NavLink>
                  <ThemeToggle />

                  <LoginButton />
              </nav>
          </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/cartoons" element={<Cartoons />} />
          </Routes>
        </div>
      </Router>
  )
}
