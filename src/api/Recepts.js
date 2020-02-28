import Base from './Base.js';


export default class Borrowers extends Base {
    list = async (params = {}) => {
        try {
            const queryParams = {
                offset : params.perPage * (params.page - 1),
                limit  : params.perPage
            }

            const { data = [] } = await this.apiClient.get('/recepts', queryParams);

            return data;
        } catch (error) {
           throw error
        }
    }

    create = async (body) => {
        try {
            return await this.apiClient.post('/recepts', body);
        } catch (error) {
            throw error;
        }
    }

    show = async (id) => {
        try {
            const { data = {} } = await this.apiClient.get(`/recepts/${id}`);

            return data;
        } catch (error) {
            throw error;
        }
    }

    edit = async (body) => {
        try {
            return await this.apiClient.put(`/recepts/${body.id}`, {...body});
        } catch (error) {
            throw error;
        }
    }

    delete = async (id) => {
        try {
            const { data = {} } = await this.apiClient.delete(`/recepts/${id}`);

            return data;
        } catch (error) {
            throw error;
        }
    }
}
