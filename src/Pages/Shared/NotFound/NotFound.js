import React from 'react';
import notFound from '../../../images/not_found.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;