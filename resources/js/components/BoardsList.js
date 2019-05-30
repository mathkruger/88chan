import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'axios';

class BoardsList extends Component {
    constructor() {
        super()
        this.state = {
            boards: [],
        }
    }
    render() {
        return (
            <ul id="boards-list" className="flex">
                {
                    this.state.boards.length > 0 &&
                    this.state.boards.map((item, index) => {
                        return (
                            <li key={index}>
                                [<Link to={`/b/${item.slug}`}>{item.title}</Link>]
                            </li>
                        )
                    })
                }

                {
                    this.state.boards.length <= 0 &&
                    <li>
                        no boards available, create one
                    </li>
                }
            </ul>
        );
    }
}

export default BoardsList;