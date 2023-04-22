// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//
// Виводить всі пости під кнопкою!



import React, {useState} from 'react';


const Post = ({post}) => {
    const [show, setShow] = useState(false);
    const {id, title} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
                    {/*В setShow() вибираємо 'prevState' і задаємо параметри*/}
            <button onClick={() => setShow(prevState => !prevState)}>Detail</button>
            <hr/>
            {
                show &&
                (<div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
                <div>userId: {post.userId}</div>
                </div>)
            }
        </div>
    );
};

export default Post;