import React from 'react'

class Counter extends React.Component {
    
    state = {
        number: this.props.number || 0,
    }

    plus = () => this.setState({number: this.state.number + 1})
    minus = () => this.setState({number: this.state.number - 1})

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>

                <button onClick = {this.plus}>
                 +
                </button>
                <button onClick = {this.minus}>
                 -
                </button>
                
            </div>
        )
    }
}

export default Counter