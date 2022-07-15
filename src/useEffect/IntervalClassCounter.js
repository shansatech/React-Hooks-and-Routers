import React, { Component } from 'react'

export class IntervalClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Create timer using class components with life cycle method</h2>
                </div>
                <div>
                    <h1>{this.state.count}</h1>
                </div>
            </div>
        )
    }
}

export default IntervalClassCounter