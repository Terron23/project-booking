import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import { fetchUser } from '../actions';
import { Link } from 'react-router-dom';



class ListStudio extends Component {
constructor(props){
super(props);
this.state ={
    files: null,
    url: null,
    alert: "d-none",
    dates: [],
    from: [],
    formControl: null,
    studioName:"",
}
}


componentDidMount(){
    this.props.fetchUser()
}


handleFiles = (event) => {
   console.log(event.target.files[0])

  this.setState({files : event.target.files[0]})
}

handleClick =()=>{
    this.setState({alert: "d-none"})
}

handleDates =(e)=>{
e.preventDefault()
   let dates = [...this.state.dates] 
 
   dates.push([<form >
       <div className="row" key={dates.length}>
       <div className="col-md-4">
   <div className="form-group">
   Days
   <select  onChange={this.handleChange} name={`hoursOfOperation`} className="form-control dates" defalutValue="Sunday">
    <option>Sunday</option>
    <option>Monday</option>
    <option>Tuesday</option>
    <option>Wednesday</option>
    <option>Thursday</option>
    <option>Friday</option>
    <option>Saturday</option>
    </select>
    </div>
    </div>
    <div className="col-md-4">
       From: <input  name={`timefrom`}  type="time" defaultValue="" className="form-control timepicker dates"/>
        </div>
        <div className="col-md-4">
        To: <input   name={`timeto`} type="time" defaultValue="" className="form-control timepicker dates"/>
        </div>
    </div>
    <button onClick={this.handleSubForm} >Submit</button>
    </form>])


  this.setState({dates})

}
// handleChange =(e)=>{
//     //this.setState({formControl: document.getElementsByClassName("dates")})
//     let time = [] 
//     time.push({day: e.target.hoursOfOperation.value})
//     console.log(time);
//     this.setState({time})

//     console.log("FormDtaes", this.state.formControl)
// }

// handleSubForm =(e)=>{
//     let time = [] 
//     time.push({day: e.target.hoursOfOperation.value})
//     console.log(time);
//     this.setState({time})
// }

handleChange =(e)=>{
this.setState({studioName: e.target.value})
console.log(this.state.studioName)
}

handleSubmit = async (event) => {
event.preventDefault();


//console.log(files[0])
let name = event.target.name1.value
let address1 = event.target.address1.value
let address2 =  event.target.address2.value
let postalCode = event.target.postalCode.value
let city = event.target.city.value
let region = event.target.region.value
let email= event.target.email.value
let phone = event.target.phone.value
let venue = event.target.venue.value
let studioName =  event.target.studioName.value
let price =  event.target.price.value
let rules = event.target.rules.value
let guest = event.target.guest.value
let studioType = event.target.studioType.value
let hoursOfOperation = event.target.hoursOfOperation.value
let files = this.state.files
let studioImage; 


const formData = new FormData();
formData.append('file', files)
formData.append('upload_preset', 'nyv0ihyq')


try {
const cloudResponse = await axios.post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)

studioImage = await cloudResponse.data.url

const studioUploadResponse = await axios.post('/api/post-listing', {studioName, price, rules, name, email,address1, address2, postalCode, city, region, phone, venue, studioImage, guest, studioType, hoursOfOperation })

// const studioUploadResponse = await axios.post('/api/post-listing', formData)

await this.setState({alert: "alert alert-success"});

       

}

catch(err){
throw err;
}

}



  render() {
      if (!this.props.auth) {
          return ''
      }
      const { auth } = this.props
      const { alert , studioName} = this.state
    return (
    <div className="container-fluid site-section">
    <div className={`text-center fixed-top ${alert}`}>
    <span onClick={this.handleClick}>X</span>
    <p>New Studio has been added</p>
    </div>
  
    <div className="container">
    <h3>Add Your Studio</h3>
    <hr />
    	 <form id="myForm" className="form-horizontal col-md-6" onSubmit={this.handleSubmit}>
        
            <fieldset>

                <div className="form-group">
                    <label className="control-label">Studio Name</label>
                    <div className="form-group">
                        <input id="studio-name" name="studioName" type="text" placeholder="Enter the Name of Your Studio"
                        className="form-control" 
                        defaultValue="" onChange={this.handleChange} />
                      
                    </div>
                </div>

                 <div className="form-group">
                    <label className="control-label">Price</label>
                    <div className="form-group">
                        <input id="price" name="price" type="number" min="10" step="1" max="300" placeholder=""
                        className="form-control" 
                        defaultValue=""/>
                      
                    </div>
                </div>

                 
                 <div className="form-group">
                <label className="control-label">Studio Type</label>
                <select name="studioType" className="form-control">
                    {/* Need Studio Table in DB */}
                    <option value="Recording - Music">Recording - Music</option>
                    <option value="Recording - Podcast">Recording - Podcast</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Photography">Photography</option>
                    <option value="Film">Film</option>
                    <option value="Art">Art</option>
                  </select>
                  </div>

                  <div className="form-group d-none">
                <label className="control-label">Availibility</label><br />
                {/* {this.state.dates.map(dates =>{
                    return dates
                })}
              
                <a href="" onClick={this.handleDates}>Add Hours of Operation</a> */}
                <input name="hoursOfOperation" value="none" className="d-none hide" />
                  </div>

                    

                 <div className="form-group">
                    <label className="control-label">Rules</label>
                    <div className="form-group">
                        <textarea id="rules" name="rules"  max="2500" placeholder="Example: Minimum 2 hr sessions No smoking and No alcohol"
                          className="form-control" 
                          defaultValue=""></textarea>
                      
                      
                    </div>
                </div>


                 <div className="form-group">
                    <label className="control-label">Number of Guest Allowed</label>
                    <div className="form-group">
                        <input id="guest" name="guest" type="number" min="1" step="1" max="300" placeholder=""
                        className="form-control" 
                        defaultValue=""/>
                      
                    </div>
                </div>

 

                <div className="form-group">
                    <label className="control-label">Full Name</label>
                    <div className="form-group">
                        <input id="full-name" name="name1" type="text" placeholder="full name"
                        className="form-control" 
                        defaultValue={auth.name}/>
                        <p className="help-block"></p>
                    </div>
                </div>

                   <div className="form-group">
                    <label className="control-label">Email</label>
                    <div className="form-group">
                        <input id="full-name" name="email" type="email" placeholder="email"
                        className="form-control"
                        defaultValue={auth.email}/>
                        <p className="help-block"></p>
                    </div>
                </div>

             
                   <div className="form-group">
                    <label className="control-label">Phone</label>
                    <div className="form-group">
                        <input id="phone" name="phone" type="phone" placeholder="Phone Number"
                        className="form-control"
                        defaultValue={""}/>
                       
                    </div>
                </div>
           
                <div className="form-group">
                    <label className="control-label">Address Line 1</label>
                    <div className="form-group">
                        <input id="address-line1" name="address1" type="text" placeholder="address line 1"
                        className="form-control" defaultValue=""/>
                        <p className="help-block">Street address, P.O. box, company name, c/o</p>
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="control-label">Address Line 2</label>
                    <div className="form-group">
                        <input id="address-line2" name="address2" type="text" placeholder="address line 2"
                        className="form-control"
                        defaultValue=""/>
                      
                    </div>
                </div>
         
                <div className="form-group">
                    <label className="control-label">City / Town</label>
                    <div className="form-group">
                        <input id="city" name="city" type="text" placeholder="city" className="form-control" defaultValue=""/>
                        
                    </div>
                </div>
            
                <div className="form-group">
                    <label className="control-label">State / Province / Region</label>
                    <div className="form-group">
                        <input id="region" name="region" type="text" placeholder="state / province / region"
                        className="form-control" defaultValue=""/>
                      
                    </div>
                </div>

                   <div className="form-group">
                    <label className="control-label">Venue</label>
                    <div className="form-group">
                       <select name="venue" className="form-control">
                           <option>Home </option>
                           <option>Business</option>
                           </select>
                      
                    </div>
                </div>
              
                <div className="form-group">
                    <label className="control-label">Zip / Postal Code</label>
                    <div className="form-group">
                        <input id="postal-code" name="postalCode" type="text" placeholder="zip or postal code"
                        className="form-control" defaultValue=""/>
                        
                    </div>
                </div>
              
               
          
                <label className="control-label">Add Studio Images</label>   
        <div className="custom-file form-group">
       
        <div className="form-group">

<input className="form-control" type="file"  onChange={this.handleFiles} multiple />
  </div>
</div>
{this.state.formControl}
<hr />

   <div className="form-group row">
   
<button className="btn btn-primary" type="submit">Submit</button>
</div>
<div className="form-group row">
<Link to={`/availibility/${studioName}`} className={`btn btn-primary ${alert}`} >Add Availibility</Link>
</div>

                     
                 
            
            </fieldset>
        </form>
      </div>
      </div>
    );
  }
}




function mapStateToProps({ studio, auth }) {
    return { studio, auth };
  }
  
  export default connect(mapStateToProps, { fetchUser })(ListStudio);

