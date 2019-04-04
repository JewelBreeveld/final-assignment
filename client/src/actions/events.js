import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const UPDATE_EVENTS = 'UPDATE_EVENTS'

const updateEvents = events => ({
    type: UPDATE_EVENTS,
    payload: events
})

export const getEvents = () => (dispatch) => {
    request
      .get(`${baseUrl}/events`)
      .then(result => dispatch(updateEvents(result.body)))
      .catch(err => console.error(err))
}

export const UPDATE_EVENT = 'UPDATE_EVENT'

const updateEvent = event => ({
    type: UPDATE_EVENT, 
    payload: event
})

export const getEvent = (eventId) => (dispatch) => {
    request
      .get(`${baseUrl}/events/${eventId}`)
      .then(result => dispatch(updateEvent(result.body)))
      .catch(err => console.error(err))
}

export const CREATE_EVENT = 'CREATE_EVENTS'

const createEvent = event => ({
    type: CREATE_EVENT,
    payload: event
})

export const addEvent = (data) => (dispatch, getState) => {

    //if(!jwt) return alert('log in first')

    console.log('addevent action data',data)
    const state = getState();
    const jwt = state.currentUser.jwt;
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/events/create`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(res => dispatch(createEvent(res.body)))
      .catch(err => console.error(err))
}

