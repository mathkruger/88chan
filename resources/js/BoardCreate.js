import React, { Component } from 'react';
import {Redirect} from 'react-router';

class BoardCreate extends Component {
    constructor() {
        super()
        this.state = {
            enviado: false,
            board: null,
        }
    }

    createBoard = (e) => {
        e.preventDefault()
        document.querySelector('#board-create .board-form button').innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';

        let form = new FormData(e.target)

        axios.post('/api/boards', form)
        .then(res => {
            if(res.data.status) {
                this.setState({
                    enviado: true,
                    board: res.data.data
                })
            }
        })
    }

    render() {
        return (
            <section id="board-create" className="section reset" enctype="multipart/form-data">
                <div className="content">
                    <h2>New Board</h2>

                    {
                        this.state.enviado &&
                        <Redirect to={`/b/${this.state.board.slug}`} />
                    }

                    <form className="board-form flex" onSubmit={this.createBoard}>
                        <div className="input-group">
                            <label>Board title</label>
                            <input required type="text" name="title" placeholder="Board title" />
                        </div>

                        <div className="input-group">
                            <label>Board banner</label>
                            <input type="file" name="banner" placeholder="Board banner" />
                        </div>

                        <button>Create board</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default BoardCreate;