import React from 'react'

export class Form extends React.Components {
    constructor(props) {
    super(props)
    this.state={
        errorMessage: null,
        name: '',
        country: '',
        Region: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event) {

}

handleSubmit(event) {

}

render() {
    return (
        <p>lol</p>

    )
}
}
