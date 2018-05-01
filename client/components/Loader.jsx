import React from 'react';
import Loading from 'react-loading-components';

import Ready from './Ready'

// const Loader = () => (
//   <Loading type='rings' width={100} height={100} fill='#f44242' />
// );

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
                  {this.state.isLoading && <Loading type='grid' width={400} height={400} fill='#000066' />}
                  {this.state.loaded && <Ready />} 
              </div>
          )
      }
    }




// class Loader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true
//     };
//   }
// }

// export default class Loader extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state={
//         loading: true
//         }
//       }
    
//       componentDidMount() {
//           setTimeout(() => this.setState({ loading: false }), '/Ready')
//           .then();
//       }
    
//       render() {
//           return (
//               <div>
//                   <Loading type='rings' width={100} height={100} fill='#f44242' />        
//               </div>
//           )
//       }
//     }
    



