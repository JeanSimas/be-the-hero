import axios from 'axios'

const api = axios.create({
    baseURL: 'http://205.0.0.199:5000'
})

export default api