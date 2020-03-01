import React                           from 'react';
import { connect }                     from 'react-redux';
import { Link }                        from 'react-router-dom';
import ModalCreate                       from '../components/ModalCreate';
import logo                            from '../icons/logo.svg';
import { ModalCreate as createSchema } from './../utils/schemes';
import * as RecipesAction              from '../actions/recipes';

import './Header.scss';


function Header(props) {
    const apiAdapter = {
        create : props.createRecipe
    }

    return (
        <header>
            <Link className='Logo' to='/main'>
                <img src={logo} alt='logo' />
                <div className='Logo_title'>Recipe Book</div>
            </Link>
            <div className='Header_Button'>
                <ModalCreate 
                    schema={createSchema}
                    apiAdapter={apiAdapter}
                    onInteract={props.getRecipes}
                />
            </div>
        </header>
    );
}

export default connect(null, RecipesAction)(Header);
