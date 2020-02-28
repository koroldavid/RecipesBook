import React, { PureComponent }         from 'react';
import { Modal, Icon, notification, Button }    from 'antd';
import Link                             from './Link'
import ModalUpdate                      from './ModalUpdate';
import api                              from '../apiSingleton';
import { ModalUpdate as schemaUpdate }                  from '../utils/schemes';


import './Recept.scss';

export default class Recept extends PureComponent {
    constructor(props) {
        super(props);
    
        this.deleteConfirm = this.deleteConfirm.bind(this);
    }

    async deletePromise() {
        try {
            const {getRecepts, id} = this.props;

            await api.recepts.delete(id);
            await getRecepts();
        } catch (error) {
            notification.error({
                message     : 'Error occure',
                description : error.message
            });
        }
        
    }

    deleteConfirm() {
        Modal.confirm({
          title      : 'Deleting recept',
          content    : 'Are you sure to delete this recept?',
          okText     : 'Delete',
          cancelText : 'Cancle',
          onOk       : () => this.deletePromise()
        });
      }

    render() {
        const { data, getRecepts } = this.props;
        const { title, description, guide, ingredients, dateCreated, id } = data;

        return (
            <div className ='Recept'>
                <div className='Recept_Title'>{title}</div>
                <div className='Recept_Description'>{description}</div>
                <div className='Recept_Guide'>{guide}</div>
                <div className='Recept_Ingredients'>{ingredients}</div>
                <div className='Recept_Created'>{dateCreated}</div>
                <div className='Recept_Delete'>
                    <Icon 
                        type="close-circle" 
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                        onClick={this.deleteConfirm}
                    />
                </div>
                <div className='Recept_Options'>
                    <ModalUpdate
                        schema={schemaUpdate}
                        item={data}
                        onInteract={getRecepts}
                    />
                    <Link url={`/recept/${id}`}>
                        <Button size='large'>View all versions</Button>
                    </Link>

                </div>
            </div>
        );
    }
}

