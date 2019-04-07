import {  GET_TICKET, EDIT_TICKET } from '../actions/tickets' //UPDATE_TICKET,
import { ADD_COMMENT} from '../actions/comments'

export default (state = null, {type, payload}) => {
    switch(type) {

        case EDIT_TICKET: 
        console.log('payload edited ticket', payload)
        console.log('state edited ticket', state)
        return payload

        case GET_TICKET: 
        console.log('payload get ticket', payload)
        console.log('state get ticket', state)
        return payload

        case ADD_COMMENT: 
            return {...state, payload}

        
        default:
        return state
    }
}   