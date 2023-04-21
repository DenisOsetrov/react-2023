// import React from 'react';
// const UserComponent = (props) => {
//     let {item} = props;
//     return (
//         <div>
//             <h2>{item.name}</h2>
//             <p>{item.email}</p>
//         </div>
//     );
// };
// export default UserComponent;

// Ще змінюємо, вдосконалюємо, робимо вишуканий варіант!

import React from 'react';
const UserComponent = (props) => {
    let {item: {id, name, email}} = props;
    return (
        <div>
            <h2>{name} {id}</h2>
            <p>{email}</p>
        </div>
    );
};
export default UserComponent;