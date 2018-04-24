import React from 'react'

// import Form from './Form'
import AllUser from './AllUser'

export default class GoodForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            users: [
                {id: 1, Name: 'Dana', Country:'Indonesia', Region:'Jakarta', GoodDeed: 'I am volunteering for smog pollution'},
                {id: 2, Name: 'Kira', Country:'New Zealand', Region:'Wellington', GoodDeed: 'I am volunteering for Red Cross shop'},
                {id: 3, Name: 'Annie', Country:'New Zealand', Region:'Auckland', GoodDeed: 'I am helping my friend to deploy her artwork for the exhibition'}
            ]
        }
        // this.makeUser = this.makeUser.bind(this)
        this.makeUserForm = this.makeUserForm.bind(this)
    }
    makeUserForm(user) {
        const users = this.state.users
        user.id = users.length + 1
        users.push(user)
        this.setState({users})
    }
    // makeUser() {
    //     const user = {
    //         name: 'Trinita', Country:'New Zealand', Region: 'Wellington', GoodDeed: 'I am borrowing money for my friend'
    //     }
    //     this.makeUserForm(user)
    // }
    render() {
        return (
            <div>
            <AllUser alluser={this.state.AllUser} />
            <Form makeUserForm={this.makeUserForm} />
            </div>
        )
    }
}