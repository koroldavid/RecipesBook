import Input from '../components/Input';
import api   from '../apiSingleton';

export const ModalCreate = {
    trigger : {
        label : 'Create recipe',
        type  : 'primary',
        icon  : 'plus'
    },
    fields : [
        {
            name      : 'title',
            label     : 'Title',
            component : Input
        },
        {
            name      : 'description',
            label     : 'Brief description',
            component : Input
        },
        {
            name      : 'guide',
            label     : 'Guide',
            component : Input
        },
        {
            name      : 'ingredients',
            label     : 'Ingredients',
            component : Input
        }
    ],
    labels : {
        title          : 'New recipe',
        cancelButton   : 'Cancel',
        submitButton   : 'Create',
        successMessage : 'Recipe succesfully created',
        errorMessage   : 'Error occur'
    }
}

export const ModalUpdate = {
    handler : ({item}) => api.recipes.edit(item),
    trigger : {
        type  : 'primary',
        label : 'Edit',
        icon  : 'edit',
        size  : 'large'
    },
    fields : [
        {
            name      : 'title',
            label     : 'Title',
            component : Input
        },
        {
            name      : 'description',
            label     : 'Brief description',
            component : Input
        },
        {
            name      : 'guide',
            label     : 'Guide',
            component : Input
        },
        {
            name      : 'ingredients',
            label     : 'Ingredients',
            component : Input
        }
    ],
    labels : {
        title          : 'Edit recipe',
        cancelButton   : 'Cancel',
        submitButton   : 'Edit',
        successMessage : 'Recipe succesfully edited',
        errorMessage   : 'Error occur'
    }
}