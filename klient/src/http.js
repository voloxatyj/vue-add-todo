import axios from 'axios';
import store from './store/index';

export default ()=>{
  return axios.create({
   baseURL:store.state.baseUrl,
   timeout:5000,
  });
};