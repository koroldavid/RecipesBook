import * as constants from '../constants/recepts';
import api            from '../apiSingleton';

export function getRecepts (params) {
    return async dispatch => {
        try {
            const recepts = await api.recepts.list(params);

            dispatch({
                type    : constants.GET_RECEPTS,
                payload : {
                    recepts
                }
            });
        } catch (error) {
            throw error
        }
    };
}

export function showRecept (id) {
    return async dispatch => {
        try {
            const receptHistory = await api.recepts.show(id);

            dispatch({
                type    : constants.SHOW_RECEPT,
                payload : {
                    receptHistory
                }
            });
        } catch (error) {
            throw error
        }
    };
}

export function createRecept ({data}) {
    return async dispatch => {
        try {
            const newRecept = await api.recepts.create(data)

            dispatch({
                type    : constants.CREATE_RECEPT,
                payload : {
                    recept : newRecept
                }
            });
        } catch (error) {
            throw error
        }
    };
}