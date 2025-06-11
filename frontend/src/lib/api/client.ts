import axios from 'axios';

const apiClient = axios.create({
	baseUrl: process.env.PUBLIC_API_URL || "http://localhost:3000",
	headers: {
		'Content-type': 'application/json',
	},
});

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token){
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config
});

export default apiClient