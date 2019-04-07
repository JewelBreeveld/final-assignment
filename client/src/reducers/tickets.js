import { UPDATE_TICKETS, SELL_TICKET, GET_TICKET } from '../actions/tickets'

export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_TICKETS:
        console.log("payload all tickets", payload)
        return {
            ...state,
            [payload.tickets]: payload
        }

        case GET_TICKET: 
        console.log('payload get ticket', payload )
        return payload
        
        default:
        return state
    }
}   