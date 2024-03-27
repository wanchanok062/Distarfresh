import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useProtectedRoute = () => {
    const navigate = useNavigate();
    const API_url = import.meta.env.VITE_APP_API_KEY;

    const removeLocalStorage = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user_role');
        localStorage.removeItem('employee_name');
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            removeLocalStorage();
            navigate('/login');
            return;
        }

        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        axios.get(`${API_url}/protected`, { headers })
            .then(response => {
                if (response.data.message === 'ok') {
                    // console.log(response);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                removeLocalStorage();
                navigate('/login');
                return false
            });

    }, [navigate]);

};

export default useProtectedRoute;
