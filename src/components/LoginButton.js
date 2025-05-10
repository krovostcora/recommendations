import { useAuth } from "../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginButton() {
    const { user, setUser } = useAuth();

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(auth, provider);
            setUser(res.user);
        } catch (error) {
            console.error("Login error:", error.message);
            // Optionally show error to user
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error.message);
            // Optionally show error to user
        }
    };

    return user ? (
        <button className="login-button" onClick={logout}>
            Logout ({user.displayName?.split(" ")[0]})
        </button>
    ) : (
        <button className="login-button" onClick={login}>
            Login
        </button>
    );
}