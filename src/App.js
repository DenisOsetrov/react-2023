// import Posts from "./components/Posts";

// import Launches from "./components/launches";
import {useState} from "react";
// import Posts from "./components/Posts";
import Users from "./components/Users";
import UserPosts from "./components/UserPosts";

function App() {

  // =======Це до 3-го завдання=======
  const [userId, setUserId] = useState();
  //==================================

  return (
    <div>
        {/*Homework - TASK 1!*/}
        {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
        {/*відобразити кожну інформацію (id,title) з кожного поста (компонента Post)*/}
        {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}
        {/*Posts - 1 task (+2 file: Posts.js, Post.js)*/}

        {/*<Posts/>*/}

        {/*Task 2!*/}
        {/*є API от SpaceX*/}
        {/*https://api.spacexdata.com/v3/launches/*/}
        {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
        {/*репрезентувати тільки окремі поля (name, year, patch_small)*/}

        {/*<Launches/>*/}


        {/*Task 3!*/}
        {/*Вивести всіх юзерів з плайсхолдеру.*/}
        {/*У кожного юзера має бути кнопка, яка буде показувати пости цього юзера.*/}
        {/*Пости мають виводитись під компонетою Users (в App компоненті).*/}

        <Users setUserId={setUserId}/>
          {
        userId && <UserPosts userId={userId}/>
          }

    </div>
  );
}

export default App;





