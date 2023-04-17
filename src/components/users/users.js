import React from 'react';
import User from "../user/User";

function Users ({xxx}) {
    return (
        <div>
            {
                xxx.map((value, index) => (<User item = {value} key={index}/>))
//<User/> - це виклик компоненти;компонента - функцієя,
// яка відображає частину розмітки з інформацією/
// key={index} - Зазначаємо унікальний ключ для кожного елементу масива. Можна id.
            }
        </div>
    );
}

export default Users;




















