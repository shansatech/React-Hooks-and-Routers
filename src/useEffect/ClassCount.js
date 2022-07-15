import React, { Component } from 'react'

export class ClassCount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <h1>Click counter with class component</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCount

