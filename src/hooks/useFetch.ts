import {useEffect,useState} from "react";

export function useFetch<T>(url:string) : {
    data: T | undefined;
    isLoading: boolean;
    error: Error | undefined
} {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const [data,setData] = useState<T>();

    useEffect(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setIsLoading(false);
                    setData(data)
                })
                .catch((error) => {
                    setError(new Error(error));
                })
    }, [url]);

    return {data,isLoading,error};
}