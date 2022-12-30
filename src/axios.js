import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

instance.defaults.headers.common['Authorization'] = process.env.TOKEN_KEY;

export default instance