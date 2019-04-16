import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio} from '../actions';





class FeaturedStudios extends Component {

render(){

    return(


<div className="container-fluid-secondary ">
      <div className="row ">
     
              {this.props.featureType()}

                    </div>
        </div>

)
}
}





export default FeaturedStudios;


// {studio
//   .filter(studio =>{

//     if(this.state.filterStudioType === 'All'){
//       return studio.studioType.length  > 0;
//     }
//     else{
//     return this.state.filterStudioType.toLowerCase() === studio.studioType.toLowerCase() 
    
//     }
//   })
//   .filter(guest=>{
//     return guest.guest >= this.state.guest
//   })
//   .filter(location=>{
//     if(this.state.location === ''){
//       return location.city.length  > 0;
//     }
//     return location.city.toLowerCase()  === this.state.location.toLowerCase() 
//   })
//   .filter(state=> {
//     if(this.state.state === ''){
//       return state.region.length  > 0;
//     }
//     return state.region.toLowerCase()  === this.state.state.toLowerCase() 
//   })
//   .map(studio=>{

//     if(!this.state.day || this.state.day == undefined) {
//     return(
//       <Studios key={studio._id}
//       studioName={studio.studioName} 
//       price={studio.price}
//       rules={studio.rules}
//       guest={studio.guest}
//       id={studio._id}
//       image={studio.studioImage}
//       studioType={studio.studioType}
//       hours={studio.hoursOfOperation}
//       availibility={studio.availibility}
      
//        />)
//     }
// if(studio.availibility === undefined){
//  return '';
// }

      

// return    studio.availibility.filter((thing, index, self) =>{
        
//       return  index === self.findIndex((t) => (
      
//           t.availibility === thing.availibility && t.studioName === thing.studioName )
//           )
        
      
//       }).map(datetime=>{
//            if(datetime.day === this.state.day)
//           return(
//         <Studios key={studio._id}
//         studioName={studio.studioName} 
//         price={studio.price}
//         rules={studio.rules}
//         guest={studio.guest}
//         id={studio._id}
//         image={studio.studioImage}
//         studioType={studio.studioType}
//         hours={studio.hoursOfOperation}
//         availibility={studio.availibility}
        
//          />)  
        
//         })
//     })
   
//     }

