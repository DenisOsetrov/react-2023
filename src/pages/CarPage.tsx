import React, {useEffect, useState} from 'react';
import {FC} from "react";
import CarForm from "../components/CarForm";
import Cars from "../components/Cars";
import {ICar} from "../interface/car.interface";
import {carService} from "../services/car.service";

interface IProps {

}

const CarPage:FC<IProps> = () => {
    // Цей useState для виведення масиву всіх Cars
   const [cars,setCars] = useState<ICar[]>([]);

   // Цей useState для збереження створеного Car
   const [onChange, setOnChange] = useState<boolean>(false);

    // Цей useState для редагування - update Car
    const [carForUpdate, setCarForUpdate] = useState<ICar|null>(null)

   useEffect(() => {
       carService.getAll()
           .then(value => value.data)
           .then(value => setCars(value))
   },[onChange])

    return (
        <div>
            <CarForm setOnChange={setOnChange} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>
        </div>
    );
};

export default CarPage;







