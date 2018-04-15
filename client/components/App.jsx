import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' 

import Loader from './Loader'

const App = props => {
    return <Router>
        <div>
            <Loader />
        <h1>Hello, Have you done any good deeds today?</h1>
        </div>
    </Router>
}

export default App