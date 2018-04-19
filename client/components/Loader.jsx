import React from 'react';
import Loading from 'react-loading-components';

// const Loader = () => (
//   <Loading type='rings' width={100} height={100} fill='#f44242' />
// );

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      timeOut: 0,
      transitionAppear: ('./Ready')
    }
    this.timeOut = this.timeOut.bind(this)
    this.transitionAppear = this.transitionAppear.bind(this)
  }

  componentDidLoad() {
      this.timeOut
  }

  componentWillAppear() {
      this.transitionAppear
  }

  render() {
      return (
          <div>
            <Loading type='rings' width={100} height={100} fill='#f44242' />
           <div className="header"><h1>Hooray! you are one step closer to become a better version of yourself</h1></div>          
          </div>
      )
  }
}
export default Loader;




// class Loader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true
//     };
//   }
// }