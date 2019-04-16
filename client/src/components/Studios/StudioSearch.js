import React, { Component } from 'react';
import Schedule from '../Schedule';
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'
import Title from '../assets/Title'
import FeaturedStudio from '../FeaturedStudios'
import MapContainer from '../assets/GoogleMap'
import {connect} from 'react-redux';
import {fetchLocation, fetchStudio} from '../../actions';
import Image from '../assets/Image';
import CardInfo from '../assets/CardInfo';



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
  state: "",
  search: this.props.location.state.search,
  location: this.props.location.state.location,
}

  }

  componentDidMount(){
    this.props.fetchLocation()
    this.props.fetchStudio()
  }


  featureType =()=>{
 return this.props.studio
  .sort((a, b)=>a.rating.length + b.rating.length)
  .filter((studio, i)=> i <= 1000)

  .filter(studio => this.state.search.toLowerCase().match(studio.studioType.toLowerCase()))
  .map((studio)=>{
                return (
                  
                    
                  <div className="col-lg-3 col-md-3" key={studio._id}>
                
                 
                      <Image 
                      src={`${studio.studioImage}`} alt={`${studio.studioName}`} />
                   
                    <CardInfo studioName={studio.studioName} 
                    price={studio.price} 
                    _id={studio._id} 
                    studioType={studio.studioType}/>
                   
                   
                  
                </div>)})
    }

handleTime =(e)=>{

  this.setState({time: e.target.value})
  
  console.log(this.state.time.split("T").pop())
  console.log(this.state.time.substring(this.state.time.indexOf("T"), 4))
  console.log(this.state.time)
  
  }


handleAvailibility = (e) =>{
  e.preventDefault();
  let location = e.target.location.value;
  let search = e.target.search.value;
  // let time = e.target.calendar.value.split("T").pop()
  // let day = e.target.calendar.value.split("T").shift()
  // let m = moment(day, "YYYY-MM-DD");
  // let dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  // let guest = e.target.guest.value
  // let state = e.target.state.value;
  // console.log(time);
  //console.log(dow[m.day()]);

  // this.setState({
  //   filterStudioType: e.target.studioType.value, 
  //   time, day:dow[m.day()],
  // guest, location,
  // state,
  // })

  this.setState({location, search})
console.log(this.state.location)
}

handleChange =(e)=>{
  this.setState({search: e.target.search.value})
}

  render() {
    if(!this.props.studio){
      return 'Loading...'
    }
 
   console.log(this.props)
   console.log(this.state)
    return (<div className="container-fluid">
      {/* <MapContainer /> */}
  
     <Title header='Book A Session' />
   
   
     
    <div className="bg-light-gray">

      <div className="container-fluid">
      
      <Schedule
      search ={this.state.search}
      locate={this.state.location}
      time = {this.state.time}
      classProp={`btn btn-secondary btn-lg`}
      buttonTitle="Search"
      handleSubmit ={this.handleAvailibility}
      />

<div className="container">
<hr />
<p>Filter </p>
<hr />  
</div>

<FeaturedStudio featureType={this.featureType}/>
       
     
        </div>
        </div>
      </div>
    );
  }
}



function mapStateToProps({locate, studio}) {
  return { locate , studio};
}

export default connect(mapStateToProps, {  fetchLocation, fetchStudio })(StudioSearch);



