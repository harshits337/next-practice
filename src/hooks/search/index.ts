import axiosInstance from "@/app/components/axios";
import { ProfileValues } from "@/interfaces/profile/profileInterfaces";
import { useEffect, useState } from "react";

export const useSearchHook = () => {  
    const [searchResults, setSearchResults] = useState<ProfileValues[]>([]);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        searchProfiles("");
    },[])

    const searchProfiles = async (query: string) => {
        try {
            console.log("query", query);
            const response = await axiosInstance.get(`/users?start=${offset}`);
            setSearchResults([...searchResults, ...response.data?.data]);
            setOffset(offset + 20);
           
        } catch (error) {
            console.log(error);
           
        }
    }

   



    return {searchResults, searchProfiles};
}