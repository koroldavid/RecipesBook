import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { Pagination, notification } from 'antd';
import Recipe                       from '../components/Recipe';
import Loader                       from '../components/Loader';
import * as RecipesAction           from '../actions/recipes';
import api                          from '../apiSingleton';

import './Recipes.scss';

class Recipes extends PureComponent {
    constructor(props) {
        super(props);
    
        this.loadRecipes       = this.loadRecipes.bind(this);
        this.changePage        = this.changePage.bind(this);
        this.changePageSize    = this.changePageSize.bind(this);
        this.asyncDeleteRecipe = this.asyncDeleteRecipe.bind(this);
    }

    state = {
        isLoading : true
    }

    componentDidMount() {
        this.loadRecipes();
    }

    async loadRecipes () {
        try {
            const { page, perPage } = this.props;
            const params = { page, perPage };

            await this.setState({isLoading : true})

            await this.props.getRecipes(params);

            this.setState({isLoading : false})
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });

            this.setState({isLoading : false})
        }
    }

    async changePageSize(page, perPage) {
        try {
            await this.props.paginationChange({ page, perPage });

            await this.loadRecipes();
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });
        }
    }

    async changePage(page, perPage) {
        try {
            await this.props.paginationChange({ page, perPage });

            await this.loadRecipes();
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });
        }
    }

    async asyncDeleteRecipe(id) {
        try {
            await api.recipes.delete(id);
            await this.loadRecipes();
        } catch (error) {
            notification.error({
                message     : 'Error occure',
                description : error.message
            });
        }
    }

    render() {
        const { recipes, updateRecipe, total, perPage, page } = this.props;
        const { isLoading } =this.state;

        if (isLoading) return (
            <div className ='Recipes'>
                <Loader />
            </div>
        )

        return (
            <div className ='Recipes'>
                {
                    recipes.length ? 
                        <React.Fragment>
                            {
                                recipes.map(recipe => {
                                    return <Recipe 
                                        key={recipe._id}
                                        data={recipe}
                                        getRecipes={this.loadRecipes}
                                        updateRecipe={updateRecipe}
                                        deleteRecipe={this.asyncDeleteRecipe}
                                    />
                                })
                            }
                            <div className='Paginator'>
                                <Pagination
                                    size="small" 
                                    total={total}
                                    pageSize={perPage}
                                    current={page}
                                    showSizeChanger 
                                    showQuickJumper
                                    pageSizeOptions={['6', '12', '18', '24', '30', '60']}
                                    onShowSizeChange={this.changePageSize}
                                    onChange={this.changePage}
                                />
                            </div>
                        </React.Fragment>
                    : <div className='Recipes_empty'>No recipts. Please create your new recipt</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipes : state.recipes.recipes,
        total   : state.recipes.total,
        page    : state.recipes.page,
        perPage : state.recipes.perPage
    };
}

export default connect(mapStateToProps, RecipesAction)(Recipes);

