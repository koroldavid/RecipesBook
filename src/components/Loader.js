import React from 'react';
import {Icon} from 'antd';

import './Loader.scss';


export default function Loader(props) {
    return (
        <div className='Loader'>
            <Icon type='loading' />
        </div>
    );
}