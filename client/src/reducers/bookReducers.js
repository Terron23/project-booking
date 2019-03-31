import { FETCH_BOOKING } from '../actions/types'

export default function(state = 'test', action){
    switch(action.type){
        case FETCH_BOOKING:
        return action.payload || false

        default:
        return state;
    }

}