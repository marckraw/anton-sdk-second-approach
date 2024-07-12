import axios, { AxiosInstance, Method } from 'axios';

export const api: AxiosInstance = axios.create({
    timeout: 10000,
});

export const makeRequest = async (url: string, method: Method, data?: any): Promise<any> => {
    try {
        const response = await api({ url, method, data });
        return response.data;
    } catch (error) {
        throw error;
    }
};