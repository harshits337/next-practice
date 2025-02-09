/* eslint-disable @typescript-eslint/no-unused-vars */
import axiosInstance from "@/app/components/axios";
import { ProfileValues } from "@/interfaces/profile/profileInterfaces";
import { profile } from "console";
import { get } from "http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useProfileHook = () => {

    const [profileDetails, setProfileDetails] = useState(null);
    const [userId, setUserId] = useState(null);

    const authState = useSelector((state : any) => state.auth);
    console.log("authState", authState);
  
    useEffect(() => {
        
        if(authState.isLogin){
           setUserId(authState.userDetails.id);
        }
      
    },[authState.isLogin]);

    useEffect(() => {
        if (userId) {
            const fetchProfileDetails = async () => {
                try {
                    const data = await getProfileDetails();
                    setProfileDetails(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchProfileDetails();
        }
    }, [userId]);

    const createProfile = async (values : ProfileValues) => {
        try {
            console.log("values", authState.userDetails.id);
            
            const { firstName, lastName, email, ...rest } = values;
            const updatedValues = { ...rest, id: authState.userDetails.id, profilePic : "https://avatar.iran.liara.run/public" };
            console.log("updatedValues", updatedValues);
            const response : any = await axiosInstance.post('/users',updatedValues);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const updateProfile = async (values : ProfileValues) => {
        try {
            const {  email, ...rest } = values; 

            const updatedValues = {...rest, id: authState.userDetails.id, profilePic :  "https://avatar.iran.liara.run/public"};
            
            const response : any = await axiosInstance.put(`/users/${authState.userDetails.id}`,updatedValues);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }


    const getProfileDetails = async () => {
        try {
            const response = await axiosInstance.get(`/users/${userId}`);
            return response.data?.data;

        } catch (error) {
            console.log(error);
            return false;
        }
    }




    return { profileDetails, createProfile,userId, updateProfile};

}