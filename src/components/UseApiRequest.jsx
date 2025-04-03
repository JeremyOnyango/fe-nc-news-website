import { useEffect, useState } from "react";

export const useApiRequest = (apiFunction, ...args) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        apiFunction(...args)
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error(error);
            setError({status: 404, statusText: "Failed to load details"});
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [...args]);

    return {data, isLoading, error}
}