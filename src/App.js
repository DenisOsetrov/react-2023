import {useRoutes} from "react-router-dom";
import Layuot from "./pages/Layuot";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import UserDetails from "./pages/UserDetails";
// як зробити Routing в виді об'єктів. Варіант з ангулара
//1. Встановити "react-router-dom": "^6.11.1"
//2. Обгорнути АРР в index.js в тег <BrowserRouter><App/></BrowserRouter>, ще можна обгортати зовнішній <div> компоненти.
//3. Будуємо об'єкт маршрутизації let routes.
//4. Створимо директорію Page і в ній Layuot.js
//5. Використаємо hook - useRoutes і виводимо element в <div>
//6. Будуємо копмпоненти Users.js i Posts.js в директорії page
//7. В Layuot записуємо <Outlet/>, бо всі дочірні елементи мають рендетирись в компоненті <Outlet/>
//8. В Users.js отримуємо інфу з jsonplaceholder, ітеруємо його.
//9. Створюєсо директорію components, в ній UserComponent (i PostComponent) і виводимо інфу про users
//10. Створюємо UserDetails в page. Оскільки компонента відображається в Users, то в ній будуємо <Outlet>
//11. Прокидуємо дані через state в Link в UserComponent.js
//12. Використовуємо в UserDetails.js hook useLocation(), дістаємо state і використовуємо.
//13. Далі працюємо таким чином з Posts (поки не зороблені залишаються)

function App() {

    let routes = [
        {
            path:'/',
            element: <Layuot/>,
            children: [
                // { element: <Users/>, index:true}]       children - додаємо інші компоненти; index:true- компонента за defolt
                {element: <Users/>,
                    path:'users',
                    children:[{path:':id', element: <UserDetails/>}]},
                {element: <Posts/>, path:'posts'},
                ]
        }];

    let element = useRoutes(routes);

    return (
    <div>
        {element}
    </div>
  );
}

export default App;
