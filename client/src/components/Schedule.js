


import React, { Component } from 'react';



const Schedule = ({studioTypeFilter, time, handleTime, handleAvailibility, block}) => {
  return(<div className="container">
  <div className="row mb-5">
    <div className="col-md-12">
  
      <div className={`${block}`}>
        <form onSubmit={handleAvailibility}>
          <div className="row">
          <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
              <label for="checkin">City or Zip</label>
              <div className="field-icon-wrap">
                <div className="icon"><span class="icon-location-arrow"></span></div>
           <input type="text" id="location" name="location" className="form-control" placeholder="City"/> 
             
              </div>
            </div>
  
             <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
              <label for="checkin">State</label>
              <div className="field-icon-wrap">
                <div className="icon"><span class="icon-location-arrow"></span></div>
                <select id="state" name="state" className="form-control"><option value="">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
             
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
                {/* <div className="col-md-6 mb-3 mb-md-0">
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
                </div> */}
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

  export default Schedule;




