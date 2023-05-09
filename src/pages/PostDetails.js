import React, {useEffect, useState} from 'react';
import ApiService from "../services/api.services";
import {useParams} from "react-router-dom";

const PostDetails = () => {

    let [post, setPost] = useState({});

    let apiService = new ApiService('posts'); // Створюємо новий сервіс і наповнюємо його новим значенням posts.

    // використовуємо hook useParams(), який відслідковіє всі динамічні зміни url.
    let {id} = useParams();

    useEffect(() => {
        apiService.getSingleData(id).then(value => setPost(value));
    }, [id])


    return (
        <div>
            <p></p>   {/*робимо відступ від усіх постів*/}
            {/*виводимо post через {JSON.stringify(post)}.   Воно зайве, треба вибалити (це для зразка)*/}
            {/*{JSON.stringify(post)}*/}

            {/*виводимо post через div*/}
            <div>
                <p>User ID: ${post.userId}</p>
                <p>ID: ${post.id}</p>
                <p>Title: ${post.title}</p>
                <p>Body: ${post.body}</p>
            </div>
        </div>
    );
};

export default PostDetails;