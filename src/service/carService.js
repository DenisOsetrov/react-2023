import {axiosService} from './axiosService';
import {urls} from "../configs/url";

const carService = {

    getAll:() => axiosService.get(urls.cars),          // використаємо метод getAll, його value буде ф-ця, що повертає axiosService
    create:(car) => axiosService.post(urls.cars, car), // використаємо метод create
    getById:(id) => axiosService.get('${urls.cars}/${id}'),
    updateById:(id, car) =>  axiosService.put('${urls.cars}/${id}', car),
    deleteById:(id) => axiosService.delete('${urls.cars}/${id}')
}

export {
    carService
}

















