import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div id="enter">
                <Link to="/home">
                    <button id="enterBtn">Enter</button>
                </Link>
            </div>
        );
    }
}

export default App;