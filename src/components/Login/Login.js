import { useAuth } from "../../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
    const { user, setUser } = useAuth();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(auth, provider);
            setUser(res.user);
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

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
    );
}