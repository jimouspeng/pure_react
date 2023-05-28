import React from 'react'

export default class UserInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.onhandleChange(e.target.value)
    }
    render() {
        const inputText = this.props.inputText
        return (
            <div>
                <input value={inputText} onChange={this.handleChange} />
            </div>
        )
    }
}
