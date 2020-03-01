import ApiClient  from './ApiClient.js';

import RecipesAPI from './Recipes.js';


export default function ({ apiEndpoint, apiPrefix } = {}) {
    if (!apiEndpoint) throw new Error('[apiEndpoint] required');

    const api = new ApiClient({ endpoint: apiEndpoint, prefix: apiPrefix });

    return {
        apiClient     : api,
        recipes       : new RecipesAPI({ apiClient: api })
    }
}