import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const UPDATE_TICKETS = 'UPDATE_TICKETS'

const updateTickets = payload => ({
    type: UPDATE_TICKETS,
    payload: payload.tickets
})

export const getTickets = (eventId) => (dispatch) => {
  
    request
      .get(`${baseUrl}/events/${eventId}/tickets`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateTickets(result.body)))
      .catch(err => console.error(err))
}
//////////////

export const GET_TICKET = 'GET_TICKET'

const updateTicket = payload => ({
    type: GET_TICKET,
    payload: payload
})

export const getTicket = (eventId, ticketId) => (dispatch) => {
    
    console.log(eventId, "action eventid")
    console.log(ticketId, "action ticketId")
    request
    .get(`${baseUrl}/events/${eventId}/tickets/${ticketId}`)
    .then(result => {
        console.log('get ticket res dot body',result.body)
        dispatch(updateTicket(result.body))
    }
        
        )
    .catch(err => console.error(err))
}
//////////////

export const SELL_TICKET = 'SELL_TICKET'

const sellTicket = event => ({
    type: SELL_TICKET,
    payload: event
})

export const addTicket = (data) => (dispatch, getState) => {
    console.log('addticket action data',data)
    const state = getState();
    const jwt = state.currentUser.jwt;
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .post(`${baseUrl}/events/${data.eventId}/tickets`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(res => {
          console.log('res dot body',res.body)
          dispatch(sellTicket(res.body))
      })
      .catch(err => console.error(err))
}
//////////////
