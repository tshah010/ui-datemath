import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_DATEMATH_API_BASE_URL,
    headers: {
        Authorization:
            'Client-ID 9ab4afbc5c5b75037dba3fdc0dbbe6235491836a663a354a66522f1c75c8ea63',
    },
});
