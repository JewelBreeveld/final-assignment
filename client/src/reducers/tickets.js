import { UPDATE_TICKETS } from '../actions/tickets'
import { USER_LOGOUT } from '../actions/users'


export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_TICKETS:
        return payload.reduce((tickets, ticket) => {
            tickets[ticket.id] = ticket
            return tickets
          }, {})
    }
}