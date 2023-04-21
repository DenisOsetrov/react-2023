import React from 'react';

const Comment = ({value, lift}) => {
    return (
        <div>
            {
                <div>
                    <div>id - {value.id}</div>
                    <div>postId - {value.postId}</div>
                    <div>name - {value.name}</div>
                    <div>email - {value.email}</div>
                    <button onClick={() => {
                        lift(value);}
                    }>Details</button>
                </div>
            }
        </div>
    );
};

export default Comment;