import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 9ab4afbc5c5b75037dba3fdc0dbbe6235491836a663a354a66522f1c75c8ea63',
    },
});
