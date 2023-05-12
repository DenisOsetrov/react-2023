import {Link, Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Comment from "./components/comments/Comment";
import Posts from "./components/posrs/Posts";
import Users from "./components/users/Users";
import UserDetails from "./components/userdetails/UserDetails";
import PostDetails from "./components/postdetails/PostDetails";

function App() {
    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'home'}>home</Link></li>
                    <li><Link to={'layout'}>layout</Link></li>
                    <li><Link to={'about'}>about</Link></li>
                </ul>
            </div>
            <div>
                <h2>View</h2>

                {/*Працювати будемо з компонентою {'/home'}*/}
                <Routes>
                    <Route path={'/home'} element={<Home/>}>
                        <Route path={'users'} element={<Users/>}>
                            <Route path={':id'} element={<UserDetails/>}/>
                        </Route>
                        <Route path={'posts'} element={<Posts/>}>
                            <Route path={':id'} element={<PostDetails/>}/>
                                >
                        </Route>
                        <Route path={'comments'} element={<Comment/>}/>
                    </Route>
                    <Route path={'/layout'} element={<Layout/>}/>
                    <Route path={'/about'} element={<About/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default App;








