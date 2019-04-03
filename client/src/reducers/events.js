import { UPDATE_EVENTS } from '../actions/events'
import { USER_LOGOUT } from '../actions/users'


export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_EVENTS:
        console.log("payload", payload)
        return payload
        
        default:
        return state
    }
}   

// .reduce((events, event) => {
//     events[event.id] = event
//     return events
// }, {})