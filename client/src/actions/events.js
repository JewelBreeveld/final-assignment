import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const UPDATE_EVENTS = 'UPDATE_EVENTS'

const updateEvents = events => ({
    type: UPDATE_EVENTS,
    payload: events
})

export const getEvents = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/events`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateEvents(result.body)))
      .catch(err => console.error(err))
}
