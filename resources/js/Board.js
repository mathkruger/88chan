import React, { Component } from 'react';

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
                        </>
                    }

                </div>
            </section>
        );
    }
}

export default Board;