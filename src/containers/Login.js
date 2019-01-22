import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/userActions'

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


class Login extends Component {
  constructor() {
    super()

    this.state = {
        username: 'test',
        password: 'password'
    }

    this.onSubmit = this.handleSubmit.bind(this)
    this.onChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const field = event.target.name
    let state = this.state

    state[field] = event.target.value
    this.setState(state)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const user = this.state
    this.props.loginUser(user, () => this.props.history.push('/'))
  }

  render() {
    const { username, password } = this.state

    return (
      <>
        <h1 className="LoginHeader">EPIC ADVENTURES AWAIT YOU...</h1>
        <MDBContainer>
          <MDBRow center>
            <MDBCol md="4 col-md-offset-4">
              <form onSubmit={this.handleSubmit}>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                  <MDBInput
                    name="username"
                    label="Your Username"
                    value={username}
                    onChange={this.handleChange}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    type='password'
                    name="password"
                    label="Your Password"
                    value={password}
                    onChange={this.handleChange}
                    icon="lock"
                    group
                    validate
                  />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit">Login</MDBBtn>
                </div>
                <div className="text-center">
                  <Link to='/signup'>Sign Up</Link>
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
    loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Login))
