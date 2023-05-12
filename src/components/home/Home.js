import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3> Sub page menu</h3>
            <ol>
                <li>
                    <Link to={'users'}>Users page</Link>  {/*було так {'/home/users'}, тепер спростили*/}
                </li>
                <li>
                    <Link to={'posts'}>Posts page</Link>
                </li>
                <li>
                    <Link to={'comments'}>Comments page</Link>
                </li>
            </ol>

            <div>
                <h3>Sub view</h3>
                <Outlet/>
            </div>

        </div>

    );
};

export default Home;