import React, { Component } from 'react';
import {connect} from 'react-redux';
import Schedule from '../Schedule';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import { fetchStudio, fetchAvailibility} from '../../actions';
import { Link } from 'react-router-dom';
import moment from 'moment'
import axios from 'axios'




const StudioIntro = () =>{
 return( <div className="row mb-5 pt-5 justify-content-center">
   <Schedule />
  <div className="col-md-7 text-center section-heading">
    <h2 className="heading">Studios</h2>
    <p></p>
  </div>
</div>)
}


const Studios = ({studioName, price, guest, rules, id, image, studioType, hours, availibility}) => {
  return ( 
    <div className="col-lg-4 mb-5">
      <div className="block-34">
        <div className="image">
          <a href="#"><img src={image} alt="Placeholder" style={{"width": "400px"}}/></a>
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

const StudioFilterForm = ({studioTypeFilter, time, handleTime, handleAvailibility}) => {
return(<div className="container">
<div className="row mb-5">
  <div className="col-md-12">

    <div className="block">
      <form onSubmit={handleAvailibility}>
        <div className="row">
        <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
            <label for="checkin">Location</label>
            <div className="field-icon-wrap">
              <div className="icon"><span class="icon-location-arrow"></span></div>
         <input type="text" id="location" name="location" className="form-control" placeholder="City, State or Zip"/> 
           
            </div>
          </div>

          <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
            <label for="checkin">Date Time</label>
            <div className="field-icon-wrap">
            
              <div className="icon"><span className="icon-calendar"></span></div>
            {/* <input type="datetime-local" id="checkin_date" className="form-control" />   */}
            <input name="calendar" type="date" className="form-control" defaultValue={time} onChange={handleTime}/>  

        
                    {/* <input name="calendar" type="text" id="checkin_date" className="form-control" defaultValue={time} onChange={handleTime} /> */}
                
          {/* <DateTime id="time" /> */}
           
            </div>
          </div>
        
          <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
          <label for="checkin">Studio Type</label>
                <div className="field-icon-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                  <select name="studioType" onChange={studioTypeFilter} className="form-control">
                    {/* Need Studio Table in DB */}
                    <option defaultValue="">All</option>
                    <option defaultValue="">Recording - Music</option>
                    <option defaultValue="">Recording - Podcast</option>
                    <option defaultValue="">Yoga</option>
                    <option defaultValue="">Photography</option>
                    <option defaultValue="">Film</option>
                    <option defaultValue="">Art</option>
                  </select>
                </div>
          </div>
          <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <label for="checkin">Artists</label>
                <div className="field-icon-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                  <select name="guest" id="" className="form-control">
             
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
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
            <button type="submit"
            style={{"marginTop":"10px"}} 
            className="btn btn-primary btn-block">Check Availabilty</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>)
}


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
  location:""
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
  axios.post(`http://www.zipcodeapi.com/rest/o9assr2FD5UbIIh2dXE7WWQhcZPTPMr6fiHTiQkhEYGIWCaeRTQtmXQopteZ1NiH/multi-distance.json/11221/11216, 11215, 11899, 11443/mile`).then(response=>console.log(response))
  let time = e.target.calendar.value.split("T").pop()
  let day = e.target.calendar.value.split("T").shift()
  let m = moment(day, "YYYY-MM-DD");
  let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let guest = e.target.guest.value
  let location = e.target.location.value;
  console.log(time);
  //console.log(dow[m.day()]);

  this.setState({
    filterStudioType: e.target.studioType.value, 
    time, day:dow[m.day()],
  guest, location
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
      
      <StudioFilterForm 
      studioTypeFilter={this.handleBooking}
      handleAvailibility={this.handleAvailibility}
      handleTime ={this.handleTime}
      time = {this.state.time}
     
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
        return location.city === this.state.location
      })
      .map(studio=>{

        if(!this.state.day) {
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
        
      
            return   studio.availibility = studio.availibility.filter((thing, index, self) =>
            index === self.findIndex((t) => (
              t.availibility === thing.availibility && t.studioName === thing.studioName
            ))
          ).map(datetime=>{
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

