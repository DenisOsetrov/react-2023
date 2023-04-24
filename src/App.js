// import React from 'react';
// import {useForm} from "react-hook-form";
//
// const App = () => {
//     let {register, handleSubmit,} = useForm(); // register - автоматизує процес наповнення input
//                                     // Другий параметр має багато функцій. handleSubmit!
//     const onSubmit = (data) => {
//         console.log(data);
//     }
//     return (
//              <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("title", {required:true})}/>  {/* інпут являє собою пропертю об'єкта. {required:true} - обов'язкове заповнення поля*/}
//                 <input {...register("body")}/>                           {/*В додаткові хар-ки можна передавати різні значення, min, max */}
//                 <input type="submit" value={'save post'}/>
//             </form>
//         </div>
//     );
// };
//
// export default App;




// Різні функції форм і властивості
import React from "react";
import {useForm} from "react-hook-form"
import {savePost} from "./service/fetchAndAxios";

const App = () => {
    let {register, handleSubmit, watch, formState: {errors}} = useForm({defaultValues: {title: 'title default'}}); // defaultValues - заповнює інпут по замовченню
    // watch - дозволяю спостерігати за заповненням інпуту.
    const onSubmit = (data) => {
        console.log(data);
        savePost(data).then(data => console.log(data))
    };

    console.log(watch('title'));

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", {required: true})}/> {/* інпут являє собою пропертю об'єкта. {required:true} - обов'язкове заповнення поля*/}
                {errors.title && <span>field is required</span>}
                <input {...register("body")}/> {/*В додаткові хар-ки можна передавати різні значення, min, max */}
                <input type="submit" value={'save post'}/>

                <select {...register("userId")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </form>
        </div>
    );
};

export default App;