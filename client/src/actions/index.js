import axios from 'axios'
import {FETCH_USER, FETCH_STUDIO, FETCH_AVAILIBILITY, FETCH_BOOKING} from './types'

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

    export const fetchBookings= () => async dispatch => {
        const res = await axios.get('/api/studioBooked');
        dispatch({type: FETCH_BOOKING, payload: res.data})
        }
// export const UpdateUser = () => async dispatch =>{
//     const res = await axios.post('/api/post-listing', {studioName, price, rules, name, email,address1, address2, postalCode, city, region, phone, venue, studioImage, guest, studioType, hoursOfOperation })
// }


