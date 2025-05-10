import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import app from '../firebase'

export default function LoginButton() {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [auth])

    const login = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error('Login error:', error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    return user ? (
        <button className="login-button" onClick={logout}>
            Logout ({user.displayName.split(' ')[0]})
        </button>
    ) : (
        <button className="login-button" onClick={login}>
            Login
        </button>
    )
}
