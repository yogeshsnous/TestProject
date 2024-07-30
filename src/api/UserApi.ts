import { getData } from "./Api"

export const getUsersList = () => {
    const url: string = 'users'
    return getData(url);
}

export const getUser = (userId: string) => {
    const url: string = `users/${userId}`;
    return getData(url);
}

