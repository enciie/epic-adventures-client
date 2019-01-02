import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import Trips from './containers/Trips'
import TripShow from './containers/TripShow'
import About from './containers/About'
import TripForm from './components/TripForm'
import UserTrips from './containers/UserTrips'

export default (
    <Router>
        <Switch id='routes'>
            {/* component that will be created via Route will automatically be passed the following props objects:  */}
            {/* match, location, history */}
            {/* macth object contains the following properties: params, isExact, path, url */}
            <Route exact path='/' render={ () => loggedIn() ? <Trips /> : <Redirect to="/login" />} />
            <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/" /> : <Signup />} />
            <Route path='/login' component={ () => loggedIn() ? <Redirect to="/" /> : <Login />} />
            <Route path='/logout' component={ () => logout() } />
            <Route exact path='/about' component={ About } />              
            <Route exact path='/trips' component={ Trips } />
            <Route exact path='/trips/mytrips' component={ UserTrips } />
            <Route exact path='/trips/new' component={() => loggedIn() ? <TripForm /> : <Redirect to="/login" />} />
            <Route exact path='/trips/:id' component={ TripShow } />
        </Switch>
    </Router>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
    if (sessionStorage['jwt']) sessionStorage.removeItem('jwt')

    return <Redirect to="/login" />
}
