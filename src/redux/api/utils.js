import axios from 'axios';

export const apiUrl = 'http://localhost:5000';

export const API = axios.create({
	baseURL: apiUrl,
	timeout: 5000,
});

const authInterceptor = config => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.Authorization = token;
	}
	return config;
};

API.interceptors.request.use(authInterceptor);
