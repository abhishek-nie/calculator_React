import React, { Component } from 'react'
import './CalcMainPage.css'

class Output extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <p>{this.props.result}</p>
            </div>
        )
    }
}

export default Output
