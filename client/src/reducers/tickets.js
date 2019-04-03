import { UPDATE_TICKETS } from '../actions/tickets'

export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_TICKETS:
        console.log("payload all tickets", payload)
        return payload

        case UPDATE_TICKET: 
        console.log('payload 1 ticket',payload)
        return payload
        
        default:
        return state
    }
}   