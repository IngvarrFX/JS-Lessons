import axios from 'axios';


// const instance = axios.create({
//     baseURL: `http://www.omdbapi.com/`,
//     withCredentials: true,
//     headers: {
//         "API-KEY": "ece2dc28",
//     },
// })


const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
    whitCredantials: true,
};
const key = 'ece2dc28';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=ece2dc28&t=${title}`)

    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?apikey=ece2dc28&s=${title}&type=${type}`)
    }
};


export default API;
