import { useState } from 'react';
import axios from 'axios';

const useUpdateData = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const patchData = async (url, updatedData) => {
    setLoading(true);
    try {
      const response = await axios.patch(url, updatedData);
      setLoading(false);
      return response.data; // Return the updated data
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error; // Throw the error to be handled by the caller
    }
  };
  return { error, loading, patchData };
};

export default useUpdateData;
