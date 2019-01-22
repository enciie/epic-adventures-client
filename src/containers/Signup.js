import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { signupUser } from '../actions/userActions'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact'

import '../stylesheets/Signup.css'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.onSubmit = this.handleSubmit.bind(this)
    this.onChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    // const value = event.target.value
    // const name = event.target.name
    const { name, value } = event.target
    this.setState({
        [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const user = this.state
    this.props.signupUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, email, password, password_confirmation } = this.state

    return (
      <>
        <h1 className="headerSignup">YOUR JOURNEY STARTS HERE...</h1>
        <MDBContainer>
          <MDBRow center>
            <MDBCol md="4 col-md-offset-4">
              <form onSubmit={ this.handleSubmit }>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    name="username"
                    label="Create A Username"
                    value={username}
                    onChange={ this.handleChange }
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    name="email"
                    label="Your Email"
                    value={email}
                    onChange={ this.handleChange }
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    type='password'
                    name="password"
                    label="Create A Password"
                    value={password}
                    onChange={ this.handleChange }
                    icon="lock"
                    group
                    validate
                  />
                  <MDBInput
                    type='password'
                    name="password_confirmation"
                    label="Password Confirmation"
                    value={password_confirmation}
                    onChange={ this.handleChange }
                    icon="exclamation-triangle"
                    group
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
                <div className="text-center">
                    <MDBBtn type="submit">SIGN UP</MDBBtn>
                </div>
                <div className="text-center">
                    <Link className="LoginLink" to='/login'>Log In</Link>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signupUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Signup))
