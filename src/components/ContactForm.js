import React from 'react';

class ContactForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    })
  }

  render() {
    return (
      <div className="contact-form">
        <form action="/action_page.php">
          <input
          type="text"
          id="fname"
          name="firstName" 
          placeholder="First Name" 
          value={this.state.firstName} 
          onChange={this.onChange} 
          />
          <input
          type="text"
          id="lname"
          name="lastName" 
          placeholder="Last Name" 
          value={this.state.lastName} 
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
          <button onClick={e => this.onSubmit(e)}>Send</button>
        </form>
      </div>
    )
  }
}

export default ContactForm