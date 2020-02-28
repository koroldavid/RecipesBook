import React, { PureComponent }   from 'react';
import { connect }                from 'react-redux';
import { Carousel, notification } from 'antd';
import { withRouter }             from "react-router";
import ReceptHistory              from '../components/ReceptHistory';
import Loader                     from '../components/Loader';
import * as ReceptsAction         from '../actions/recepts';

import './ReceptDetail.scss';


class ReceptDetail extends PureComponent {
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

            await this.props.showRecept(id);

            this.setState({isLoading : false})
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });

            this.props.history.push('/recepts');
        }
    }

    render() {
        const { isLoading } = this.state;
        const { receptHistory } = this.props;

        if (isLoading) return (
            <div className='Recepts'>
                <Loader />
            </div>
        )

        return (
            <div className ='ReceptDetail'>
                <div className='Carousel_Wrapper'>
                    <Carousel >
                        {
                            receptHistory.map(recept => {
                                return <ReceptHistory key={recept.version} data={recept} />
                            })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}

const RoutedDetail = withRouter(ReceptDetail)

function mapStateToProps(state) {
    return {
        receptHistory : state.recepts.receptHistory,
    };
}

export default connect(mapStateToProps, ReceptsAction)(RoutedDetail);



