
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { LoginRequest } from "@/interfaces/auth";

export const useLoginCheck = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (auth) {
            setIsAuthenticated(true);
        }
    },[])

    const login = async (values : LoginRequest) => {
        if (values?.email === "test@gmail.com" && values?.password === "test@1234") {
            // setIsLoggedIn(true);
            Cookies.set('authToken', '1234');
            router.push('/dashboard');
            setIsAuthenticated(true);
            
        } else {

            return false;
        }
    };

    const logout = () => {
        Cookies.remove('authToken');
        setIsAuthenticated(false);
        router.push('/login');
    }

    return {isAuthenticated ,login,logout};
};