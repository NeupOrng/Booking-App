import Axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const api_token = process.env.NEXT_PUBLIC_API_TOKEN;

const axios = Axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${api_token}`
    }
});

export default axios;

