import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom' 

import Loader from './Loader'
import Ready from './Ready'

const App = props => {
    return (<Router>
        <div>
        <Route exact path="/" component={Loader} />
        <Route path="/ready" component={Ready} />
        </div>
    </Router>)
}

export default App