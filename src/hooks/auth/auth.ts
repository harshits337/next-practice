
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { LoginRequest, SignUpRequest } from "@/interfaces/auth";
import { useDispatch } from "react-redux";
import toastSlice from "@/redux/toastSlice";
import axiosInstance from "@/app/components/axios";

export const useAuth = () => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState(null);
    // const authState = useSelector((state : any) => state.counter.value);
    const dispatch = useDispatch();

    const register = async (values : SignUpRequest) => {
        console.log(values);
        try {
            const response = await axiosInstance.post('/auth/register',values);
            if(response.status === 200){
                dispatch(toastSlice.actions.setToastState({
                    message : 'Registration successful',
                    type : 'success',
                    show : true,
                    duration : 1500,
                    
                }))

                router.push('/login');
              
            }
        } catch (error: any) {
            // console.log(error?.response?.data?.errors[0]?.message)
            dispatch(toastSlice.actions.setToastState({
                message : error?.response?.data?.message || error?.response?.data?.errors[0]?.message || 'An error occurred',
                type : 'error',
                show : true,
                duration : 1500,
                
            }))
            
        }
      
    }   

    useEffect(() => {
        const authToken = Cookies.get('authToken');
        if(authToken){
            axiosInstance.get('http://localhost:5000/api/v1/auth/me',{
            }).then((response) => {
                setUserDetails(response.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    },[])



    const login = async (values : LoginRequest) => {
        
      try {
        const response = await axiosInstance.post('/auth/login',values);
        if(response.status === 200){
            Cookies.set('authToken',response.data.token);
            setUserDetails(response.data.user);
            router.push('/profile');
            dispatch(toastSlice.actions.setToastState({
              message : 'Login successful',
              type : 'success',
              show : true,
              duration : 1500,
            }))
       }  else {
            dispatch(toastSlice.actions.setToastState({
                message : 'Invalid email or password',
                type : 'error',
                show : true,
                duration : 1500,
            }))
       }
      } catch (error: any) {
        console.log(error);
        dispatch(toastSlice.actions.setToastState({
            message : 'Invalid email or password',
            type : 'error',
            show : true,
            duration : 1500,
        }))
      }
        
    };

    const logout = () => {
        Cookies.remove('authToken');
        router.push('/login');
    }

    return {userDetails,register, login,logout};
};