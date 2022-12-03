import axios from "axios";


const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})


export const defApi = {
    getToDos() {
        return instance.get(`todos`)
    }
}