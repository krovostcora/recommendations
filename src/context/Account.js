// Account.jsx
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useAuth } from '/AuthContext'

export default function Account() {
    const { user } = useAuth()
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        if (!user) return
        const fetchFavorites = async () => {
            const favs = await getDocs(collection(db, "users", user.uid, "favorites"))
            setFavorites(favs.docs.map(doc => doc.data()))
        }
        fetchFavorites()
    }, [user])

    if (!user) return <p>Please log in to view your account.</p>

    return (
        <div className="container">
            <h2>Your Favorites</h2>
            <ul>
                {favorites.map((item, idx) => (
                    <li key={idx}>{item.title} ({item.type})</li>
                ))}
            </ul>
        </div>
    )
}
