import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://seu-backend-api',
    headers: {
        'Content-Type': 'application/json'
    }
});

/*
instance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
*/
instance.interceptors.request.use(async (config) => {
    if (config.url === '/login') {
        
        const mockResponse = {
            data: {
                token: 'fake-jwt-token',
                user: {
                    email: config.data.email,
                    password: config.data.password
                }

            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config,
        };

        console.log( mockResponse )

        return Promise.resolve(mockResponse);
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});




export default instance;