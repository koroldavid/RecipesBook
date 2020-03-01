import React, { PureComponent }        from 'react';
import { Modal, Icon, Button }         from 'antd';
import { Link }                        from 'react-router-dom';
import ModalUpdate                     from './ModalUpdate';
import { ModalUpdate as schemaUpdate } from '../utils/schemes';


import './Recipe.scss';

export default class Recipe extends PureComponent {
    constructor(props) {
        super(props);
    
        this.deleteConfirm = this.deleteConfirm.bind(this);
    }

    deleteConfirm() {
        const {deleteRecipe, data} = this.props;

        Modal.confirm({
          title      : 'Deleting recipe',
          content    : 'Are you sure to delete this recipe?',
          okText     : 'Delete',
          cancelText : 'Cancle',
          onOk       : () => deleteRecipe(data._id)
        });
      }

    render() {
        const { data, getRecipes } = this.props;
        const { title, description, guide, ingredients, dateCreated, _id: id } = data;

        return (
            <div className ='Recipe'>
                <div className='Recipe_Title'>{title}</div>
                <div className='Recipe_Description'>{description}</div>
                <div className='Recipe_Guide'>{guide}</div>
                <div className='Recipe_Ingredients'>{ingredients}</div>
                <div className='Recipe_Created'>
                    {`${dateCreated.split("T")[0].split("-").join(".")}  ${dateCreated.split("T")[1].substring(0, 8)}`}
                </div>
                <div className='Recipe_Delete'>
                    <Icon 
                        type="close-circle" 
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                        onClick={this.deleteConfirm}
                    />
                </div>
                <div className='Recipe_Options'>
                    <ModalUpdate
                        schema={schemaUpdate}
                        item={data}
                        onInteract={getRecipes}
                    />
                    <Link to={`/recipe/${id}`}>
                        <Button size='large'>View all versions</Button>
                    </Link>

                </div>
            </div>
        );
    }
}

