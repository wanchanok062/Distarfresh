import { useState } from 'react';
import axios from 'axios';

const useDeleteData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (url) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.delete(url);
      
      setLoading(false);
      
      return response.data; 
    } catch (error) {
      setLoading(false);
      setError(error);
      return null; 
    }
  };

  return { loading, error, deleteData };
};

export default useDeleteData;
