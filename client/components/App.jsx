import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom' 

import Loader from './Loader'
import Ready from './Ready'
import Form from './Form'
import GoodForm from './GoodForm'
import AllUser from './AllUser'

const App = props => {
    return (<Router>
        <div>
        <Route exact path="/" component={Loader} />
        <Route path="/Ready" component={Ready} />
        <Route path="/Form" component={Form}/>
        <Route path="/GoodForm" component={GoodForm}/>
        <Route path="/AllUser" component={AllUser}/>
        </div>
    </Router>)
}

export default App


