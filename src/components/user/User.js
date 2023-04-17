import React from 'react';

const User = ({item}) => {
    return (
        <div>
            <div> name is {item.name}</div>
            <div> age - {item.age}</div>
            <div> Status is - {item.status.toString()}</div>
        </div>
    );
};

export default User;




















