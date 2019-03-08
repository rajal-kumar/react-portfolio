import React from 'react';
import axios from 'axios';

import { Grid, Image } from 'semantic-ui-react'


class ContactForm extends React.Component {
  render() {
    return (
      <Grid.Row columns={4}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
    )
  }
}

export default ContactForm


// const API_PATH = 'http://localhost:3000/React-Portfolio/src/api/contact/index.php';

// class ContactForm extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       fName: "",
//       lName: "",
//       email: "",
//       message: "",
//       mailSent: false,
//       buttonText: 'Send Message'
//     }
//     this.onChange = this.onChange.bind(this)
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmit(e) {
//     e.preventDefault()
//     console.log(this.state)

//     this.setState({
//       buttonText: '...sending'
//     })

//     let data = {
//       fName: this.state.fName,
//       lName: this.state.lName,
//       email:this.state.email,
//       message: this.state.message
//     }

//     axios.post('API_URI', data)
//       .then( res => {
//         this.setState({ sent: true}, this.resetForm())
//       })
//       .catch( () => {
//         console.log('Message not sent')
//       })
      
//     }
    
//     resetForm = () => {
//       this.setState({
//         fName: "",
//         lName: "",
//         email: "",
//         message: ""
//       })
//     }
    
//   render() {
//     return (
//       <div className="contact-form">
//         <form action="/action_page.php" onClick={e => this.onSubmit(e)}>
//           <input
//           type="text"
//           id="fname"
//           name="fName" 
//           placeholder="First Name" 
//           value={this.state.fName} 
//           onChange={this.onChange} 
//           />
//           <input
//           type="text"
//           id="lname"
//           name="lName" 
//           placeholder="Last Name" 
//           value={this.state.lName} 
//           onChange={this.onChange}
//           />
//           <input
//           type="email"
//           id="email"
//           name="email" 
//           placeholder="Email" 
//           value={this.state.email} 
//           onChange={this.onChange} 
//           required        
//           />
//           <textarea
//           type="text"
//           id="message"
//           name="message" 
//           placeholder="Enter your message here" 
//           value={this.state.message} 
//           onChange={this.onChange} 
//           required          
//           />
//           <br />
//           {/* <button type="submit" onClick={e => this.onSubmit(e)}>Send</button> */}
//           <div className="button--container">
//             <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default ContactForm