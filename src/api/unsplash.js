import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TzvSrEMmyOTxhvhrcTpy3eIMwGbPLf59xZLL49fMCWk'
    }
})