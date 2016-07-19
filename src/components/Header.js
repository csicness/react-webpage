import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return(
            <header>
                <nav>
                    <Link to="/news" activeClassName="active">
                        News
                    </Link>
                    <Link to="/characters" activeClassName="active">
                        Characters
                    </Link>
                    <Link to="/story" activeClassName="active">
                        Story
                    </Link>
                    <Link to="/about" activeClassName="active">
                        About
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;