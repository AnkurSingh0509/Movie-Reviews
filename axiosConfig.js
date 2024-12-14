import axios from 'axios';

export default axios.create(
    {
        baseURL:'http://localhost:8080',
        // base url setting for base setiing where api endpoint will be called by a client which stands for cross origin resource sharing 
        headers: { 'Content-Type': 'application/json',  'Access-Control-Allow-Credentials':true  },
    }
);