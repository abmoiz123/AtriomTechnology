import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./ContactForm2.css"
// import axios from 'axios'

class ContactForm2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      company: "",
      phone: "",
      email: "",
      services: [],
      budget: "",
      message: "",
      error: false
    }
  }

  formSubmit() {
    alert('Sorry for the inconvenience \r\n Contact Us Update As Soon As Possible \r\n Further Contact on: \r\n +44 7401379573 \r\n +92 3020825699 \r\n info@atriom.co.uk')
    // let name = this.state.name;
    // let company = this.state.company;
    // let phone = this.state.phone;
    // let email = this.state.email;
    // let services = this.state.services;
    // let budget = this.state.budget;
    // let message = this.state.message;
    // console.log(this.state)
    // axios({
    //   method: "POST",
    //   url: "http://localhost:8001/send",
    //   data: this.state
    // }).then((response) => {
    //   if (response.data.status === 'success') {
    //     alert("Message Sent.");
    //     this.resetForm()
    //   } else if (response.data.status === 'fail') {
    //     alert("Message failed to send.")
    //   }
    // })
    // var xhr = new XMLHttpRequest();
    // xhr.addEventListener('load', () => {
    //     console.log(xhr.responseText)
    // });
    // xhr.open('GET', 'https://atriom.uk/index.php?sendto=' + email +
    //   '&name=' + name +
    //   '&message=' + message);

    // xhr.send();
  }
  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
  check(val) {
    if (this.state.error && val === "") {
      return false
    } else {
      return true
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  serviceSelect = (e) => {
    let services = e.target.id
    this.setState(state => ({
      services: [...state.services, services]
    }));
  }
  render() {



    const Separator = styled.div`
            height: 5px;
            width: 50px;
            // background-color: #04e5e5;
            background-color: #00468b;
            // margin-bottom: 10px;
            margin-left: 6px;
        `

    const Heading = styled.h2`
            font-size: 50px;
            font-family: Teko;
            // color: #fff;
            color: #013567;
        `

    const InputElement = styled.div`
            margin: 10px 0;
        `

    const ErrorInputAnimation = keyframes`
            0% {
              border-bottom: 1px solid #111;
            }
            100% {
              border-bottom: 1px solid #ff0000;
            }
        `


    const Input = styled.input`
            width: 100%;
            border: none;
            font-size: 14px;
            border-bottom: 1px solid #444;
            padding: 5px 0px;
            border-radius: 0;
            color: #fff;
            transition: .5s;
            &:focus {
              // border-bottom: 1px solid #04e5e5;
              border-bottom: 1px solid #fff;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
        `

    const Textarea = styled.textarea`
            background: rgba(0, 0, 0, 0);
            font-size: small;
            width: 100%;
            color: #fff;
            border: none;
            // height: 100px
            border-bottom: 1px solid #444;
            border-radius: 0;
            transition: all 0.5s ease 0s;
            min-height: 80px;
            &::placeholder {
              color: #fff;
            }
            &:focus {
              border-bottom: 1px solid #fff;
              outline: none;
            }
            &.error {
              animation: ${ErrorInputAnimation} 1s forwards;
            }
        `
    return (
      <Container className="contact_form_container">
        <Heading className="Heading">
          Let's Think Together
        </Heading>
        <Separator />
        <Row className="Contact_form_row">
          <Col className="Contact_form_col" md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.name} className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Your Name*" onChange={e => this.setState({ name: e.target.value })} />
            </InputElement>
          </Col>
          <Col className="Contact_form_col" md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.email} className={`company ${this.check(this.state.company) ? "" : "error"}`} placeholder="Company" onChange={e => this.setState({ company: e.target.value })} />
            </InputElement>
          </Col>
          <Col className="Contact_form_col" md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.phone} className={`company ${this.check(this.state.phone) ? "" : "error"}`} placeholder="Phone" onChange={e => this.setState({ phone: e.target.value })} />
            </InputElement>
          </Col>
          <Col className="Contact_form_col" md={6}>
            <InputElement className="inputdiv">
              <Input type="text" defaultValue={this.state.email} className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
            </InputElement>
          </Col>
          <Col className="Contact_form_col" md={12}>
            <p className="service">Services</p>
            <div className="serviceslist">
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Design" className="selectable" />
                <label className="selectable2" htmlFor="Design">
                  Design
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Website Development" className="selectable" />
                <label className="selectable2" htmlFor="Website Development">
                  Website Development
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Mobile Application" className="selectable" />
                <label className="selectable2" htmlFor="Mobile Application">
                  Mobile Application
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Branding" className="selectable" />
                <label className="selectable2" htmlFor="Branding">
                  Branding
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Marketing" className="selectable" />
                <label className="selectable2" htmlFor="Marketing">
                  Marketing
                </label>
              </div>
              <div>
                <input type="checkbox" onClick={this.serviceSelect} id="Other" className="selectable" />
                <label className="selectable2" htmlFor="Other">
                  Other
                </label>
              </div>
            </div>
          </Col>
          <Col className="Contact_form_col" md={12}>
            <p className="service">Approximate Budget</p>
            <div className="serviceslist">
              <div>
                <input
                  type="radio"
                  onClick={(e) => this.setState({ budget: e.target.value })}
                  name="budget"
                  id="budget0"
                  value="$5.000 - $10.000"
                  className="selectable" />
                <label className="selectable2" htmlFor="budget0">
                  Less then $5.000
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={(e) => this.setState({ budget: e.target.value })}
                  name="budget"
                  id="budget1"
                  value="$5.000 - $10.000"
                  className="selectable" />
                <label className="selectable2" htmlFor="budget1">
                  $5.000 - $10.000
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={(e) => this.setState({ budget: e.target.value })}
                  name="budget"
                  id="budget2"
                  value="$10.000 - $100.000"
                  className="selectable" />
                <label className="selectable2" htmlFor="budget2">
                  $10.000 - $100.000
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={(e) => this.setState({ budget: e.target.value })}
                  name="budget"
                  id="budget3"
                  value="$100.000 - $1.000.000"
                  className="selectable" />
                <label className="selectable2" htmlFor="budget3">
                  $100.000 - $1.000.000
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  onClick={(e) => this.setState({ budget: e.target.value })}
                  name="budget"
                  id="budget4"
                  value="$1.000.000 +"
                  className="selectable" />
                <label className="selectable2" htmlFor="budget4">
                  $1.000.000 +
                </label>
              </div>
            </div>
            <Col md={12} className="colum">
              <InputElement className="inputdiv">
                <Textarea
                  placeholder="Tell Us More About Project"
                  defaultValue={this.state.message}
                  className={`message ${this.check(this.state.message) ? "" : "error"}`}
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </InputElement>
            </Col>
          </Col>
        </Row>
        <Button onClick={() => this.formSubmit()} className="submitbtn">Submit</Button>
      </Container>
    )
  }

}

export default ContactForm2