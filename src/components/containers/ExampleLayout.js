import React from 'react';
import Counter from '../dumbs/counter';

export default ({ children }) => 
    <div>
        <Counter content={ 1 } />
        <div>
            { children }
        </div>
    </div>
