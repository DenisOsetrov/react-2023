//              Через fetch

// import React from 'react';
//
// const FetchAndAxios = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default FetchAndAxios;


//      Через Axios!

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: { 'Content-type': 'application/json; charset=UTF-8'},
})

const savePost = (post) => axiosInstance.post('', post);

export { savePost };

