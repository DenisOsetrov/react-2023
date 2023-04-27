import React from "react";
import Cars from "./components/Cars/Cars";

function App() {
  return (
    <div>
        <Cars/>
    </div>
  );
};

export default App;

// 1. Працюємо з базою даних owu.linkpc.net - Cars.
// 2. URL adress base - owu.linkpc.net/carsAPI/v1
// 3. Працюємо:
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
//       4.
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
//
