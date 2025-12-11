import { useState, useEffect } from "react";
import { useCookie } from "./useCookie";

const useAuthentication = () => {
    const { cookie, setCookie, removeCookie, getCookie } = useCookie('access_token');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [originalRoute, setOriginalRoute] = useState(null);

    const login = async (username, password) => {
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Login failed");
        
        setUser(data.user);
        console.log(user);
        return data.user;
    };

    const logout = async () => {
        await fetch("http://localhost:5000/api/logout", {
            method: "POST",
            credentials: "include",
        });

        setUser(null);
        removeCookie();
    };

    const recheckAuthentication = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/protected", {
                method: "GET",
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        recheckAuthentication();
    }, []);

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        recheckAuthentication,
        loading,
    };
    return value;
}

export default useAuthentication;