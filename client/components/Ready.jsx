import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'




export default class Ready extends React.Component {
    render() {
        return (
        <div className='options'>
          <button><Link to='/Form'>Existing User</Link></button>
          <button><Link to='/Form'>New User</Link></button>
          
        </div>
        )
    }
}

// constructor(props) {
//     super(props)
//     this.state={
//         newUser: '../../public/images/ExistingUser',
//         existingUser: '../../public/images/NewUser'
//     }

// }










