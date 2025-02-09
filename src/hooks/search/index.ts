import axiosInstance from "@/app/components/axios";
import { useEffect, useState } from "react";

export const useSearchHook = () => {  
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        searchProfiles("");
    },[])

    const searchProfiles = async (query: string) => {
        try {
            console.log("query", query);
            const response = await axiosInstance.get(`/users`);
            setSearchResults(response.data?.data);
           
        } catch (error) {
            console.log(error);
           
        }
    }



    return {searchResults, searchProfiles};
}