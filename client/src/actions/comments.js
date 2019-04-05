import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'

const updateComments = payload => ({
    type: UPDATE_COMMENTS,
    payload: payload
})

export const getComments = (eventId, ticketId) => (dispatch) => {
  
    request
      .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
      .then(res => {
        console.log('get comments res dot body',res.body)
        dispatch(updateComments(res.body))
    })
      .catch(err => console.error(err))
}

//////////////

export const ADD_COMMENT = 'ADD_COMMENT'

const addComment = event => ({
    type: ADD_COMMENT,
    payload: event
})

export const sendComment = (data) => (dispatch, getState) => {
    console.log('addComment action data',data)
    // const eventId = state.eventId
    // const ticketId = state.eventId

    const state = getState();
    const jwt = state.currentUser.jwt;
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/events/${data.eventId}/tickets/${data.ticketId}`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(res => {
          console.log('addComment res dot body',res.body)
          dispatch(addComment(res.body))
      })
      .catch(err => console.error(err))
}
//////////////