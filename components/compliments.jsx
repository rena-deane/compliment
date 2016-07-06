import React, { Component } from 'react'

class Compliments extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <p>{this.props.compliment}</p>
    }
}

export default Compliments