import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BoardsList from './components/BoardsList';

class Home extends Component {
    render() {
        return (
            <section id="lista-boards" className="section reset">
                <div className="content">
                    <h2>Boards List <small>[<Link to="/boards/add">+</Link>]</small></h2>

                    <BoardsList />
                </div>
            </section>
        );
    }
}

export default Home;