// src/components/Login.js
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'

export default function Login({ onUserChange }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onUserChange(user)
    }, [user])

    const login = () => {
        signInWithPopup(auth, provider)
            .then((res) => setUser(res.user))
            .catch(console.error)
    }

    const logout = () => {
        signOut(auth).then(() => setUser(null))
    }

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.displayName}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={login}>Login with Google</button>
            )}
        </div>
    )
}
