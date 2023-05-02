import React from "react";
import Cars from "./components/Cars/Cars";

function App() {
  return (
    <div>
        <Cars/>
    </div>
  );
}

export default App;

// 1. Працюємо з базою даних owu.linkpc.net - Cars.
// 2. URL adress base - owu.linkpc.net/carsAPI/v1
// 3. Працюємо:
//           В package.json завантажуємо бібліотеки:
//           "@hookform/resolvers": "^3.1.0",
//           "react-hook-form": "^7.43.9",
//           "joi": "^17.9.2",             - для валідації даних!
//           "axios": "^1.3.6"
//           "@hookform/resolvers": "^3.1.0",
//
//
//              Робота з useForm
//       1. Створюємо directory - configs => url.js
//       2.Створюємо directory - service =>
//         - axiosService.js - створює новий екземпляр Axios з певними параметрами. Новий екземпляр Axios з базовою адресою baseUrl, яку ми передаємо в якості параметру об'єкту конфігурації.
//           Таким чином, коли ми викликаємо методи get(), post(), put() або delete() на цьому екземплярі Axios, вони будуть відправляти запити на URL-адресу
//         - carService.js - опишемо в ній методи getAll, create, getById, updateById, deleteById
//       3. Створимо папку components і 2 підпапки:
//         - Cars => Cars.js (в App.js <Cars/>)
//           - useState => useEffect - отримаємо доступ до всіх методів.
//         - Car  => Car.js
//        - в ній url.js створюємо const baseUrl - загальна URL і конкретно для CAR/
//       4.Створюємо папку CarForm з файлом CarForm.js
//         - Створюємо форму
//         - прописуємо input. На кожен input робимо перевірку.
//         - створюємо const = useForm, яка має свої властивості
//         - передаємо параметри mode в useForm
//         - зберігаємо 1 Car (+ робимо кнопку активною при заповненні всіх інпутів).
//          В компоненті CarsForm в const save створюємо новий Car.
//         - записуєсо в АРІ створені машини автоматично. Створюємо const [allCars, setAllCars] = useState(null);
//          передаємо allCars в useEffect () => {{},[allCars]}
//
//         - додаємо кнопку до Car, щоб update робити Car. Щоб при натисканні форма заповнювалась тим Car, до якого звернулися.
//        5. Створима папку validators => car.validator.js, де будуть всі можливі валідації car/
//         - прописуємо в ній умови валідації.
//         - в компоненту CarForm.js прописуємо import {joiResolver} from '@hookform/resolvers/joi'
//          і додаємо resolver в const useForm.
//
//
//
//
//
//
//
//
//
//
