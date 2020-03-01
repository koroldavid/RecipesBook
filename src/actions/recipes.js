import * as constants from '../constants/recipes';
import api            from '../apiSingleton';

export function getRecipes (params = {page: 1, perPage: 6}) {
    return async dispatch => {
        try {
            const { data : recipes, total } = await api.recipes.list(params);

            dispatch({
                type    : constants.GET_RECIPES,
                payload : {
                    recipes,
                    total,
                    params
                }
            });
        } catch (error) {
            throw error
        }
    };
}

export function showRecipe (id) {
    return async dispatch => {
        try {
            const recipeHistory = await api.recipes.show(id);

            dispatch({
                type    : constants.SHOW_RECIPE,
                payload : {
                    recipeHistory
                }
            });
        } catch (error) {
            throw error
        }
    };
}

export function createRecipe ({item}) {
    return async dispatch => {
        try {
            const newRecipe = await api.recipes.create(item)

            dispatch({
                type    : constants.CREATE_RECIPE,
                payload : {
                    recipe : newRecipe
                }
            });
        } catch (error) {
            throw error
        }
    };
}

export function paginationChange ({page, perPage}) {
    return  dispatch => {
        dispatch({
            type    : constants.PAGINATION_CHANGE,
            payload : {
                page,
                perPage
            }
        });
    };
}