import React, {useEffect, useState} from 'react';
import {FC} from "react";
import {IUser} from "../interface/user.interfase";
import UserForm from "../components/UserForm";
import Users from "../components/Users";
import {userService} from "../services/userservice";

interface IProps {

}

const UserPage:FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers(value));
    },[]);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UserPage;







