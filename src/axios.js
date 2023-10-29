import axios from 'axios';
import { useUserStore } from './store/user';
import { useRouter } from 'vue-router';


const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${useUserStore().$state.user.token}`;
    return config;
});

// axiosClient.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response.status === 401) {
//             useUserStore().setToken(null);
//             useRouter().push({ name: 'login' });
//         }
        // throw error;
//     }
// );

export default axiosClient;
