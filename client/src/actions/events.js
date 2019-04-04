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
    // const state = getState()
    // if (!state.currentUser) return null
    // const jwt = state.currentUser.jwt
  
    // if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/events`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateEvents(result.body)))
      .catch(err => console.error(err))
}

export const UPDATE_EVENT = 'UPDATE_EVENT'

const updateEvent = event => ({
    type: UPDATE_EVENT, 
    payload: event
})

export const getEvent = (eventId) => (dispatch, getState) => {
    // const state = getState()
    // console.log('action get event state',state)
    // if (!state.currentUser) return null
    // const jwt = state.currentUser.jwt

    // if(isExpired(jwt)) return dispatch(logout())

    request
      .get(`${baseUrl}/events/${eventId}`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateEvent(result.body)))
      .catch(err => console.error(err))
}


export const CREATE_EVENT = 'CREATE_EVENTS'

const createEvent = event => ({
    type: CREATE_EVENT,
    payload: event
})

export const addEvent = event => (dispatch, getState) => {
    const state = getState();
    const jwt = state.currentUser.jwt;
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/events`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(event)
      .then(res => dispatch(createEvent(res.body)))
      .catch(err => console.error(err))
}

