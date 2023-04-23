import {useState} from "react";
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
    console.log(e.target.login.value);
    console.log(e.target.password.value);
    e.preventDefault();                 //зупиняємо перезапуск
    console.log(formState);
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
