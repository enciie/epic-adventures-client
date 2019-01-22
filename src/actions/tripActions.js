const baseUrl = 'http://localhost:3001/api';

export const fetchTrips = () => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        }
    }

    return dispatch => {
        fetch(`${baseUrl}/trips`, data)
            .then(response => response.json())
            .then(trips => dispatch({
                type: 'FETCH_TRIPS',
                payload: trips
            }))
            .catch(err => err)
    }
}

export const fetchCurrentTrip = id => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        }
    }

    return dispatch => {
        fetch(`${baseUrl}/trips/${id}`, data)
            .then(response => response.json())
            .then(trip => dispatch({
                type: 'FETCH_TRIP',
                payload: trip
            }))
            .catch(err => err)
    }
}

export const createTrip = trip => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        },
        body: JSON.stringify({ trip })
    }
    return dispatch => {
        fetch(`${baseUrl}/trips`, data)
            .then(response => response.json())
            .then(trip => dispatch({
                type: 'CREATE_TRIP',
                payload: trip
            }))
            .catch(err => err)
    }
}

export const editTrip = trip => {
    let data = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        },
        body: JSON.stringify({ trip })
    }

    return dispatch => {
        fetch(`${baseUrl}/trips/${trip.id}`, data)
            .then(response => response.json())
            .then(trip => dispatch({
                type: 'EDIT_TRIP',
                payload: trip
            }))
            .catch(err => err)
    }
}

export const deleteTrip = id => {
    debugger
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        }
    }

    return dispatch => {
        fetch(`${ baseUrl }/trips/${ id }`, data)
            .then(response => response.json())
            .then(trip => dispatch({
                    type: 'DELETE_TRIP',
                    payload: trip
                }))
            .catch(err => err)
    }
}
