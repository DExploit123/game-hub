import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '13a0dffb28f94ecf9e775020ab5c6452'
    }
})