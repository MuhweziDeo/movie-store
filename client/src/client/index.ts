import Axios from 'axios';
import { API_URL } from '../config';

const client = Axios.create({baseURL: API_URL});
export default client;