import * as request from 'superagent'
import {baseUrl} from '../constants'
//import {logout} from './users'
//import {isExpired} from '../jwt'

export const UPDATE_TICKETS = 'UPDATE_TICKETS'

const updateTickets = payload => ({
    type: UPDATE_TICKETS,
    payload: payload.tickets
})

export const getTickets = (eventId) => (dispatch, getState) => {
    //console.log(eventId, '!!!!!')
    // const state = getState()
    // console.log('get tickets action ... state', state)
    // if (!state.currentUser) return null
    // const jwt = state.currentUser.jwt
    // if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/events/${eventId}/tickets`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateTickets(result.body)))
      .catch(err => console.error(err))
}


// {"id":1,
// "name":"feestje",
// "description":"het leukste feestje van nederland",
// "urlPictureLogo":"http://www.logohut.in/wp-content/uploads/2016/11/EVENT-TICKET-LOGO-200026-600x351.jpg",
// "startDate":"2019-04-21",
// "endDate":"2019-04-22",
// "tickets":[
//     {"id":2,"description":"because i got ill","price":90,"picture":""},
//     {"id":1,"description":"for sale because we bought too much tickets","price":100,"picture":""},
//     {"id":4,"description":"for sale because we bought too much tickets","price":100,"picture":""},
//     {"id":5,"description":"for sale because we bought too much tickets","price":100,"picture":""},
//     {"id":6,"description":"for sale because we bought too much tickets","price":100,"picture":""},
//     {"id":7,"description":"for sale because we bought too much tickets","price":100,"picture":""},
//     {"id":8,"description":"for sale because we bought too much tickets","price":100,"picture":""},
//     {"id":3,"description":"for sale because we bought too much tickets","price":88,"picture":""}]}