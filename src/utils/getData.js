import axios from 'axios';

import { PUBLIC_API_KEY, MY_HASH } from './api';

export const getData = async (url) => {
    try {
        const response = await axios.get(url, {
            params: {
                ts: '1',
                apikey: PUBLIC_API_KEY,
                hash: MY_HASH,
                limit: 20,
            },
        });
        return response.data.data.results;
    } catch (error) {
        throw new Error(error.message);
    }
};
