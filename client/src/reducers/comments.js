import { UPDATE_COMMENTS, ADD_COMMENT } from '../actions/comments'

export default (state = null, {type, payload}) => {
    switch(type) {
        
        case ADD_COMMENT: 
        console.log('payload 1 comment',payload)
        //console.log('comment payload', payload.user)
        return payload

        case UPDATE_COMMENTS:
        console.log("payload all comments", payload)
        return payload
        // return {
        //     ...state,
        //     [payload.tickets]: payload
        // 
        
        default:
        return state
    }
} 