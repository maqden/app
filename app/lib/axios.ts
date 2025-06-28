import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export default axios;