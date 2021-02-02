import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import contactUS from '../../images/contactus.jpg';

import Footer from '../Footer';
class ContactUs extends Component {
    
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
  handleSubmit(e) {
    alert("form submited");
    e.preventDefault();
    const {name, email, phone, message } = this.state
    let templateParams = {
      email: email,
      name: name,
      phone: phone,
      message: message,
     }
     emailjs.send(
      'service_rediff',
      'template_umjan6g',
       templateParams,
      'user_DTMMGtP9mOqebhvg6QNMq'
     )
     this.resetForm();
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

render() {
    return (
      <>
        <div className="contactUsWrapper">
        <h1>Contact Us</h1>
        </div>
        <div className="contactUSFormDiv">
            <h2 className="contactUSh3">How can we help you?</h2>
            <h1 className="contactUSh3"/>
            <h4 className="contactUSh3">Email: hr@progressivecliff.com </h4>
            <h4 className="contactUSh3"> Phone: +1 (650) 943-0620  </h4>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formBasicName">
                <Input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}
                 placeholder="Name*" className="inputstyle" required="true"/>
              </FormGroup>
              <FormGroup controlId="formBasicEmail">
                <Input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email*" className="inputstyle" required="true"/>
              </FormGroup>            
              <FormGroup controlId="formBasicPhone">
              <Input type="number" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')}
                placeholder="Contact Number" className="inputstyle" maxLength="10"/>
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Input type="textarea" name="message" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} 
                placeholder="Message*" className="inputstyle" required="true"/>
            </FormGroup>
            
              <Button variant="primary" type="submit" className="buttonStyle">  SUBMIT  </Button>
          </Form>
          </div>
          <Footer />

      </>
    )
  }
}
export default ContactUs