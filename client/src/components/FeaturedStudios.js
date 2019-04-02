import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio, fetchAvailibility} from '../actions';
import { Link } from 'react-router-dom';


class FeaturedStudios extends Component {

render(){
     
    return(


<div className="container">
   <div className="row mb-5">
      <div className="col-md-7 section-heading">
        <span className="subheading-sm">Featured Studios</span>
        <h2 className="heading">Top Rated Studios</h2>
      </div>
    </div>

    {/* <div className="row">
       <div className="col-md-12"> 
         <div className="nonloop-block-13 owl-carousel">  */}
<div className="row">
        {this.props.studio.sort((a, b)=>a.rating.length + b.rating.length).filter((studio, i)=> i <= 6)
        .map((studio)=>{
                      return (
                        
                      // <div className="item" key={studio.id}>
                      <div className="col-lg-4 mb-5" key={studio.id}>
                      <div className="block-34">
                        <div className="image">
                          <a href="#"><img classNameName="img" style={{"width": "250px", "height": "250px"}} src={`${studio.studioImage}`} alt={`${studio.studioName}`} /></a>
                        </div>
                        <div className="text">
                          <h2 className="heading">{studio.studioName}</h2>
                          <small>{studio.studioType}</small>
                          <div className="price"><sup>$</sup><span className="number">{studio.price}</span><sub>/per hour</sub></div>
                          <ul className="specs">
                          <li><strong>Guest Allowed</strong> {studio.guest}</li>
                        <li><strong>Rules:</strong> {studio.rules}</li>
                          </ul>

                           <p><Link to={`/find-studio/${studio._id}`} className="btn btn-primary py-3 px-5">View More</Link></p>
                        </div>
                       
                      </div>
                    </div>)})}

              </div>
          


             

              
       

     
//     </div>
// </div>
// </div>
)
}
}

function mapStateToProps({ studio }) {
    return { studio };
  }
  
  export default connect(mapStateToProps, { fetchStudio })(FeaturedStudios);