import React, {FC} from 'react';
import {IComment} from "../interface/comment.interfase";

interface IProps {
    comment: IComment;
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Comment;