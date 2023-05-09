import React, {useEffect, useState} from 'react';
import ApiService from "./services/api.services";
import UserComponent from "./components/User.component";
import {Outlet} from "react-router-dom";

const Users = () => {

    const apiService = new ApiService('users') // Зсилається на url-users

    const [users, setUsers] = useState([])

    useEffect(() => {
        apiService.getAllData().then(valua => setUsers(valua))
    }, [])

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
            <hr/>
            <div>
                <h3>details about user</h3>
                <h4>Це виводить дані JSON.stringify(user) з компоненти UserDetails</h4>
                {/*динамічне додавання кожного елемента шляху (id зі своїм номером)*/}
                {/*динамічний сегмент запишемо в АРР компоненті*/}
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;