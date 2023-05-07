import React, {FC} from 'react';
import {IUser} from "../interface/user.interfase";
import User from "./User";


interface IProps {
    users: IUser[]
}

const Users: FC<IProps> = ({users}) => {
    return (
        <div>
            <h1>USERS</h1>

            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;







