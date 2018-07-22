import React from 'react';
import Loading from 'react-loading-components';

import Ready from './Ready'



export default class Loader extends React.Component {
    constructor(props) {
        super(props)
        this.state={
        isLoading: true,
        loaded: false
        }
        this.startLoading = this.startLoading.bind(this)
        this.isLoaded = this.isLoaded.bind(this)
      }

      componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false, loaded: true }), 5000)
    }

      startLoading() {
          this.setState({isLoading: this.state.isLoading})
      }

      isLoaded() {
          this.setState({loaded: this.state.loaded})
      }

    
      render() {
          return (
              <div className={`${this.state.isLoading ? this.state.loaded : ''} `}>
                  {this.state.isLoading && <Loading type='hearts' width={400} height={400} fill='#000066' />}
                  {this.state.loaded && <Ready />} 
              </div>
          )
      }
    }
