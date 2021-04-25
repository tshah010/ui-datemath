import axios from 'axios';

export default axios.create({
    // baseURL: 'http://ec2-13-59-129-251.us-east-2.compute.amazonaws.com:8080',
    baseURL: 'http://localhost:8080',
    headers: {
        Authorization:
            'Client-ID 9ab4afbc5c5b75037dba3fdc0dbbe6235491836a663a354a66522f1c75c8ea63',
    },
});
