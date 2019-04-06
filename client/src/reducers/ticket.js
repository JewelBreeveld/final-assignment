import {  GET_TICKET, EDIT_TICKET } from '../actions/tickets' //UPDATE_TICKET,

export default (state = null, {type, payload}) => {
    switch(type) {
        // case UPDATE_TICKET:
        // console.log("payload update 1 ticket", payload)
        // return {
        //     ...state,
        //     [payload.tickets]: payload
        // }

        case GET_TICKET: 
        console.log('payload get ticket', payload)
        return payload

        case EDIT_TICKET: 
        console.log('payload edited ticket', payload)
        return payload
        
        default:
        return state
    }
}   