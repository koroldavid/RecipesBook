import React                           from 'react';
import { connect }                     from 'react-redux';
import { Link }                        from 'react-router-dom';
import ModalType                       from '../components/ModalType';
import logo                            from '../icons/logo.svg';
import { ModalCreate as createSchema } from './../utils/schemes';
import { createRecept }                from '../actions/recepts';

import './Header.scss';


function Header(props) {
    const apiAdapter = {
        create : props.createRecept
    }

    return (
        <header>
            <Link className='Logo' to='/main'>
                <img src={logo} alt='logo' />
                <div className='Logo_title'>Recipe Book</div>
            </Link>
            <div className='Header_Button'>
                <ModalType 
                    schema={createSchema}
                    apiAdapter={apiAdapter}
                />
            </div>
        </header>
    );
}

export default connect(null, {createRecept})(Header);
