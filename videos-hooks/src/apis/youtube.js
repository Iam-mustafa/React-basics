import axios from 'axios';

const KEY='AIzaSyCPPlZAY9O4xJgsE5FiKJD1Z7yCiQ5KTY0';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        type:'video',
        key: KEY
    }
})