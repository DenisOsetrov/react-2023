import React from 'react';
import {useNavigate} from "react-router-dom";

const PostComponent = ({item}) => {

    // використаємо hook, який буде переміщувати не через Link, а через код
    let navigator = useNavigate();

    let {title, id} = item;

    return (
        <div>
            {title}
            <button onClick={() => navigator(id.toString())}>click me to get details</button>
        </div>
    );
};

export default PostComponent;