


import React, { Component } from 'react';



export default class Schedule extends Component {
  render() {
    return (<div className="container">
      <div className="row mb-5">
        <div className="col-md-12">

          <div className="block-32">
            <form action="#">
              <div className="row">
              <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                  <label for="checkin">Location</label>
                  <div className="field-icon-wrap">
                    <div className="icon"><span className="icon"></span></div>
                    <input type="text" id="location" className="form-control" />
                  </div>
                </div>

                <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                  <label for="checkin">From</label>
                  <div className="field-icon-wrap">
                    <div className="icon"><span className="icon-calendar"></span></div>
                    <input type="text" id="checkin_date" className="form-control" />
                  </div>
                </div>
              
                <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                  <label for="checkin">To</label>
                  <div className="field-icon-wrap">
                    <div className="icon"><span className="icon-calendar"></span></div>
                    <input type="text" id="checkout_date" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label for="checkin">Artists</label>
                      <div className="field-icon-wrap">
                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                        <select name="" id="" className="form-control">
                   
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4+</option>
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
                  <button style={{"marginTop":"10px"}} className="btn btn-primary btn-block">Check Availabilty</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}





