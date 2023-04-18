import React from 'react';

const Character = ({character}) => {
    const {id,name, status, species, gender, image,created } = character;
    return (
        <div>
           <div>id : {id} </div>
           <div>name : {name} </div>
           <div>status : {status} </div>
           <div>species : {species} </div>
           <div>gender : {gender} </div>
           <img src={image} alt={name}/>
           <p>created : {created} </p>
        </div>
    );
};
export default Character;










