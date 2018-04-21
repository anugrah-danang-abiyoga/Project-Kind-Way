import React from 'react';
import Loading from 'react-loading-components';

// const Loader = () => (
//   <Loading type='rings' width={100} height={100} fill='#f44242' />
// );

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
        isLoading: true,
        loaded: false
        }
        this.startLoading = this.startLoading.bind(this)
      }

      componentWillMount() {
        setTimeout(() => this.setState({ isLoading: false }), 3000)
    }

      startLoading() {
          this.setState({isLoading: this.state.isLoading})
      }

    
      render() {
          return (
              <div>
                  {this.state.isLoading && <Loading type='rings' width={100} height={100} fill='#f44242' />}

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
    



