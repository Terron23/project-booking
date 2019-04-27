import React, { Component } from 'react';
import Schedule from './Schedule'
import Typist from 'react-typist';


export default class Hero extends Component {

  render() {
    const firstHeader = 'A Studio'
    const secondHeader = 'A Yoga Class'
    const thirdHeader = 'A place to Record'
    console.log(this.props)
    return (
      <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">Book & Go</h1>
          <Typist>

          <h2 className="masthead-subheading mb-0">Find, Book, GO</h2>
          {/* {firstHeader} */}
          {/* <Typist.Backspace count={firstHeader.length} delay={1} />
          {secondHeader}
          <Typist.Backspace count={secondHeader.length} delay={100} />
          {thirdHeader}
          <Typist.Backspace count={thirdHeader.length} delay={400} /> */}
          
          </Typist>

       <Schedule 
        handleSubmit={this.props.handleSubmit} 
       locate ={this.props.locate}
       />
       
          
        </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
  
    </header>
  
     

    );
  }
}



