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
          <a href="#"><img src={image} alt="Placeholder" /></a>
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
    <StudioHero />
  
    <StudioIntro />
     
    <div className="site-section bg-light">
      <div className="container">
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

