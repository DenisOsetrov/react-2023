import React from 'react';
import {Link} from "react-router-dom";

// item - буде називатися props, що прийде з json.placeholder, з неї деструктуруємо id & name
// якщо const UserComponent = ({item:{id, name}}) диструктуруємо так, то буде лише 2 компонента в {}
const UserComponent = ({item}) => {

    let {id, name} = item;         //з усього об'єкти беремо лише 2 параметра

    return (
        <div>
            {/*Link - додаємо в рядок слово-посилання на інші деталі user. Id-відразу створює необхідну url з номером*/}
            {id} - {name} <Link to={id.toString()} state={{...item}}>details</Link>
        </div>
    );
};

export default UserComponent;