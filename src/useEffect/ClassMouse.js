import React, { Component } from 'react'

export class ClassMouse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        console.log("E", e)
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', (e) => this.logMousePosition(e))
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', (e) => this.logMousePosition(e))
    }

    render() {
        return (
            <div>
                <h1>Run events only once in class components</h1>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse