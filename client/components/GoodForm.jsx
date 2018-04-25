import React from 'react'

import Form from './Form'
import AllUser from './AllUser'

export default class GoodForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users: [
                {id: 1, Name: 'Dana', Country:'Indonesia', Region:'Jakarta', GoodDeed: 'I am volunteering for smog pollution'},
                {id: 2, Name: 'Kira', Country:'New Zealand', Region:'Wellington', GoodDeed: 'I am volunteering for Red Cross shop'},
                {id: 3, Name: 'Annie', Country:'New Zealand', Region:'Auckland', GoodDeed: 'I am helping my friend to deploy her artwork for the exhibition'}
            ],
            // formVisible: props.match.path == '/users/Form'
            activeForm: null,
            formVisible: true,
            formUnvisible: false 
        }
        this.makeUserForm = this.makeUserForm.bind(this)
        this.showVisible = this.showVisible.bind(this)
        this.hideVisible = this.hideVisible.bind(this)
    }

    // componentDidMount() {
    //     setTimeout(() => this.setState({ formVisible: true }))
    // }

    makeUserForm(user) {
        const users = this.state.users
        user.id = users.length + 1
        users.push(user)
        this.setState({users})
    }
    showVisible() {
        this.setState({
            formVisible: false
        })
    }

    hideVisible() {
        this.setState({
            formUnvisible: false
        })
    }

    render() {
        return (
            <div>
            
                {/* {this.state.formVisible ? <Form handleSubmit={this.handleSubmit} makeUserForm={this.makeUserForm}/> : <AllUser users={this.state.users}  />} */}
                <AllUser users={this.state.users} />
                <Form handleSubmit={this.handleSubmit} makeUserForm={this.makeUserForm}/>    
            </div>
        )
    }
}





// {this.state.formVisible && <Form 
//     formVisible={this.state.formVisible}
// hideVisible={this.hideVisible}
// makeUserForm={this.state.users} />}