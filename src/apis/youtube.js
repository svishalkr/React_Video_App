import axios from 'axios';

const KEY ='AIzaSyADMC4N7lcwleyDSfvVusNy8TSChUOxIKs';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});