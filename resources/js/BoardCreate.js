import React, { Component } from 'react';

class BoardCreate extends Component {
    render() {
        return (
            <section id="board-create" className="section reset">
                <div className="content">
                    <h2>New Board</h2>

                    <form className="board-form">
                        <input name="title" placeholder="Board title" />
                        <input name="title" placeholder="Board title" />
                    </form>
                </div>
            </section>
        );
    }
}

export default BoardCreate;