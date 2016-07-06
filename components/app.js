import React, { Component } from 'react'
import Compliments from './compliments.jsx';

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <span>
            <h1>Welcome to Awesomeness</h1>
            <Compliments compliment="You're awesome"/>
        </span>
    )
  }

}

export default App
