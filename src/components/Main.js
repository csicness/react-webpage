import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    render() {
        return(
            <div id="container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Main;