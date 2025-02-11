import axiosInstance from "@/app/components/axios";
import { ProfileValues } from "@/interfaces/profile/profileInterfaces";
import { useEffect, useState } from "react";

export const useSearchHook = () => {  
    const [searchResults, setSearchResults] = useState<ProfileValues[]>([]);
    const [offset, setOffset] = useState(0);
    const [oldQuery, setQuery] = useState('');
    const [endData, setEndData] = useState(false);
    useEffect(() => {
        searchProfiles();
    },[])

    const searchProfiles = async () => {
        try {
            const response = await axiosInstance.get(`/users?start=${offset}`);
            setSearchResults([...searchResults, ...response.data?.data]);
            setOffset(offset + 20);
           
        } catch (error) {
            console.log(error);
           
        }
    }
    const searchProfilesWithFilters = async (query: string) => {
        try {
            console.log("query", query);
            setQuery(query);
            if(oldQuery === query){
                const response = await axiosInstance.get(`/users?&start=${offset}` + (query.length ? '&name=' + query : ''));
                setOffset(offset + 20);
                if(response.data?.data.length === 0){
                    setEndData(true);
                }
                setSearchResults([...searchResults, ...response.data?.data]);
            } else {
                setEndData(false);
                const response = await axiosInstance.get(`/users?&start=0` + (query.length ? '&name=' + query : ''));
                setOffset(20);
                if(response.data?.data.length === 0){
                    setEndData(true);
                }
                setSearchResults(response.data?.data);
            }
            // return response.data?.data;
           
        } catch (error) {
            console.log(error);
           
        }
    }

   



    return {searchResults, searchProfiles, searchProfilesWithFilters, endData};
}