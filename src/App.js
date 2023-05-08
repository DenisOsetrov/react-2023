import {Link, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";  // Імпортуємо з бібліотеки, яку підключили

// Розглянемо два підходи, як можна на перед прокидувати інформацію.
// Для цього скористаємося двома компонентами Users & Posts.



function App() {
  return (
    <div>
      <div>
        <h2>
            Main page
        </h2>
        <ul>
          {/*  Всі компоненти ul залишаються незміннили, змінюються лише Route*/}
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/layout'}>Layout</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </div>
      <div>
        <h2>content</h2>

         <Routes>   {/* Викликаємо компонент <Routes>, в якому будуть наші Route.*/}

             {/* Можна по default завантажувати копроненти.  Треба, щоб і верхній компонент був дефолтний <li><Link to={'/'}>Home</Link></li>*/}
             {/*<Route index element={<Home/>}/>*/}

             <Route path={'/home'} element={<Home/>}/>

             {/*Зробимо, щоб відображалися компонент з підкомпонентами - вкладеннями users, posts, comments*/}
             <Route path={'/layout'} element={<Layout/>}>
                    {/*<Route path={'/layout/users'} element={<Users/>}/>*/}
                    {/*<Route path={'/layout/posts'} element={<Posts/>}/>*/}
                    {/*<Route path={'/layout/comments'} element={<Comments/>}/>*/}

                    {/*Видаляємо /layout і спрощуємо код, залишаючись в компоненті Layout*/}
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
             </Route>
             <Route path={'/about'} element={<About/>}/>
         </Routes>

      </div>
    </div>
  );
}

export default App;
