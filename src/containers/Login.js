import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { loginUser } from '../actions/userActions'

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
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" placeholder="Username" value={username} onChange={this.handleChange} /><br />
                    <input type='password' name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br />
                    <button type="submit">Login</button>
                </form>
                <Link to='/signup'>Sign Up</Link>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Login))
