import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { signupUser } from '../actions/userActions'

class Signup extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    handlenChange = (event) => {
        // const value = event.target.value
        // const name = event.target.name
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const user = this.state
        this.props.signupUser(user, () => this.props.history.push('/'))
    }

    render() {
        const { username, email, password, password_confirmation } = this.state

        return (
            <>
                <h1>Sign Up</h1>
                <form onSubmit={ this.handleSubmit }>
                    <input name="username" placeholder="Username" value={username} onChange={this.handleChange} /><br />
                    <input name="email" placeholder="Email" value={email} onChange={this.onChange} /><br />
                    <input type='password' name="password" placeholder="Password" value={password} onChange={this.handleChange} /><br />
                    <input type='password' name="password_confirmation" placeholder="Password Confirmation" value={password_confirmation} onChange={this.handleChange} /><br />
                    <button type="submit">Signup</button>
                </form>
                <Link to='/login'>Log In</Link>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signupUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Signup))
