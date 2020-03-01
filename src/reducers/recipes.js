import produce        from 'immer';

import * as constants from '../constants/recipes';


const initialState = {
    page    : 1,
    perPage : 6,
    total   : 0,
    recipes : [],
    recipeHistory : [
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
export default function recipes(state = initialState, action) {
    return produce(state, draftState => {
        switch (action.type) {
            case constants.GET_RECIPES:
                draftState.recipes = [ ...action.payload.recipes ];
                draftState.total   = action.payload.total;
                draftState.perPage = action.payload.params.perPage;
                draftState.page    = action.payload.params.page;
                break;
            case constants.SHOW_RECIPE:
                draftState.recipeHistory = [ ...action.payload.recipeHistory ];
                break;
            case constants.CREATE_RECIPE:
                draftState.recipes = [ action.payload.recipe, ...state.recipes ];
                break;
            case constants.PAGINATION_CHANGE:
                draftState.perPage = action.payload.perPage;
                draftState.page    = action.payload.page;
                break;

                
        }
    });
}
