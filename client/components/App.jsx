import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' 

import Loader from './Loader'
import Ready from './Ready'

const App = props => {
    return (<Router>
        <div>
        <Route exact path="/" component={Loader} />
        <Route path="/ready" component={Ready} />
        <h1>Hello, Have you done any good deeds today?</h1>
        </div>
    </Router>)
}

export default App