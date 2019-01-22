import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Signup from './containers/Signup'
import Trips from './containers/Trips'
import Inspiration from './containers/Inspiration'
import TripShow from './containers/TripShow'
import About from './components/About'
import TripForm from './containers/TripForm'
import UserTrips from './containers/UserTrips'
import EditTripForm from './containers/EditTripForm'
import NavBar from './components/NavBar'

export default (
    <Router>
      <>
        <NavBar />
        <Switch id='routes'>
            {/* component that will be created via Route will automatically be passed the following props objects:  */}
            {/* match, location, history */}
            {/* match object contains the following properties: params, isExact, path, url */}
            <Route exact path='/' render={ () => loggedIn() ? <Trips /> : <Redirect to="/login" />} />
            <Route path='/signup' component={ () => loggedIn() ? <Redirect to="/" /> : <Signup />} />
            <Route path='/login' component={ () => loggedIn() ? <Redirect to="/" /> : <Login />} />
            <Route path='/logout' component={ () => logout() } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/trips/inspiration' component={Inspiration} />
            <Route exact path='/trips/mytrips' component={ () => loggedIn() ? <UserTrips/> : <Redirect to="/login" /> } />
            <Route exact path='/trips/new' component={() => loggedIn() ? <TripForm /> : <Redirect to="/login" />} />
            <Route exact path='/trips/:id/edit' component={ EditTripForm } />
            <Route exact path='/trips/:id' component={ TripShow } />
            <Route exact path='/trips' component={Trips} />
        </Switch>
      </>
    </Router>
)

const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
    if (sessionStorage['jwt']) sessionStorage.removeItem('jwt')

    return <Redirect to="/login" />
}
