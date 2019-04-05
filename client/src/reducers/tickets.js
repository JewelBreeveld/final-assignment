import { UPDATE_TICKETS, SELL_TICKET, GET_TICKET } from '../actions/tickets'

export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_TICKETS:
        console.log("payload all tickets", payload)
        return {
            ...state,
            [payload.tickets]: payload
        }

        case SELL_TICKET: 
        console.log('payload 1 ticket',payload)
        console.log('user payload', payload.user)
        return {...state, payload}

        case GET_TICKET: 
        console.log('payload get ticket', payload )
        return payload
        
        default:
        return state
    }
}   