import React from 'react'

class Calc extends React.Component {
    state = {
        number: this.props.number || 0,
    }
    
    render() {
        return (
            <div>
                <input value {this.props.number} />
               
            </div>
        )
    }
}

export default Calc