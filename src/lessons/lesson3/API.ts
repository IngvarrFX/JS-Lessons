import axios from 'axios';


// const configOMB = axios.create({
//     baseURL: `http://www.omdbapi.com/`,
//     withCredentials: true,
//     headers: {
//         "API-KEY": "?apikey=ece2dc28",
//     },
// })


const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
    whitCredantials: true,
};
const key = '?apikey=ece2dc28';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`)

    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${key}&s=${title}&type=${type}`)
    }
};


export default API;
