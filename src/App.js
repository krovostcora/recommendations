import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/categories/Books';
import Movies from './pages/categories/Movies';
import Series from './pages/categories/Series';
import Cartoons from './pages/categories/Cartoons';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/navbar/Navbar';
import './App.css';

export default function App() {
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
    );
}
