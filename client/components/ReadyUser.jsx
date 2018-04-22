import React from 'react'

export class ReadyUser extends React.Components {
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
componentWillMount() {

}

componentWillReceiveProps() {

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


