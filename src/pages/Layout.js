import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <h3>Sun menu</h3>
                <ol>
                    {/*<li><Link to={'/layout/users'}>users page</Link></li>*/}
                    {/*<li><Link to={'/layout/posts'}>all posts</Link></li>*/}
                    {/*<li><Link to={'/layout/comments'}>comments</Link></li>*/}

                    {/*Видаляємо /layout і спрощуємо код, залишаючись в компоненті Layout*/}
                    <li><Link to={'users'}>users page</Link></li>
                    <li><Link to={'posts'}>all posts</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>
            <Outlet/> {/*Відображає Route з батьківського компоненту*/}
        </div>
    );
};

export default Layout;