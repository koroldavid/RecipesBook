import React, { PureComponent }         from 'react';

import './ReceptHistory.scss';

export default class ReceptHistory extends PureComponent {

    render() {
        const { data } = this.props;
        const { title, description, guide, ingredients, dateCreated, version } = data;

        return (
            <div className ='ReceptHistory'>
                <div className='Recept_Title'>{`${title.length > 15 ? title.slice(0, 13)+'...' : title}`}</div>
                <div className='Recept_Description'>{`${description.length > 40 ? description.slice(0, 37)+'...' : description}`}</div>
                <div className='Recept_Guide'>{`${guide.length > 150 ? guide.slice(0, 147)+'...' : guide}`}</div>
                <div className='Recept_Ingredients'>{`${ingredients.length > 150 ? ingredients.slice(0, 147)+'...' : ingredients}`}</div>
                <div className='Recept_Created'>{dateCreated}</div>
                <div className='Recept_Version'>
                    v. {version}
                </div>
            </div>
        );
    }
}

