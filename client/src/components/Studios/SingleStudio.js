import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio} from '../../actions';
import { Link } from 'react-router-dom';






const Studios = ({studioName, price, guest, rules, id, image}) => {
  return ( 
    <div class="col-md-12">
            
    <div class="block-3 d-md-flex">
    <div class="image" style={{"backgroundImage":`url(${image})` }}></div>
      <div class="text">

        <h2 class="heading">{studioName}</h2>
        <div class="price"><sup>$</sup><span class="number3">{price}</span><sub>/per hour</sub></div>
        <ul class="specs mb-5">
            <li><strong>Guest Allowed</strong> {guest}</li>
            <li><strong>Rules:</strong> {rules}</li>
        </ul>

        <p><Link to={`/payment/${id}`} className="btn btn-primary py-3 px-5">Book</Link></p>

      </div>
    </div>


  </div>  

    
)
}





class SingleStudio extends Component {



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
    <div className="row">
    	{studio.map(studio=>{
            if(this.props.match.params.id === studio._id){
            return ( 
            <Studios 
            studioName={studio.studioName} 
            price={studio.price}
            rules={studio.rules}
            guest={studio.guest}
            id={studio._id}
            image={studio.studioImage}
             />
            
        )
    }
    else{
        return ''
    }
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
  
  export default connect(mapStateToProps, { fetchStudio})(SingleStudio);

