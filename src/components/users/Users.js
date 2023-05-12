import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {Outlet} from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });

        // тут можна переглядати, видаляти тощо з setUsers (на майбутнє)
        return () => {
            console.log('done');
        }
    }, []);


    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}


            {/*виведемо інфу з компоненти UserDetails*/}
            {/*<Outlet/> - це місце, де будуть відображатися підкомпоненти*/}
            <h4> User details</h4>
            <Outlet/>
        </div>
    );
};

export default Users;