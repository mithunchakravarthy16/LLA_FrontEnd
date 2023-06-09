import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://mocki.io/v1/7fc08148-a5a8-41bc-b1df-d9536129ebf5',
    headers: {
        'content-type': 'application/json'  
    }
});

export default axiosConfig;