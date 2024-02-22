import { useState } from 'react';
import axios from 'axios';

const usePost = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const post = async (url, postData) => {
        setLoading(true);
        try {
            const response = await axios.post(url, postData);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { data, error, loading, post };
};

export default usePost;
