import {joiResolver} from '@hookform/resolvers/joi'
import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interface/car.interface";
import {carValidator} from "../validators/car.validator";
import {carService} from "../services/car.service";
import {IUseState} from "../types/useState.type";

interface IProps {
    setOnChange: IUseState<boolean>;
    carForUpdate: ICar | null;
    setCarForUpdate:IUseState<ICar|null>;
}

const CarForm: FC<IProps> = ({setOnChange, carForUpdate, setCarForUpdate}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});

    // useEffect буде слідкувати за кожним значенням carForUpdate - автоматично за всіма полями.
    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {  // Object.entries - з об'єкта робить масив в масиві, де в головному масиві на кожен ключ і значення буде свій масив.
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})  // оператор keyof типізує наш key - як ключ для ICar. В кінці - провалідуй значення.
                }
            })
        }
    }, [carForUpdate]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        setOnChange(prevState => !prevState)
        reset();
    }

    const update: SubmitHandler<ICar> = async (car) => {
        // можна через знак ?, бо carForUpdate може бути null.
        //Запишемо через !, бо ми впевнені, що id !=null
        await carService.updateById(carForUpdate!.id, car)
        //Робимо запит на всі оновлені Cars
        setOnChange(prevState => !prevState)
        // reset() оновлюємо наш список.
        // щоб змінювалася кновка під час update на Save, треба setCaeForUpdate покласти в <CarForm/> у CarPage
        reset()
        setCarForUpdate(null)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
            <div>
                {/*Виводимо помилки!*/}
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </div>
        </div>

    );
};

export default CarForm;






