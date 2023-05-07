import axios from "axios";
import {carBaseURL, placeBaseURL} from "../constants/urls";

const placeAxiosService = axios.create({baseURL:placeBaseURL});
const carsAxiosService = axios.create({baseURL:carBaseURL});

export {
    placeAxiosService,
    carsAxiosService
}