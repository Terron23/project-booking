import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio, fetchAvailibility} from '../actions';
import { Link } from 'react-router-dom';


class FeaturedStudios extends Component {

render(){
     
    return(
<div className="site-section block-13 bg-light">
<div className="container">
   <div className="row mb-5">
      <div className="col-md-7 section-heading">
        <span className="subheading-sm">Featured Studios</span>
        <h2 className="heading"></h2>
      </div>
    </div>

    <div className="row">
       <div className="col-md-12"> 
         <div className="nonloop-block-13 owl-carousel"> 

        {this.props.studio.sort((a, b)=>a.rating.length + b.rating.length).filter((studio, i)=> i < 3)
        .map((studio)=>{
                      return (
                        
                      <div className="item" key={studio.id}>
                      <div className="block-34">
                        <div className="image">
                          <a href="#"><img classNameName="img" style={{"width": "300px", "height": "300px"}} src={`${studio.studioImage}`} alt={`${studio.studioName}`} /></a>
                        </div>
                        <div className="text">
                          <h2 className="heading">{studio.studioName}</h2>
                          <small>{studio.studioType}</small>
                          <div className="price"><sup>$</sup><span className="number">{studio.price}</span><sub>/per night</sub></div>
                          <ul className="specs">
                          <li><strong>Guest Allowed</strong> {studio.guest}</li>
                        <li><strong>Rules:</strong> {studio.rules}</li>
                          </ul>
                        </div>
                      </div>
                    </div>)})}

            {/* <div className="item">
              <div className="block-34">
                <div className="image">
                  <a href="#"><img src="images/img_1.jpg" alt="Image placeholder" /></a>
                </div>
                <div className="text">
                  <h2 className="heading">Bachelor Room</h2>
                  <div className="price"><sup>$</sup><span className="number">156</span><sub>/per night</sub></div>
                  <ul className="specs">
                    <li><strong>Adults:</strong> 1</li>
                    <li><strong>Categories:</strong> Single</li>
                    <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                    <li><strong>Size:</strong> 20m<sup>2</sup></li>
                    <li><strong>Bed Type:</strong> One bed</li>
                  </ul>
                </div>*/}
              </div>
            </div> 


             

              
       

     
    </div>
</div>
</div>
)
}
}

function mapStateToProps({ studio }) {
    return { studio };
  }
  
  export default connect(mapStateToProps, { fetchStudio })(FeaturedStudios);