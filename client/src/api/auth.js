import axios from "axios";
console.log(import.meta.env.SERVER_URL);
const API_URL = `http://localhost:3000/api/users/`;

export const authApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },

})

authApi.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access, e.g., redirect to login
            window.location.href = '/auth';
        }
        return Promise.reject(error);
    }
);
