import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Main from './components/Main';
import News from './components/News';
import Characters from './components/Characters';
import Story from './components/Story';
import About from './components/About';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
require('./styles/style.scss');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
            <Route path="home" component={Main}>
                <Route path="/news" component={News} />
                <Route path="/characters" component={Characters} />
                <Route path="/story" component={Story} />
                <Route path="/about" component={About} />
            </Route>
    </Router>,
    document.getElementById('app')
);