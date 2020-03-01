import React, { PureComponent }   from 'react';
import { connect }                from 'react-redux';
import { Carousel, notification } from 'antd';
import { withRouter }             from "react-router";
import RecipeHistory              from '../components/RecipeHistory';
import Loader                     from '../components/Loader';
import * as RecipesAction         from '../actions/recipes';

import './RecipeDetail.scss';


class RecipeDetail extends PureComponent {
    state = {
        isLoading : true
    }

    componentDidMount() {
        const { match } = this.props;

        this.loadContent(match.params.id)
    }

    async loadContent (id) {
        try {
            this.setState({isLoading : true})

            await this.props.showRecipe(id);

            this.setState({isLoading : false})
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });

            this.props.history.push('/recipes');
        }
    }

    render() {
        const { isLoading } = this.state;
        const { recipeHistory } = this.props;

        if (isLoading) return (
            <div className='Recipes'>
                <Loader />
            </div>
        )

        return (
            <div className ='RecipeDetail'>
                <div className='Carousel_Wrapper'>
                    <Carousel >
                        {
                            recipeHistory.map(recipe => {
                                return <RecipeHistory key={recipe.version} data={recipe} />
                            })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}

const RoutedDetail = withRouter(RecipeDetail)

function mapStateToProps(state) {
    return {
        recipeHistory : state.recipes.recipeHistory,
    };
}

export default connect(mapStateToProps, RecipesAction)(RoutedDetail);



