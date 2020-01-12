import axios from 'axios';

const http = axios.create({
  baseURL: 'http://oc303.codeeshop.com/index.php?route=',
});

export default http;