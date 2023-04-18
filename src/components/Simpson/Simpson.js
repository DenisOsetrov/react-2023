import React from 'react';

const Simpson = ({simpson}) => {

    const {id, name, surname, info, photo} = simpson

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <p>info: {info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;






