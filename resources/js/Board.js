import React, { Component } from 'react';
import BoardMessages from './components/BoardMessages';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            board: null
        }
    }

    componentDidMount() {
        this.getBoard()
    }

    sendMessage = (e) => {
        e.preventDefault()
        document.querySelector('#board-content .message-form button').innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'

        let form = new FormData(e.target)

        axios.post('/api/messages', form)
        .then(res => {
            if(res.data.status) {
                document.querySelector('#board-content .message-form').reset()
                document.querySelector('#board-content .message-form button').innerHTML = 'Send'
                this.getBoard()
            }
        })
    }

    getBoard = () => {
        axios.get('/api/boards/' + this.props.match.params.slug)
        .then(res => {
            res.data.banner = '/storage/' + res.data.banner
            console.log(res.data)
            this.setState({
                board: res.data
            })
        })
    }

    render() {
        return (
            <section id="board-content" className="section reset">
                <div className="content">
                    {
                        this.state.board &&
                        <>
                            <figure>
                                <div className="img" style={{backgroundImage: 'url(' + this.state.board.banner + ')'}}></div>
                            </figure>
                            <h2>/b/{this.state.board.title}</h2>

                            <BoardMessages messages={this.state.board.messages} />

                            <form className="message-form" onSubmit={this.sendMessage}>
                                <input type="hidden" name="board_id" value={this.state.board.id} />
                                <div className="input-group">
                                    <label>Subject</label>
                                    <input required type="text" name="subject" placeholder="Subject" />
                                </div>

                                <div className="input-group">
                                    <label>Author name</label>
                                    <input required type="text" name="author" placeholder="Author" />
                                </div>

                                <div className="input-group">
                                    <label>Message</label>
                                    <textarea name="content" rows="5" placeholder="Your message here"></textarea>
                                </div>

                                <button>Send</button>
                            </form>
                        </>
                    }

                </div>
            </section>
        );
    }
}

export default Board;