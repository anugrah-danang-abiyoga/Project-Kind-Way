import React from 'react'

// import { HashRouter as Router, Route, Link } from 'react-router-dom'


export class Form extends React.Components {
    constructor(props) {
    super(props)
    this.state={
        name: '',
        country: '',
        Region: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(e) {
    this.setState({value: e.target.value})
}

handleSubmit(e) {
    e.preventDefault()
    this.props.makeForm(this.state)
}

render() {
    return 
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text' name='name' placeholder='Name' />
        <input onChange={this.handleChange} type='text' name='country' placeholder='Country' />
        <input onChange={this.handleChange} type='text' name='Region' placeholder='Region' />
        <input type='submit' value='you are awesome' />
        </form>
    
}
}
