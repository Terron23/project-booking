import React, { Component } from 'react';
import Schedule from './Schedule'
import BG2 from '../images/bg_2.jpg'
import BG1 from '../images/bg_1.jpg'
import BG3 from '../images/bg_3.jpg'


export default class Hero extends Component {
  render() {
    return (
      <div className="block-31" style={{"position": "relative"}}>

      <div className="owl-carousel loop-block-31 ">

        <div className="block-30 item" style={{"backgroundImage": `url(${BG1})`}} data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <span className="subheading-sm">Create</span>
                <h2 className="heading">A Number 1 Hit</h2>
                <p><a href="/search-studio" className="btn py-4 px-5 btn-primary">Book A Session</a></p>
              
              </div>
            </div>
          </div>
        </div>
        <div className="block-30 item" style={{"backgroundImage": `url(${BG2})`}} data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <span className="subheading-sm">Create</span>
                <h2 className="heading">Passive Income</h2>
                <p><a href="/search-studio" className="btn py-4 px-5 btn-primary">Book A Session</a></p>
               
              </div>
            </div>
          </div>
        </div>
        <div className="block-30 item" style={{"backgroundImage": `url(${BG3})`}} data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <span className="subheading-sm">Create</span>
                <h2 className="heading">Connections</h2>
                <p><a href="/search-studio" className="btn py-4 px-5 btn-primary">Book A Session</a></p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <Schedule />
    </div>

    );
  }
}


