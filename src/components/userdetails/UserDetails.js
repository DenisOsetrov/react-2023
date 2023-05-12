import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    // let location = useLocation();
    // console.log(location.state);

    let {state} = useLocation();

    return (
        <div>
        {/*В User.js є деструктурований об'єкт. Ми виведемо через JSON*/}
            {JSON.stringify(state)};
        </div>
    );
};

export default UserDetails;