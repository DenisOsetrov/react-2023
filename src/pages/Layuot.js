import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layuot = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
            </ul>
            Layuot
            <Outlet/>
        </div>
    );
};

export default Layuot;