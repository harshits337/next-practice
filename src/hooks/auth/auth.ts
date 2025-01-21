
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Cookie } from "next/font/google";

export const useLoginCheck = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (auth) {
            setIsAuthenticated(true);
        }
    },[])

    const loginCheck = (values : unknown) => {
        // Perform login check logic here
        // For example, compare values with user
        console.log('Login Check:', values);
        if (values?.email === "test@gmail.com" && values?.password === "test@1234") {
            // setIsLoggedIn(true);
            localStorage.setItem('auth', 'true');
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

    return {isAuthenticated ,loginCheck,logout};
};