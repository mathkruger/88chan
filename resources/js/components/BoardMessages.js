import React, { Component } from 'react';
import 'axios';

class BoardMessages extends Component {
    render() {
        return (
            <ul id="board-messages">
                {
                    this.props.messages.length > 0 &&
                    this.props.messages.map((item, index) => {
                        return (
                            <li key={index}>
                                <p className="title">{item.subject}</p>
                                <p className="text-content">{item.content}</p>
                                <p>
                                    <small>Posted by {item.author} at {new Date(item.created_at).toLocaleDateString()} {new Date(item.created_at).toLocaleTimeString()}</small>
                                </p>
                            </li>
                        )
                    })
                }

                {
                    this.props.messages.length <= 0 &&
                    <li>
                        No messages yet, write one!
                    </li>
                }
            </ul>
        );
    }
}

export default BoardMessages;