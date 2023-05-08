// 1.  Зробити компонент, в якому буде форма, за допомоги якої можливо
//     створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//
// 2.  Зробити компонент, в якому буде форма, за допомоги якої можливо
//     створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
//
// 3.  http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин (з гілки lesson-3)
//
//     РОБОТА З 2-ма АРІ!

import React, {useState} from 'react';
import {PageEnum} from "./constants/page.enum";
import Header from "./components/Header/Header";
import CommentPage from "./pages/CommentPage";

import UserPage from "./pages/UserPage";
import CarPage from "./pages/CarPage";

const App = () => {

    // Щоб відображалася 1 page, а не всі 3, задамо умову для enum!
    const [choice, setChoice] = useState<PageEnum>(PageEnum.USERS)

    return (
        <div>
            <Header setChoice={setChoice}/>
            {choice === PageEnum.USERS && <UserPage/>}
            {choice === PageEnum.COMMENTS && <CommentPage/>}
            {choice === PageEnum.CARS && <CarPage/>}
        </div>
    );
};

export default App;










