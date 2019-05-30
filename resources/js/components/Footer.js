import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="main-footer" className="section reset">
                <div className="content">
                    <p>&copy; {new Date().getFullYear()} - 88Chan</p>
                </div>
            </footer>
        );
    }
}

export default Footer;