import React, { PureComponent } from 'react';
import Header                   from './Header';
import Footer                   from './Footer';


export default class MainLayout extends PureComponent {
    render() {
        return (
            <div className='MainLayout'>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
