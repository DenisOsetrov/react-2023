import React, {FC} from 'react';
import {IUser} from "../interface/user.interfase";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({ user }) => {
    const {
        id,
        name,
        username,
        email,
        address: { street, suite, city, zipcode, geo: { lat, lng } },
    } = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
        </div>
    );
};

export default User;