import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './Home';
import BoardCreate from './BoardCreate';
import Board from './Board';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/boards/add" component={BoardCreate} />
                    <Route exact path="/b/:slug" component={Board} />                   
                </Switch>

                <Footer />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
