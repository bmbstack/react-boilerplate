import React, { PropTypes } from 'react'; // eslint-disable-line
import Counter from '../dumbs/counter';

import { DatePicker } from 'antd';

const ExampleLayout = ({ children }) => 
    <div>
        <Counter content={ 1 } />
        <div>
            { children }
        </div>
        <div>
            <DatePicker />
        </div>
    </div>;

ExampleLayout.propTypes = {

};

export default ExampleLayout;
