import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';





class Payment extends Component {
    render() {
      console.log(this.props.match.params.studioid)
        return (
          <div className="container">
          <div className="checkout col-md-6">
          <h3>This is only a test</h3>
        
          
          <StripeProvider 
          apiKey="pk_test_si8mdcnBScBgROVlk6i3lc7b"
          >
            <div className="example">
              <h2>Book Studio Time</h2>
              <Elements>
                <CheckoutForm studioid={this.props.match.params.studioid} />
              </Elements>
            </div>
          </StripeProvider>
          </div>
          </div>
        );
      }
    }
    
  
  export default Payment;