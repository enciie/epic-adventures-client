const baseUrl = 'http://localhost:3001/api';

export const fetchComments = id => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        }
    }

    return dispatch => {
        fetch(`${baseUrl}/trips/${id}/comments`, data)
            .then(response => response.json())
            .then(trip => {
                dispatch({
                    type: 'FETCH_COMMENTS',
                    payload: trip.comments
                })
            })
            .catch(error => error)
    }
}

export const createComment = (comment, tripId) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        },
        body: JSON.stringify({ comment: comment })
    }

    return dispatch => {
        fetch(`${ baseUrl }/trips/${ tripId }/comments`, data)
            .then(response => response.json())
            .then(comment => dispatch({
                type: 'CREATE_COMMENT',
                payload: comment
            }))
            .catch(error => error)
    }
}

export const deleteComment = (id, tripId) => {
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.jwt
        }
    }

    return dispatch => {
        fetch(`${baseUrl}/trips/${tripId}/comments/${id}`, data)
            .then(response => response.json())
            .then(comment => dispatch({
                type: 'DELETE_COMMENT',
                payload: comment
            }))
            .catch(error => error)
    }
}