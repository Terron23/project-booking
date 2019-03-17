import React, { Component } from 'react';
import axios from 'axios'
import {CardElement, injectStripe} from 'react-stripe-elements';




class CheckoutForm extends Component {
    
  
      handleSubmit = async (e) => {
        e.preventDefault()
        try {
        let {token} = await this.props.stripe.createToken({name: e.target.name.value});
        let response = await axios.post("/api/payment", {
          token:token.id
        });
       console.log(token)
      
        if (response.ok) {
        console.log("Purchase Complete!")
        }
        }
        catch (e) {
          console.log(e.response) // undefined
        }
      }
  
    render() {
      return (
        <div className="container">
       
         <form onSubmit={this.handleSubmit}>
         <div className="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" />
  </div>

    <div className="form-group">
    <label for="email">Name as it Appears On Credit Card</label>
    <input type="text" name="name" class="form-control" id="name" defaultValue=""/>
  </div>

  <div className="form-group">
  <label>Card Information</label>
          <CardElement className="form-control" />
          </div>
          <button className="btn btn-primary" type="submit">Purchase</button>

          </form>
    
        </div>
      );
    }
  }
  
  export default injectStripe(CheckoutForm);