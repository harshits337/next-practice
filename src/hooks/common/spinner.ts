import { useState } from "react";

export const useSpinner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const startSpinner = () => setIsLoading(true);
    const stopSpinner = () => setIsLoading(false);

    
    return { startSpinner , stopSpinner , isLoading };
}