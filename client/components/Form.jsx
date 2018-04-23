import React from 'react'


const Form = props => {
    console.log(props.details)
    return (
        <p>Hello, Have you done any good deeds today?</p>
    )
}

export default Form



// export class Form extends React.Components {
//     constructor(props) {
//     super(props)
//     this.state={
//         errorMessage: null,
//         name: '',
//         country: '',
//         Region: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
// }

// handleChange(event) {

// }

// handleSubmit(event) {

// }

// render() {
//     return (
//         <p>lol</p>

//     )
// }
// }
