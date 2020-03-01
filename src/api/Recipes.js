import Base from './Base.js';


export default class Borrowers extends Base {
    list = async (params = {}) => {
        try {
            const queryParams = {
                offset : params.perPage * (params.page - 1),
                limit  : params.perPage
            }
            
            return await this.apiClient.get('/recipes', queryParams);
        } catch (error) {
           throw error
        }
    }

    create = async (body) => {
        try {
            return await this.apiClient.post('/recipes', body);
        } catch (error) {
            throw error;
        }
    }

    show = async (id) => {
        try {
            return await this.apiClient.get(`/recipes/${id}`);
        } catch (error) {
            throw error;
        }
    }

    edit = async (body) => {
        try {
            return await this.apiClient.put(`/recipes/${body._id}`, {...body});
        } catch (error) {
            throw error;
        }
    }

    delete = async (id) => {
        try {
            return await this.apiClient.delete(`/recipes/${id}`);
        } catch (error) {
            throw error;
        }
    }
}
