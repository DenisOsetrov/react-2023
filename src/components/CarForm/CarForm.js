import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../service/carService";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../validators/carValidator";


const CarForm = ({setAllCars, carForUpdate}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({mode: 'all', resolver:joiResolver(carValidator)});                        //  видає помилки при події onTouched

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev)
        reset();                                                    // Очищення форми
        console.log(data);
    }

    const update = async (car) => {

        // Не працює. Якщо внести зміни у форму-input, вони не зберігаються
        // const update = async (car) => {
        //     await carService.updateById(car.id, car); // зберігаємо оновлені дані на сервері
        //     setAllCars(prev => !prev); // оновлюємо список всіх автомобілів після збереження змін
        //     reset(); // очищуємо форму після збереження змін
        // }
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            {/*якщо форма не є валідною, то вона disabled(вимкнена)*/}
        </form>



        //     перший варіант валідації
        //     <form onSubmit={handleSubmit((data) => carForUpdate ? update(data) : save(data))}> - це для update, але не працює
        //     1 - вводими стрінгове значення з перевіркою на наявність цифер.
        //     1-й варіант!
        //     <input type="text" placeholder={'brand'} {... register('brand', {pattern:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/})}/>   {/*{pattern:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/} - так прописується патерн, узяли готовий з сайту*/}
        //     {errors.brand && <span>Бренд має складатися тільки з літер. Мін. 1, макс. 20</span>}     або
        //
        //     2-варіант через змінні
        //     <input type="text" placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //             message: 'Бренд має складатися тільки з літер. Мін. 1, макс. 20'
        //         },
        //         required: {value: true, message: 'required'}            // required: {value: true, message: 'required' - перевіряє заповнені поля!
        //     })}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //
        //     {/*2 - вводимо дані через перевірку мін та макс*/}
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true, min: {value: 0, message: 'min 0!'}, max: {value: 1000000, message: 'max 1000000!'},
        //         required: {value: true, message: 'required'}
        //     })}/> {/*{valueAsNumber: true} - дозволяє виводити number, а не string*/}
        //     {errors.price && <span>{errors.price.message}</span>}
        //
        //     {/*3 - вводимо дані через перевірку мін та макс*/}
        //     <input type="text" placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value: 1990, message: 'Не старше 1990'},
        //         max: {value: new Date().getFullYear(), message: 'Такого ще не випустили!'},
        //         required: {value: true, message: 'required'}
        //     })}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //
        //      <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        //      {/*якщо форма не є валідною, то вона disabled(вимкнена)*/}
        // </form>
    );
};

export default CarForm







