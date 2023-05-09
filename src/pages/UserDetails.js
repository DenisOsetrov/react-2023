import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    let location = useLocation();

    // беремо state з User.component i hook useLocation()
    // наш state переіменуємо в user
    let {state: user} = location;

    return (
        <div>
            {/*через {JSON.stringify(user)} робити не треба. Це дуже спрощений варіант*/}
            {JSON.stringify(user)};

            {/*детруктуризуємо наш об'єкт зі {JSON.stringify(user)}*/}
            <div>
                <h2>User Details:</h2>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <h3>Address:</h3>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
                <p>Latitude: {user.address.geo.lat}</p>
                <p>Longitude: {user.address.geo.lng}</p>
                <h3>Company:</h3>
                <p>Name: {user.company.name}</p>
                <p>Catch Phrase: {user.company.catchPhrase}</p>
                <p>Business Strategy: {user.company.bs}</p>
            </div>
        </div>
    );
};

export default UserDetails;