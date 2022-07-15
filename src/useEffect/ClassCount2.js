import React, { Component } from 'react'

export class ClassCount2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `clicked ${this.state.count} times`
        }

    }

    render() {
        return (
            <div>
                <h1>Conditionally update with class components</h1>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCount2