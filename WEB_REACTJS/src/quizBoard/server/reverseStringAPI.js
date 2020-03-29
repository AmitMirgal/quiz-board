import axios from 'axios';

export const reverseStringAPI = async (url, options) => {
    let res;
    try {
        res = await axios.get(url, options);
    } catch (error) {
        res = {
            data: 'error'
        }
    }
    return res.data;
}
