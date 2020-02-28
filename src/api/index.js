import ApiClient  from './ApiClient.js';

import ReceptsAPI from './Recepts.js';


export default function ({ apiEndpoint, apiPrefix } = {}) {
    if (!apiEndpoint) throw new Error('[apiEndpoint] required');

    const api = new ApiClient({ endpoint: apiEndpoint, prefix: apiPrefix });

    return {
        apiClient     : api,
        recepts       : new ReceptsAPI({ apiClient: api })
    }
}