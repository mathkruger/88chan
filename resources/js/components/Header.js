import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="main-header" className="section reset">
                <div className="content">
                    <Link to="/" className="title">
                        88Chan
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;