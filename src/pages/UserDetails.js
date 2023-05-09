import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    let {state} = useLocation();

    // Ця const для деструктуризації, замість JSON.stringify
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = state.item;

    return (
        <div>
            {
                JSON.stringify(state)
            }

            {/*Цей div для деструктуризації, замість JSON.stringify*/}
            <div>
                <h2>User Details:</h2>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <h3>Address:</h3>
                <p>Street: {street}</p>
                <p>Suite: {suite}</p>
                <p>City: {city}</p>
                <p>Zipcode: {zipcode}</p>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lng}</p>
                <h3>Company:</h3>
                <p>Name: {companyName}</p>
                <p>Catch Phrase: {catchPhrase}</p>
                <p>Business Strategy: {bs}</p>
            </div>
        </div>
    );
};

export default UserDetails;