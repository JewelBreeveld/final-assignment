import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'



//////////////

export const ADD_COMMENT = 'ADD_COMMENT'

const addComment = payload => ({
    type: ADD_COMMENT,
    payload: payload
})

export const sendComment = (data) => (dispatch, getState) => {
    console.log('sendComment action data: ', data)
    // const eventId = state.eventId
    // const ticketId = state.eventId

    const state = getState();
    //console.log('send comment get state',state)
    const jwt = state.currentUser.jwt;
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/events/${state.event.id}/tickets/${state.ticket.id}`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(res => {
          console.log('addComment res dot body',res.body) //.comment
          dispatch(addComment(res.body)) //.comment
      })
      .catch(err => console.error(err))
}
//////////////

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
        dispatch(updateComments(res.body.comments))
    })
      .catch(err => console.error(err))
}