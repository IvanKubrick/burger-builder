import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-c129b.firebaseio.com/'
});

export default instance;
