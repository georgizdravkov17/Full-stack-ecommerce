import axios from 'axios';
import { apiURL } from '../../Helpers/constans';

const productsAPI = `${apiURL}/products`;

export const getAllProducts = () => {
    return axios.get(productsAPI);
}