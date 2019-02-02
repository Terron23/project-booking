import React, { Component } from 'react';
import {connect} from 'react-redux';
import StudioHero from './Hero';
import Schedule from '../Schedule';
import { fetchStudio} from '../../actions';
import { Link } from 'react-router-dom';



const StudioIntro = () =>{
 return( <div className="row mb-5 pt-5 justify-content-center">
   <Schedule />
  <div className="col-md-7 text-center section-heading">
    <h2 className="heading">Studios</h2>
    <p></p>
  </div>
</div>)
}


const Studios = ({studioName, price, guest, rules, id, image}) => {
  return ( 
    <div className="col-lg-4 mb-5">
      <div className="block-34">
        <div className="image">
          <a href="#"><img src={image} alt="Placeholder" style={{"width": "400px"}}/></a>
        </div>
        <div className="text">
          <h2 className="heading">{studioName}</h2>
          <div className="price"><sup>$</sup><span className="number">{price}</span><sub>/per hour</sub></div>
          <ul className="specs">
            <li><strong>Guest Allowed</strong> {guest}</li>
            <li><strong>Rules:</strong> {rules}</li>
          </ul>

           <p><Link to={`/find-studio/${id}`} className="btn btn-primary py-3 px-5">View More</Link></p>
        </div>
      </div>
    </div>
    
)
}


const Rating = () => {
  return ( 
    <div className="col-lg-4 mb-5">
      
    </div>
    
)
}

const StudioFilterForm = () =>{
return(<div className="container">
<div className="row mb-5">
  <div className="col-md-12">

    <div className="block">
      <form >
        <div className="row">
        <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
            <label for="checkin">Location</label>
            <div className="field-icon-wrap">
              <div className="icon"><span class="icon-location-arrow"></span></div>
              <input type="text" id="location" className="form-control" />
            </div>
          </div>

          <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
            <label for="checkin">From</label>
            <div className="field-icon-wrap">
              <div className="icon"><span className="icon-calendar"></span></div>
              <input type="text" id="checkin_date" className="form-control" />
            </div>
          </div>
        
          <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
            <label for="checkin">To</label>
            <div className="field-icon-wrap">
              <div className="icon"><span className="icon-calendar"></span></div>
              <input type="text" id="checkout_date" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <label for="checkin">Artists</label>
                <div className="field-icon-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                  <select name="" id="" className="form-control">
             
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4+</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <label for="checkin">Distance</label>
                <div className="field-icon-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                  <select name="" id="" className="form-control">
                  <option value="">All</option>
                    <option value="">5 miles</option>
                    <option value="">10 miles</option>
                    <option value="">15 miles</option>
                    <option value="">25 miles</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 align-self-end">
            <button style={{"marginTop":"10px"}} className="btn btn-primary btn-block">Check Availabilty</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>)
}


class StudioSearch extends Component {

componentDidMount(){
    this.props.fetchStudio()
}


  render() {
      if (!this.props.fetchStudio) {
          return ''
      }
      const { studio } = this.props
    return (<div className="container-fluid">
   
     
    <div className="site-section bg-light">
      <div className="container">
      <StudioFilterForm />
    <div className="row">
    	{studio.map(studio=>{
            return ( 
            <Studios key={studio._id}
            studioName={studio.studioName} 
            price={studio.price}
            rules={studio.rules}
            guest={studio.guest}
            id={studio._id}
            image={studio.studioImage}
             />
            
        )
        })}
        </div>
        </div>
        </div>
      </div>
    );
  }
}




function mapStateToProps({ studio }) {
    return { studio };
  }
  
  export default connect(mapStateToProps, { fetchStudio})(StudioSearch);

