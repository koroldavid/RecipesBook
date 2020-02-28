import produce        from 'immer';

import * as constants from '../constants/recepts';


const initialState = {
    receptsTotal : 120,
    recepts : [
        {
            id          : 1,
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
        },
        {
            id          : 2,
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
        },
        {
            id          : 3,
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
        },
        {
            id          : 4,
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
        },
        {
            id          : 5,
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
        },
        {
            id          : 6,
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
        }
    ],
    receptHistory : [
        {
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
            version     : 1
        },
        {
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
            version     : 2
        },
        {
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
            version     : 3
        },
        {
            title       : 'Recipe Title',
            description : 'Recipe Description',
            guide       : 'Recipe Guide',
            ingredients : 'Recipe Ingridients',
            dateCreated : '2020.28.02 03.45',
            version     : 4
        }
    ]
};

/* eslint-disable no-param-reassign, default-case, no-case-declarations */
export default function recepts(state = initialState, action) {
    return produce(state, draftState => {
        switch (action.type) {
            case constants.GET_RECEPTS:
                draftState.recepts = [ ...action.payload.recepts ];
                break;
            case constants.SHOW_RECEPT:
                draftState.receptHistory = [ ...action.payload.receptHistory ];
                break;
            case constants.CREATE_RECEPT:
                draftState.recepts = [ action.payload.recept, ...state.recepts ];
                break;
        }
    });
}
