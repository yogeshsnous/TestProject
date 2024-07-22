import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/'});

//users
//posts

export const getData = async (url: string) => {
    return axiosInstance.get(url)
}