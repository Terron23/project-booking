import React, { Component } from 'react';
import axios from 'axios';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {connect} from 'react-redux';
import { fetchUser, fetchStudio } from '../../actions';




class CheckoutForm extends Component {
    
  
      handleSubmit = async (e) => {
        e.preventDefault()
        let date = new Date();
        let month = date.getMonth() + 1;
        let studioName = e.target.studioname.value;
        let payment = e.target.price.value;
        let studioId = e.target.id.value;
        let dateBooked = month.toString()+"/"+date.getDate().toString()+"/"+date.getFullYear().toString();
        
        

        try {
        let {token} = await this.props.stripe.createToken({name: e.target.name.value});
        let response = await axios.post("/api/payment", {
          token:token.id,
          studioName,
          payment,
          studioId,
          dateBooked,
          studioOwner:"",
          cardInfo: "",
          
        });
       console.log(token)
      console.log(response.ok)
      window.location = "/confirmation";
      console.log("Purchase Complete!")
      if (response.ok) {
         
        console.log("Purchase Complete!")
        }
        }
        catch (e) {
          console.log(e.response) // undefined
        }
      }
  
  
    render() {
      
      if(!this.props.auth || !this.props.studio){
        return ''
      }
      let {auth, studio, studioid } = this.props
      return (
        <div className="container">
        <ul style={{"listStyle": "none"}}>
        {studio.filter(studio=> {
          return studio._id == studioid 
        })
        .map(studio => {
          return(<span>
            <li>Studio Name: {studio.studioName}</li>
            <li>Studio Price: {studio.price}</li>
            <li>Guest Allowed: {studio.guest}</li>
            <li>Venue Type: {studio.venue}</li>
            </span>
          )

        })}
       </ul>
       
         <form onSubmit={this.handleSubmit}>
         
         {studio.filter(studio=> {
          return studio._id == studioid 
        })
        .map(studio => {
          return(<span className="d-none">
         <div className="form-group">
    <label for="email">Studio Name</label>
    <input type="text" name="studioname" className="form-control" value={studio.studioName}/>
  </div>

      <div className="form-group">
    <label for="email">Studio Owner</label>
    <input type="text" name="studioname" className="form-control" value={studio.name}/>
  </div>

   <div className="form-group">
    <label for="email">Price</label>
    <input type="text" name="price" className="form-control"  defaultValue={studio.price}/>
  </div>

    <div className="form-group">
    <label for="email">ID</label>
    <input type="text" name="id" className="form-control" defaultValue={studio._id}/>
  </div> </span>)
        })}
 

  
  <div className="form-group">
    <label for="email">Email</label>
    <input type="email" className="form-control" name="email" defaultValue={auth.email}/>
  </div>

    <div className="form-group">
    <label for="email">Name</label>
    <input type="text" name="name" class="form-control" defaultValue={auth.name} />
  </div>

  <div className="form-group">
  <label>Card Information</label>
          <CardElement className="form-control"  />
          </div>
          <button className="btn btn-primary" type="submit">Purchase</button>

          </form>
    
        </div>
      );
    }
  }

  function mapStateToProps({auth, studio}){
    //State from reducers/index.js file  gets passed to header component as props
    return {auth, studio}
  }
  
  export default connect(mapStateToProps,  { fetchUser , fetchStudio, })(injectStripe(CheckoutForm));