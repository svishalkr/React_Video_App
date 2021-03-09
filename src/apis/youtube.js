import axios from 'axios';

const KEY ='#Enter_Youtube_API_Key';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});
