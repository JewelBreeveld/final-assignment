import { UPDATE_EVENT } from '../actions/events'
import { SELL_TICKET} from '../actions/tickets'

export default (state = null, {type, payload}) => {
    switch(type) {
        
        case UPDATE_EVENT: 
        console.log('payload 1 event', payload)
        return payload

        case SELL_TICKET: 
        console.log("state sell ticket", state)
        return {...state,
                ...state.tickets.push(payload)}
        // case CREATE_EVENT:
        // console.log('payload create event', payload)
        // console.log('state create event', state)
        // //still needs some work, state = object, state.event = array of objects, error still unsolved
        // return [...state, payload]

        default:
        return state
    }
}   