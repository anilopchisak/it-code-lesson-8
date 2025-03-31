import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
    headers: { 'Content-Type': 'application/json' }
});

export default api;
