// import IncrementDecrement from "./IncrementDecrement/IncrementDecrement";

import './App.css'
import Comments from "./components/Comments/Comments";
import FullComment from "./fullComment/FullComment";
import {useState} from "react";

function App() {

    let [chosenComment, setChosenComment] = useState(null);


    //Щоб дістати інформацію, що знаходиться на 2 поверши нище використовуємо "state lifting"
    // виводить справа коментарі через CSS параметри.
    const lift = (obj)=> {
    setChosenComment({...obj})
    }
  return (
    <div className={'container'}>

      {/*Створюємо компонент з кнопкою, який рахує кліки!*/}
      {/*  Треба розкоментувати файл IncrementDecrement*/}
      {/*<IncrementDecrement/>*/}

        <div className={'left-side'}>
            <Comments lift={lift}/>
        </div>

        {
            chosenComment &&
           ( <div className={'right-side'}>
                <FullComment value={chosenComment}/>
            </div>)
        }

    </div>
  );
}

export default App;



