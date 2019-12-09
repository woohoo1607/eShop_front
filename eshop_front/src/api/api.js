import * as axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});


export const userAPI = {
    getUser(id=1) {
        return instance.get(`users/${id}`).then(response => {
            return response.data;
        })
    },

    getUsers(currentPage=1) {
        return instance.get(`users?page=${currentPage}`).then(response => {
            return response.data;
        })
    }
};