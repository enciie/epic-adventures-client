const baseUrl = 'http://localhost:3001/api';

export const loginUser = (user, callback) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user })
    }

    return dispatch => {
        fetch(`${baseUrl}/login`, data)
            .then(response => response.json())
            .then(user => {
                sessionStorage.setItem('jwt', user.jwt)

                dispatch({
                    type: 'SET_USER',
                    payload: user.current
                })

                callback()
            })
            .catch(error => error)
    }
}

export const signupUser = (user, callback) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user })
    }

    return dispatch => {
        fetch(`${baseUrl}/signup`, data)
            .then(response => response.json())
            .then(user => {
                sessionStorage.setItem('jwt', user.jwt)

                dispatch({
                    type: 'SET_USER',
                    payload: user.current
                })

                callback()
            })
            .catch(error => error)
    }
}

export const fetchUser = () => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        }
    }

    return dispatch => {
        fetch(`${baseUrl}/users`, data)
            .then(response => response.json())
            .then(user => {
                dispatch({
                    type: 'SET_USER',
                    payload: user
                })
            })
            .catch(error => error)
    }
}

export const deleteUser = id => {
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return dispatch => {
        fetch(`${baseUrl}/users/${id}`, data)
            .then(response => response.json())
            .then(user => dispatch({
                type: 'DELETE_TRIP',
                payload: user
            }))
            .catch(error => error)
    }
}
