import axios from 'axios';
const userToken = localStorage.getItem('userToken');


const getInstance = axios.create({
  baseURL:'https://localhost:7023/'
})

export default getInstance


 // auth: `Bearer ${userToken}`,