import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {

    const {id} = useParams(); // деструктуризуємо змінну і виводимо її id!

    const [post, setPost] = useState(null); // можна {} за потреби!

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value})
            })
    }, [id])   // useEffect без [] працює справно, але можна в [] прописати id!

    return (
        <div>
            {/*Обов'язково зробити перевірку на наявнівсть post*/}
            {post && JSON.stringify(post)}
        </div>
    );
};

export default PostDetails;








