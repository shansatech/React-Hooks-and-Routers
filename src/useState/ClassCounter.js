
import React, { Component } from 'react'

export class ClassCounter extends Component {



    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Click counter using class component</h1>
                <button onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClassCounter