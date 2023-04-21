// import React from 'react';
//
//   const App = () => {
//     const users = [
//       {name: 'vasya', age: 31, status: false},
//       {name: 'petya', age: 30, status: true},
//       {name: 'kolya', age: 29, status: true},
//       {name: 'olya', age: 28, status: false},
//       {name: 'max', age: 30, status: true},
//       {name: 'anya', age: 31, status: false},
//       {name: 'oleg', age: 28, status: false},
//       {name: 'andrey', age: 29, status: true},
//       {name: 'masha', age: 30, status: true},
//       {name: 'olya', age: 31, status: false},
//       {name: 'max', age: 31, status: true}
//     ];
//   return (
//       <div>
//         {
//           users.map((user) => {
//             return (
//                 <div>
//                   name - {user.name};
//                   age - {user.age};
//                   status - {user.status.toString()}
//                 </div>
//
//             )
//           })
//         }
//       </div>
//   );
// }
// export default App;

// import React, {useState} from 'react';
// import {logDOM} from "@testing-library/react";
// import {click} from "@testing-library/user-event/dist/click";
// const App = () => {
    
    // function click1() {
    //     console.log('click1 test')
    // }
    //
    // const click2 = () => {
    //     console.log('click2 test')
    // }

  // return (
  //     <div>
  //       <button onClick={click1}>click me1</button>
  //       <button onClick= {click2}>click me2</button>
  //     </div>
  // );

   // В цьому випадку функція працює в консолі, але число "0" не змінює.
//     let  counter = 0;
//     const increment = () => {
// counter++;
//         console.log(counter);
//     }
//     return (
//         <div>
//             <h1>{counter}</h1>
//           <button onClick={increment}>increment me</button>
//         </div>
//     );


    //                                   useState()

    //useState() є хуком (hook) у React, який дозволяє використовувати стан у функціональних компонентах.
    // useState() приймає початкове значення стану і повертає масив з двох елементів: перший елемент містить поточне значення стану, а другий елемент - функцію, яку можна використовувати для оновлення стану.

//     let [counter, setCounter] = useState(null);   //можна 0, або null. 0-відображається, null- тільки після натискання на button.
//     const increment = () => {
//         setCounter(++counter);     //setCounter(counter +1);
//     }
//     return (
//         <div>
//             <h2>{counter}</h2>
//             <button onClick={increment}>Increment me!</button>
//         </div>
//     )
// };
//
// export default App;


// useEffect(), використання АРІ з fetch
// import React, {useEffect, useState} from 'react';
//
// const App = () => {
//
//     let [users,setUsers] = useState([]);
//
//    useEffect(() => {
//        fetch('https://jsonplaceholder.typicode.com/users')
//            .then(value => value.json())
//            .then(value => {
//                setUsers(value);
//                console.log(value)
//            });
//    }, []);
//
//     return (
//         <div>
//             {
//                 users.map((value) => <div>
//                     <h2>{value.name}</h2>
//                     <p>{value.email}</p>
//                     </div>)
//             }
//         </div>
//     );
// };
//
// export default App;

// розкладаємо по папках!
// 1.Створюємо userComponents
import React, {useEffect, useState} from 'react';
import {getUsers} from "./services/userService";

const App = () => {

    let [users,setUsers] = useState([]);

   useEffect(() => {
       getUsers().then(value => setUsers(value));
   }, []);

    return (
        <div>
            {
                users.map((value) => <div>
                    <h2>{value.name}</h2>
                    <p>{value.email}</p>
                    </div>)
            }
        </div>
    );
};

export default App;








