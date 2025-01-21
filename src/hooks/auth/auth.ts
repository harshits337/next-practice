
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
        
        const response = new Promise((resolve,reject) => {
            if(values.email === 'test@gmail.com' && values.password === 'test@1234') {
                Cookies.set('authToken','testToken');
                setIsAuthenticated(true);
                setTimeout(() => {
                    router.push('/dashboard');
                    resolve(true);
                },2000)
                
            } else {
                setTimeout(() => {
                    reject(false);
                },2000)
            }
        })
        return response;
    };

    const logout = () => {
        Cookies.remove('authToken');
        setIsAuthenticated(false);
        router.push('/login');
    }

    return {isAuthenticated ,login,logout};
};