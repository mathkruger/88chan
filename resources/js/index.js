import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './Home';
import BoardCreate from './BoardCreate';

export default class App extends Component {
    render() {
        return (
            <>
                <Header />

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/boards/add" component={BoardCreate} />                    
                    </Switch>
                </BrowserRouter>

                <Footer />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
