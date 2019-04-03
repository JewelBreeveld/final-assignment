import { UPDATE_EVENTS, UPDATE_EVENT } from '../actions/events'
//import { USER_LOGOUT } from '../actions/users'


export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_EVENTS:
        //console.log("payload all events", payload)
        return payload

        case UPDATE_EVENT: 
        //console.log('payload 1 event',payload)
        return payload
        
        default:
        return state
    }
}   