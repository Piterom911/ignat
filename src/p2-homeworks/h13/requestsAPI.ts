import axios from "axios";

export const requestsAPI = {
    postData(data: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: data})
    }
}