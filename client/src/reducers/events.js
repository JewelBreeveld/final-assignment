import { UPDATE_EVENTS, UPDATE_EVENT, CREATE_EVENT } from '../actions/events'
//import { USER_LOGOUT } from '../actions/users'


export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_EVENTS:
        console.log("payload all events", payload)
        console.log("type all events", type)
        return payload

        case UPDATE_EVENT: 
        //console.log('payload 1 event',payload)
        return payload

        case CREATE_EVENT:
        console.log('payload create event', payload)
        console.log('state create event', state.event)
        //still needs some work, state = object, state.event = array of objects
        return [...state, payload]

        default:
        return state
    }
}   