import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const UPDATE_EVENT = 'UPDATE_EVENT'
export const UPDATE_EVENTS = 'UPDATE_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENTS'
export const UPDATE_EVENTS_SUCCESS = 'UPDATE_EVENTS_SUCCESS'
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS'

/////////////////////////////////////////////////////////
const updateEvent = event => ({
  type: UPDATE_EVENT, 
  payload: event
})

const updateEvents = events => ({
    type: UPDATE_EVENTS,
    payload: events
})

const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event
})

/////////////////////////////////////////////////////////

export const getEvents = () => (dispatch) => {
    request
      .get(`${baseUrl}/events`)
      .then(result => {
        console.log("get events result dot body", result.body)  
        dispatch(updateEvents(result.body))})
      .catch(err => console.error(err))
}
////////////////////////////

export const getEvent = (eventId) => (dispatch) => {
    request
      .get(`${baseUrl}/events/${eventId}/tickets`)
      .then(result => {
        console.log("get event result dot body", result.body)  
        dispatch(updateEvent(result.body))})
        
      .catch(err => console.error(err))
}
////////////////////////////

export const addEvent = (data) => (dispatch, getState) => {
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

////////////////////////////