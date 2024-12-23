import { useState, useEffect } from "react";
import { BASE_URL } from "../services/api";

function useFetch(url, options = {}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${BASE_URL}${url}`, { ...options })
                const result = response.ok && await response.json()
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;