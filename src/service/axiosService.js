import axios from "axios";
import {baseUrl} from "../configs/url";

const axiosService= axios.create({baseURL:baseUrl}) // Якщо ключ і значення співпадає, то можна ({baseUrl})

export {
    axiosService
}