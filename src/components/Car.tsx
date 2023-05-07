import React, {FC} from 'react';
import {ICar} from "../interface/car.interface";
import './CarForm.css';
import {IUseState} from "../types/useState.type";
import {carService} from "../services/car.service"; // підключення CSS файлу

interface IProps {
    car: ICar;
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange: IUseState<boolean>;
}

const Car: FC<IProps> = ({car, setCarForUpdate, setOnChange}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setOnChange(prevState => !prevState)
    }

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
                <button onClick={() => deleteCar()}>delete</button>
            </div>
        </div>

    );
};

export default Car;