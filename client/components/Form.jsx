import React from 'react'

// import { HashRouter as Router, Route, Link } from 'react-router-dom'


export default class Form extends React.Component {
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
        this.props.form(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' name='name' placeholder='Name' />
            <input onChange={this.handleChange} type='text' name='country' placeholder='Country' />
            <input onChange={this.handleChange} type='text' name='Region' placeholder='Region' />
            <input type='submit' value='Now you can submit and go to next page' />
            </form>
        )
        console.log(form)
    }
}
