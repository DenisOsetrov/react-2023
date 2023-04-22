import React from 'react';

const Post = ({post, setPost}) => {
    const {id, title} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=> setPost(post)}>Detail</button>
        </div>
    );
};

export default Post;