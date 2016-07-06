import React, { Component } from 'react'

class Compliments extends Component {
    constructor (props) {
        super(props)
        this.state = {name: 'yo'}
    }
    handleChange (e) {
        this.setState({name: e.target.value})
    }
    render () {
        return (
            <div>
                <input type='text' onChange={this.handleChange.bind(this)}/>
                <p>{this.props.compliment}, {this.state.name}</p>
            </div>
        )
    }
}

export default Compliments