import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import {Outlet} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value])
            })
    }, []);


    return (
        <div>
            {/*перенесли цей div сюди, щоб добре відображався*/}
            <div>
                <h4>post details view</h4>
                <Outlet/>
            </div>

            <div>
                <h3>All posts</h3>
                {posts.map(value => <Post key={value.id} item={value}/>)}
            </div>



        </div>
    );
};

export default Posts;












