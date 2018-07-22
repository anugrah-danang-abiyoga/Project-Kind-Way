import React from 'react'

// import Form from './Form'
import GoodForm from './GoodForm'
import AllUser from './AllUser'

import { HashRouter as Router, Route, Link } from 'react-router-dom'


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
        var key = e.target.name
        var value = e.target.value
        this.setState({[key]: value})
        // this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.makeUserForm(this.state)
    }

    render() {
        return (
            <div id='form'>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type='text' name='Name' placeholder='Name' />
            <input onChange={this.handleChange} type='text' name='Country' placeholder='Country' />
            <input onChange={this.handleChange} type='text' name='Region' placeholder='Region' />
            <input onChange={this.handleChange} type='text' name='GoodDeed' placeholder='Good Deed' />
            <input onClick={this.formVisible} type='submit' value='Submit!'  />
            </form>
            <br />
            {/* {this.makeUserForm && <GoodForm handleSubmit={this.handleSubmit}/>} */}
            </div>

            // <div className='redirect'>
            // <GoodForm createForm={this.state.makeUserForm} />    
            // </div>    
        )
        // console.log(form)
    }
}
