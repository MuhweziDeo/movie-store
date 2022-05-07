import { connect } from 'mongoose';
import { MONGO_URL } from '../config';

export const dbConnection = async() => {
return await connect(MONGO_URL)
}