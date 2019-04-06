import { UPDATE_COMMENTS } from '../actions/comments'

export default (state = null, {type, payload}) => {
    switch(type) {
        case UPDATE_COMMENTS:
        console.log("payload all comments", payload.comments)
        return payload.comments
        // return {
        //     ...state,
        //     [payload.tickets]: payload
        // }

        // case ADD_COMMENT: 
        // console.log('payload 1 comment',payload)
        // //console.log('comment payload', payload.user)
        // return {...state, payload}
        
        default:
        return state
    }
} 