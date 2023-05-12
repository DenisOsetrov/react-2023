import React from 'react';
import {Link} from "react-router-dom";

const User = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()} state={{...item}}>
                {
                    item.name
                }
            </Link>

            {/*або виводимо всю інфу про юзерів*/}

        {/*    <div>*/}
        {/*        <h2>*/}
        {/*            <Link to={item.id.toString()}>*/}
        {/*            {item.name}*/}
        {/*            </Link>*/}
        {/*        </h2>*/}
        {/*        <p>ID: {item.id}</p>*/}
        {/*        <p>Username: {item.username}</p>*/}
        {/*        <p>Email: {item.email}</p>*/}
        {/*        <p>Address:</p>*/}
        {/*        <ul>*/}
        {/*            <li>Street: {item.address.street}</li>*/}
        {/*            <li>Suite: {item.address.suite}</li>*/}
        {/*            <li>City: {item.address.city}</li>*/}
        {/*            <li>Zipcode: {item.address.zipcode}</li>*/}
        {/*            <li>Latitude: {item.address.geo.lat}</li>*/}
        {/*            <li>Longitude: {item.address.geo.lng}</li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}

        </div>
    );
};

export default User;