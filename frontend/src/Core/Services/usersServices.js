import axios from 'axios';
import { apiURL } from '../../Helpers/constans';

const usersAPI = `${ apiURL}/users`;

export const getAllUsers = () => {
    return axios.get(usersAPI);
}