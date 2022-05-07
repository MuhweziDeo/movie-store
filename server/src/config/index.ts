import dotenv from 'dotenv';

dotenv.config();
export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/movies-db'
export const OMDD_API_KEY = process.env.OMDD_API_KEY;
export const PORT = process.env.PORT || 3000;