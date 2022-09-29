import axios from 'axios';

const getInstance = axios.create({
  baseURL:'',
})

export default getInstance