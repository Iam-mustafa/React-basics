import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID D_QykqX8vjP05n0f2nbou2zFTkMxn9We3Lg_m6K513o'
    }
})