import {useState} from "react";
// import {createRef} from "react";  // Це для другого варіанту!
function App() {
  // let [login, setLogin] = useState('default');
  // let [password, setPassword] = useState('');
  //   function OnLoginChanche (e) {
  //       setLogin(e.target.value);
  //   }
  //   function OnPasswordChanche (e) {
  //       setLogin(e.target.value);
  //   }

  let [formState,setFormState]= useState({login: '', password: ''});

    function onSubmit (e) {
    // console.log(e.target.login.value);
    // console.log(e.target.password.value);

        e.preventDefault();                 //зупиняємо перезапуск браузера, тому можна відхопити дані в console.log
        console.log(formState);             // Або відправити інформацію на API!
  }
function onchange(e) {
     setFormState({...formState, [e.target.name]: e.target.value})
}

  return (
    <div>
       <form onSubmit={onSubmit}>
           <input type="text" name={'login'} value={formState.login} onChange={onchange}/>
           <input type="text" name={'password'} value={formState.password} onChange={onchange}/>
         <button>Submit</button>
       </form>
    </div>
  );
}

export default App;


        // Неконтрольований компонент форм!!!
// import React from 'react';
//
// const App = () => {
//
//     let login = createRef();
//     let password = createRef();
//
//     function onSubmit (e) {
//         console.log(login.current.value);
//         console.log(password.current.value);
//         // create obj && sent to API;
//         e.preventDefault();
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type="text" name={'login'} ref={login}/>
//                 <input type='text' name={'password'} ref={password}/>
//                 <button>log in</button>
//             </form>
//         </div>
//     );
// };
//
// export default App;
