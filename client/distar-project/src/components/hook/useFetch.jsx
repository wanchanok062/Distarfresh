import { useState, useEffect } from 'react';
import axios from 'axios';

const useFecth = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
        // Cleanup function to cancel the request if component unmounts or if URL changes
        return () => {
            // Cancel the request if it is still pending
        };
    }, [url,data]); // Re-run effect if URL changes

    return { data, loading, error };
};

export default useFecth;
