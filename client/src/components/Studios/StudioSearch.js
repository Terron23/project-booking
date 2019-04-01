import React, { Component } from 'react';
import {connect} from 'react-redux';
import Schedule from '../Schedule';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import { fetchStudio, fetchAvailibility} from '../../actions';
import { Link } from 'react-router-dom';
import moment from 'moment'
import axios from 'axios'



const Studios = ({studioName, price, guest, rules, id, image, studioType, hours, availibility}) => {
  return ( 
    <div className="col-lg-4 mb-5">
      <div className="block-34">
        <div className="image">
          <a href="#"><img src={image} style={{"width": "300px", "height": "200px"}}  alt={studioName} /></a>
        </div>
        <div className="text">
          <h2 className="heading">{studioName}</h2>
          <small>{studioType}</small>
          <div className="price"><sup>$</sup><span className="number">{price}</span><sub>/per hour</sub></div>
          <ul className="specs">
            <li><strong>Guest Allowed</strong> {guest}</li>
            <li><strong>Rules:</strong> {rules}</li>
            <li><strong>Hours:</strong> <br />
            {availibility.map(time=>{
          
             let newEndTime;
             let newStartTime
          
             switch(true){
              case time.starttime.substring(0,2) === "13":
              newStartTime = "01"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "14":
              newStartTime = "02"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "15":
              newStartTime = "03"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "16":
              newStartTime = "04"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "17":
              newStartTime = "05"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "18":
              newStartTime = "06"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "19":
              newStartTime = "07"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "20":
              newStartTime = "08"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "21":
              newStartTime = "09"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "22":
              newStartTime = "10"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "23":
              newStartTime = "11"+time.starttime.substring(2,5);
              break;
              case time.starttime.substring(0,2) === "00":
              newStartTime = "12"+time.starttime.substring(2,5);
              break;
              default:
              newStartTime = time.starttime > "11:59" ? time.starttime+' PM': time.starttime+ ' AM' ;;
             }


             switch(true){
              case time.endtime.substring(0,2) === "13":
              newEndTime = "01"+time.endtime.substring(2,5) +" PM";
              break;
              case time.endtime.substring(0,2) === "14":
              newEndTime = "02"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "15":
              newEndTime = "03"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "16":
              newEndTime = "04"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "17":
              newEndTime = "05"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "18":
              newEndTime = "06"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "19":
              newEndTime = "07"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "20":
              newEndTime = "08"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "21":
              newEndTime = "09"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "22":
              newEndTime = "10"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "23":
              newEndTime = "11"+time.endtime.substring(2,5)+" PM";
              break;
              case time.endtime.substring(0,2) === "00":
              newEndTime = "12"+time.endtime.substring(2,5)+" AM";
              break;
              default:
              newEndTime = time.endtime > "11:59" ? time.endtime+' PM': time.endtime+ ' AM' ;
             }
             //let newendTime = time.endtime.substring(0,2) > "12" ? time.endtime.substring(0,2)+time.endtime.substring(2,5);
             
              //time.endtime > "11:59" ? newTime+' PM': time.endtime+ ' AM'
              let starttime = time.starttime > "11:59" ? time.starttime +' PM': time.starttime+ ' AM'
              
              return <li>{time.day +': '+newStartTime+' - '+newEndTime}</li>
            
            })}</li>
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

// const Schedule = ({studioTypeFilter, time, handleTime, handleAvailibility, block}) => {
// return(<div className="container">
// <div className="row mb-5">
//   <div className="col-md-12">

//     <div className={`${block}`}>
//       <form onSubmit={handleAvailibility}>
//         <div className="row">
//         <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
//             <label for="checkin">City or Zip</label>
//             <div className="field-icon-wrap">
//               <div className="icon"><span class="icon-location-arrow"></span></div>
//          <input type="text" id="location" name="location" className="form-control" placeholder="City"/> 
           
//             </div>
//           </div>

//            <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
//             <label for="checkin">State</label>
//             <div className="field-icon-wrap">
//               <div className="icon"><span class="icon-location-arrow"></span></div>
//               <select id="state" name="state" className="form-control"><option value="">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
           
//             </div>
//           </div>

//           <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
//             <label for="checkin">Date Time</label>
//             <div className="field-icon-wrap">
            
//               <div className="icon"><span className="icon-calendar"></span></div>
//             {/* <input type="datetime-local" id="checkin_date" className="form-control" />   */}
//             <input name="calendar" type="date" className="form-control" defaultValue={time} onChange={handleTime}/>  

        
//                     {/* <input name="calendar" type="text" id="checkin_date" className="form-control" defaultValue={time} onChange={handleTime} /> */}
                
//           {/* <DateTime id="time" /> */}
           
//             </div>
//           </div>
        
//           <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
//           <label for="checkin">Studio Type</label>
//                 <div className="field-icon-wrap">
//                   <div className="icon"><span className="ion-ios-arrow-down"></span></div>
//                   <select name="studioType" onChange={studioTypeFilter} className="form-control">
//                     {/* Need Studio Table in DB */}
//                     <option defaultValue="">All</option>
//                     <option defaultValue="">Recording - Music</option>
//                     <option defaultValue="">Recording - Podcast</option>
//                     <option defaultValue="">Yoga</option>
//                     <option defaultValue="">Photography</option>
//                     <option defaultValue="">Film</option>
//                     <option defaultValue="">Art</option>
//                   </select>
//                 </div>
//           </div>
//           <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
//             <div className="row">
//               <div className="col-md-6 mb-3 mb-md-0">
//                 <label for="checkin">Artists</label>
//                 <div className="field-icon-wrap">
//                   <div className="icon"><span className="ion-ios-arrow-down"></span></div>
//                   <select name="guest" id="" className="form-control">
             
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                   </select>
//                 </div>
//               </div>
//               {/* <div className="col-md-6 mb-3 mb-md-0">
//                 <label for="checkin">Distance</label>
//                 <div className="field-icon-wrap">
//                   <div className="icon"><span className="ion-ios-arrow-down"></span></div>
//                   <select name="" id="" className="form-control">
//                   <option value="">All</option>
//                     <option value="">5 miles</option>
//                     <option value="">10 miles</option>
//                     <option value="">15 miles</option>
//                     <option value="">25 miles</option>
//                   </select>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-3 align-self-end">
//             <button type="submit"
//             style={{"marginTop":"10px"}} 
//             className="btn btn-primary btn-block">Check Availabilty</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// </div>)
// }


class StudioSearch extends Component {
  constructor(props){
    super(props);
this.state = {

  filterStudioType: "All",
  filterGuest: 0,
  zip: null,
  miles: '',
  time: "",
  day: "",
  availibility:[],
  guest: "",
  location:"",
  state: "",
}

  }

componentDidMount(){
    this.props.fetchStudio()
    this.props.fetchAvailibility()

    this.setState({availibility: this.props.fetchAvailibility()})
    
 console.log(this.state.availibility)
}

// handleBooking =(e)=>{

// this.setState({filterStudioType: e.target.value})

// console.log(this.state.filterStudioType)

// }




handleTime =(e)=>{

  this.setState({time: e.target.value})
  
  console.log(this.state.time.split("T").pop())
  console.log(this.state.time.substring(this.state.time.indexOf("T"), 4))
  console.log(this.state.time)
  
  }


handleAvailibility = (e) =>{
  e.preventDefault();
  // let {zip, miles} = this.state
  // axios.post(`https://www.zipcodeapi.com/rest/GayLTCKMsaaeXHv6anHFEzXIfSaEvdWY82fv7FqHZ1rhkB8p0yDFGkvrDe4BY1OS/multi-distance.json/11221/11221,11223,11215,11226/mile`)
  // .then((response)=>{
  //   console.log(response)
  // });
  let time = e.target.calendar.value.split("T").pop()
  let day = e.target.calendar.value.split("T").shift()
  let m = moment(day, "YYYY-MM-DD");
  let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let guest = e.target.guest.value
  let location = e.target.location.value;
  let state = e.target.state.value;
  console.log(time);
  //console.log(dow[m.day()]);

  this.setState({
    filterStudioType: e.target.studioType.value, 
    time, day:dow[m.day()],
  guest, location,
  state,
  })


  console.log(this.state.location)
}


  render() {
      if (!this.props.fetchStudio) {
          return ''
      }
      const { studio } = this.props
   
    return (<div className="container-fluid">
   
     
    <div className="site-section bg-light">

      <div className="container">
      
      <Schedule
      studioTypeFilter={this.handleBooking}
      handleAvailibility={this.handleAvailibility}
      handleTime ={this.handleTime}
      time = {this.state.time}
     block="block"
      />
    <div className="row">
      {studio
      .filter(studio =>{

        if(this.state.filterStudioType === 'All'){
          return studio.studioType.length  > 0;
        }
        else{
        return this.state.filterStudioType.toLowerCase() === studio.studioType.toLowerCase() 
        
        }
      })
      .filter(guest=>{
        return guest.guest >= this.state.guest
      })
      .filter(location=>{
        if(this.state.location === ''){
          return location.city.length  > 0;
        }
        return location.city.toLowerCase()  === this.state.location.toLowerCase() 
      })
      .filter(state=> {
        if(this.state.state === ''){
          return state.region.length  > 0;
        }
        return state.region.toLowerCase()  === this.state.state.toLowerCase() 
      })
      .map(studio=>{

        if(!this.state.day || this.state.day == undefined) {
        return(
          <Studios key={studio._id}
          studioName={studio.studioName} 
          price={studio.price}
          rules={studio.rules}
          guest={studio.guest}
          id={studio._id}
          image={studio.studioImage}
          studioType={studio.studioType}
          hours={studio.hoursOfOperation}
          availibility={studio.availibility}
          
           />)
        }
   if(studio.availibility === undefined){
     return '';
   }
  
          
   
   return    studio.availibility.filter((thing, index, self) =>{
            
          return  index === self.findIndex((t) => (
          
              t.availibility === thing.availibility && t.studioName === thing.studioName )
              )
            
          
          }).map(datetime=>{
               if(datetime.day === this.state.day)
              return(
            <Studios key={studio._id}
            studioName={studio.studioName} 
            price={studio.price}
            rules={studio.rules}
            guest={studio.guest}
            id={studio._id}
            image={studio.studioImage}
            studioType={studio.studioType}
            hours={studio.hoursOfOperation}
            availibility={studio.availibility}
            
             />)
             
             
            
            })
        })
       
        }
        
        
        
        
       
       
        </div>
        </div>
        </div>
      </div>
    );
  }
}




function mapStateToProps({ studio , availibility}) {
    return { studio, availibility };
  }
  
  export default connect(mapStateToProps, { fetchStudio, fetchAvailibility})(StudioSearch);

