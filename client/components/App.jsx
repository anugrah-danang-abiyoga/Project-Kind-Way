import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom' 

import Loader from './Loader'
import Ready from './Ready'
import Form from './Form'

const App = props => {
    return (<Router>
        <div>
        <Route exact path="/" component={Loader} />
        <Route path="/Ready" component={Ready} />
        <Route path="/Form" component={Form}/>
        </div>
    </Router>)
}

export default App


// export default class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             loading: true
//         }
//         this.startLoading = this.startLoading.bind(this)
//     }
//     startLoading() {
//         this.setState({loading: this.state.loading})
//     }

{/* <Route path="/Form/" component={(props) => <Form details={props}/>}/> */}