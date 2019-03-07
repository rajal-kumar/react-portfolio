import React from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost:80/React-Portfolio/src/api/contact/index.php';

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = {
      fName: "",
      lName: "",
      email: "",
      message: "",
      mailSent: false,
      error: null
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
    // this.setState({
    //   fName: "",
    //   lName: "",
    //   email: "",
    //   message: ""
    // })
  }

  render() {
    return (
      <div className="contact-form">
        <form action="/action_page.php">
          <input
          type="text"
          id="fname"
          name="fName" 
          placeholder="First Name" 
          value={this.state.fName} 
          onChange={this.onChange} 
          />
          <input
          type="text"
          id="lname"
          name="lName" 
          placeholder="Last Name" 
          value={this.state.lName} 
          onChange={this.onChange}
          />
          <input
          type="email"
          id="email"
          name="email" 
          placeholder="Email" 
          value={this.state.email} 
          onChange={this.onChange}        
          />
          <textarea
          type="text"
          id="message"
          name="message" 
          placeholder="Enter your message here" 
          value={this.state.message} 
          onChange={this.onChange}          
          />
          <br />
          <button type="submit" onClick={e => this.onSubmit(e)}>Send</button>
          <div>
            {this.state.mailSent && 
              <div>Thank you for contacting me. I will respond as soon as I can :)</div>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm