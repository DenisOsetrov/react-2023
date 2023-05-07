import React, {FC} from 'react';
import {ICar} from "../interface/car.interface";
import './CarForm.css';
import {IUseState} from "../types/useState.type"; // підключення CSS файлу

interface IProps {
    car: ICar;
    setCarForUpdate:IUseState<ICar|null>;
}

const Car: FC<IProps> = ({car,setCarForUpdate}) => {
    const {id,brand, price,year} = car;

    return (
        <div className={'CarSave'}>
            <div>
                <div>id: {id}</div>
                <div>brand: {brand}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div>
                <button onClick={() => setCarForUpdate(car)}>update</button>
                <button>delete</button>
            </div>
        </div>

    );
};

export default Car;