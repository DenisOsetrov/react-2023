import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUser} from "../interface/user.interfase";
import {userService} from "../services/userservice";
import {IUseState} from "../types/useState.type";
import './UserForm.css'; // підключення CSS файлу

interface IProps {
    setUsers: IUseState<IUser[]>;
}

const UserForm: FC<IProps> = ({setUsers}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<IUser>();

    const save: SubmitHandler<IUser> = async (user) => {
        const {data} = await userService.create(user);
        setUsers (prev => [...prev, data])
        // Ми розклали все, що було в старому масиві, і додали новий елемент
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name', { required: true })}/>
            <input type="text" placeholder={'username'} {...register('username', { required: true })}/>
            <input type="text" placeholder={'email'} {...register('email', { required: true })}/>
            <input type="text" placeholder={'street'} {...register('address.street', { required: true })}/>
            <input type="text" placeholder={'suite'} {...register('address.suite', { required: true })}/>
            <input type="text" placeholder={'city'} {...register('address.city', { required: true })}/>
            <input type="text" placeholder={'zipcode'} {...register('address.zipcode', { required: true })}/>
            <input type="text" placeholder={'lat'} {...register('address.geo.lat', { required: true })}/>
            <input type="text" placeholder={'lng'} {...register('address.geo.lng', { required: true })}/>

            <button className={'UserSave'}>Save</button>
        </form>
    );
};

export default UserForm;








