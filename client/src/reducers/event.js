import { UPDATE_EVENT } from '../actions/events'

export default (state = null, {type, payload}) => {
    switch(type) {
        
        case UPDATE_EVENT: 
        console.log('payload 1 event', payload)
        return payload

        // case CREATE_EVENT:
        // console.log('payload create event', payload)
        // console.log('state create event', state)
        // //still needs some work, state = object, state.event = array of objects, error still unsolved
        // return [...state, payload]

        default:
        return state
    }
}   