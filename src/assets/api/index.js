import axios from "axios";

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',

})

export const api_key = 'd1b9169dc610a9a1d8b8d698f1674289';

export const image_api = 'https://image.tmdb.org/t/p/w500/';