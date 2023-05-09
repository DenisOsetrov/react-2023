import React, {useEffect, useState} from 'react';
import ApiService from "./services/api.services";
import PostComponent from "./components/Post.component";
import {Outlet} from "react-router-dom";

const Posts = () => {

    let apiService = new ApiService('posts');

    let[posts, setposts] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setposts(value));
    }, []);

    return (
        <div>
            {/*Виводить повідомлення після всіх постів*/}
            <Outlet/>
            {
                posts.map(value => <PostComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Posts;