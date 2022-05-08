import dotenv from 'dotenv';

dotenv.config();
export const OMDD_API_KEY = process.env.OMDD_API_KEY;
export const PORT = process.env.PORT || 3000;
export const API_VERSION = process.env.API_VERSION || 1;
export const ELASTIC_CLOUD_ID = process.env.ELASTIC_CLOUD_ID as string;
export const ELASTIC_PASSWORD = process.env.ELASTIC_PASSWORD as string;
export const ELASTIC_USERNAME = process.env.ELASTIC_USERNAME as string;
