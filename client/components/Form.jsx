import React from 'react'

// import Form from './Form'
import GoodForm from './GoodForm'
import AllUser from './AllUser'

// import { HashRouter as Router, Route, Link } from 'react-router-dom'


export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Name: '',
            Country: '',
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
        this.props.makeUserForm(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' name='name' placeholder='Name' />
            <input onChange={this.handleChange} type='text' name='country' placeholder='Country' />
            <input onChange={this.handleChange} type='text' name='Region' placeholder='Region' />
            <input onChange={this.handleChange} type='text' name='GoodDeed' placeholder='Good Deed' />
            <input type='submit' value='Submit!' />
            </form>
        )
        console.log(form)
    }
}
