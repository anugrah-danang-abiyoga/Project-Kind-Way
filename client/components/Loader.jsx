import React from 'react';
import Loading from 'react-loading-components';

const Loader = () => (
  <Loading type='rings' width={100} height={100} fill='#f44242' />
);


export default Loader;

// class Loader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true
//     };
//   }
// }