import React from 'react'
// import { HashRouter as Router, Route, Link } from 'react-router-dom' 


function AllUser (props) {
    return <div>
        {props.users.map(user => <div key={user.id}>
            <h3>{user.Name}</h3>
            <p>{user.Country}</p>
            <p>{user.Region}</p>
            <p>{user.GoodDeed}</p>
            </div>)}
        </div>
} 


export default AllUser



