import {combineReducers} from 'redux';
import authReducers from './authReducers.js'
import studioReducers from './studioReducers.js'





export default combineReducers({
    auth: authReducers,
    studio: studioReducers
})
