// import Posts from "./components/Posts";

import Launches from "./components/launches";

function App() {
  return (
    <div>
        {/*Homework - TASK 1!*/}
        {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
        {/*відобразити кожну інформацію (id,title) з кожного поста (компонента Post)*/}
        {/*Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)*/}
        {/*Posts - 1 task (+2 fale: Posts.js, Post.js)*/}

        {/*<Posts/>*/}

        {/*Task 2!*/}
        {/*є API от SpaceX*/}
        {/*https://api.spacexdata.com/v3/launches/*/}
        {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
        {/*репрезентувати тільки окремі поля (name, year, patch_small)*/}

        <Launches/>

    </div>
  );
}

export default App;





