import { FETCH_STUDIO } from '../actions/types'

export default function(state = [], action){
    switch(action.type){

case FETCH_STUDIO:
return action.payload || false
        default:
        return state;
    }

}