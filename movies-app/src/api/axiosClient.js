import axios from 'axios';
import queryString from 'query-string';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

// axiosClient.interceptors.request.use(async (config) => config);

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fd64c772f2b148ebf06ae391d2948626&page=11')
.then(data => console.log(data))

axiosClient.interceptors.response.use((response) => {
   if(response && response.data){
       return response.data;
   } 

   return response;
}, (error) => {
    throw error;
});




export default axiosClient;