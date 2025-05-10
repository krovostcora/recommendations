// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Cartoons from './pages/Cartoons'
import FavoritesPage from './pages/FavoritesPage'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'

export default function App() {
    const [user, setUser] = useState(null)

    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="/cartoons" element={<Cartoons />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </div>
        </Router>
    )
}
