import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-f2c8c.firebaseio.com/'
});

export default instance;    