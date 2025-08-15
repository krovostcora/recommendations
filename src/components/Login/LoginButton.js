import { useAuth } from "../../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import {FiLogIn, FiLogOut} from "react-icons/fi";

// Custom hook to detect mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 600);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return isMobile;
}

export default function LoginButton() {
    const { user, setUser } = useAuth();
    const isMobile = useIsMobile();

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

    if (user) {
        return (
            <button className="login-button" onClick={user ? logout : login}>
                {isMobile
                    ? user
                        ? <FiLogOut size={24} />
                        : <FiLogIn size={24} />
                    : user
                        ? `Logout (${user.displayName?.split(" ")[0]})`
                        : "Login"
                }
            </button>
        );
    }
    return (
        <button className="login-button" onClick={user ? logout : login}>
            {isMobile
                ? user
                    ? <FiLogOut size={24} />
                    : <FiLogIn size={24} />
                : user
                    ? `Logout (${user.displayName?.split(" ")[0]})`
                    : "Login"
            }
        </button>
    );
}