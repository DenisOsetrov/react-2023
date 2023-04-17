import './App.css';
import Users from "./components/users/users";

const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// function App() {
//
//     let rsc = 'Hello, world!'
//
//         return (
//         <div className="App">
//             <h3>{rsc}</h3>
//         </div>
//     );
// }
// export default App;


function App() {

        return (
        <div>
            <Users xxx ={users}/>
        </div>
    );
}

export default App;
