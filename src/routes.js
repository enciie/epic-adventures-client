import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import Trips from './containers/Trips'

export default (
    <BrowserRouter>
        <Switch id='routes'>
                <Route exact path='/' render={ () => loggedIn() ? <Trips /> : <Redirect to="/login" />} />
                <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/" /> : <Signup />} />
                <Route path='/login' component={ () => loggedIn() ? <Redirect to="/" /> : <Login />} />
                <Route path='/logout' component={ () => logout() } />
                <Route path='/trips' component={ () => loggedIn() ? <Trips /> : <Redirect to="/login" />} />
        </Switch>
    </BrowserRouter>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
    if (sessionStorage['jwt']) sessionStorage.removeItem('jwt')

    return <Redirect to="/login" />
}
