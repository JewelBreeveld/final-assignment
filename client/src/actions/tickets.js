import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const UPDATE_TICKETS = 'UPDATE_TICKETS'

const updateTickets = tickets => ({
    type: UPDATE_TICKETS,
    payload: tickets
})

export const getTickets = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/tickets`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateTickets(result.body)))
      .catch(err => console.error(err))
}
