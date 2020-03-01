import React, { PureComponent }         from 'react';

import './RecipeHistory.scss';

export default class RecipeHistory extends PureComponent {

    render() {
        const { data } = this.props;
        const { title, description, guide, ingredients, dateCreated, version } = data;

        return (
            <div className ='RecipeHistory'>
                <div className='Recipe_Title'>{`${title.length > 15 ? title.slice(0, 13)+'...' : title}`}</div>
                <div className='Recipe_Description'>{`${description.length > 40 ? description.slice(0, 37)+'...' : description}`}</div>
                <div className='Recipe_Guide'>{`${guide.length > 150 ? guide.slice(0, 147)+'...' : guide}`}</div>
                <div className='Recipe_Ingredients'>{`${ingredients.length > 150 ? ingredients.slice(0, 147)+'...' : ingredients}`}</div>
                <div className='Recipe_Created'>
                    {`${dateCreated.split("T")[0].split("-").join(".")}  ${dateCreated.split("T")[1].substring(0, 8)}`}
                </div>
                <div className='Recipe_Version'>
                    v. {version}
                </div>
            </div>
        );
    }
}

