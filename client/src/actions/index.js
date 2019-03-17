import axios from 'axios'
import {FETCH_USER, FETCH_STUDIO, FETCH_AVAILIBILITY} from './types'

export const fetchUser = () => async dispatch => {
const res = await axios.get('/api/current_user');
dispatch({type: FETCH_USER, payload: res.data})
    }

export const fetchStudio = () => async dispatch => {
const res = await axios.get('/api/studio-listing');
dispatch({type: FETCH_STUDIO, payload: res.data})
}


export const fetchAvailibility= () => async dispatch => {
    const res = await axios.get('/api/availibility');
    dispatch({type: FETCH_AVAILIBILITY, payload: res.data})
    }


