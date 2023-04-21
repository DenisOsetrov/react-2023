import React from 'react';

const FullComment = ({value}) => {
    return (
        <div>
            {
                JSON.stringify(value) // можна по іншому + розмітку зробити!
            }
        </div>
    );
};

export default FullComment;
