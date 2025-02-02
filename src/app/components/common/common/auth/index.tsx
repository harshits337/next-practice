'use client';

import { useAuth } from "@/hooks/auth/auth";

const AuthCheck = () =>{
    const { userDetails } = useAuth();

    return (
        <></>
    )
}

export default AuthCheck;