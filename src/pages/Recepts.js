import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { Pagination, notification } from 'antd';
import Recept                       from '../components/Recept';
import Loader                       from '../components/Loader';
import * as ReceptsAction           from '../actions/recepts';

import './Recepts.scss';

class Recepts extends PureComponent {
    constructor(props) {
        super(props);
    
        this.changePage     = this.changePage.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
    }

    state = {
        perPage   : 6,
        page      : 1,
        isLoading : true
    }

    componentDidMount() {
        const { page, perPage } = this.state
        const params = { page, perPage };

        this.loadContent(params)
    }

    async loadContent (params) {
        try {
            this.setState({isLoading : true})

            await this.props.getRecepts(params);

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
            const params = { page, perPage };

            await this.loadContent(params);

            this.setState({ page, perPage });
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });
        }
    }

    async changePage(page, perPage) {
        try {
            const params = { page, perPage };

            await this.loadContent(params);

            this.setState({ page });
        } catch (error) {
            notification.error({
                message     : 'Error occur',
                description : error.message
            });
        }
    }

    render() {
        const { recepts, getRecepts, updateRecet, total } = this.props;
        const { perPage, page, isLoading } =this.state;

        if (isLoading) return (
            <div className ='Recepts'>
                <Loader />
            </div>
        )

        return (
            <div className ='Recepts'>
                {
                    recepts.length ? 
                        <React.Fragment>
                            {
                                recepts.map(recept => {
                                    return <Recept 
                                        key={recept.id}
                                        data={recept} 
                                        getRecepts={getRecepts}
                                        updateRecet={updateRecet}
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
                    : <div className='Recepts_empty'>No recipts. Please create your new recipt</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recepts : state.recepts.recepts,
        total   : state.recepts.receptsTotal
    };
}

export default connect(mapStateToProps, ReceptsAction)(Recepts);

