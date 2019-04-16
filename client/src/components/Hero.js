import React, { Component } from 'react';
import Schedule from './Schedule'


export default class Hero extends Component {

  render() {
    console.log(this.props)
    return (
      <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h1 class="masthead-heading mb-0">Book & Go</h1>
          <h2 class="masthead-subheading mb-0">Find, Book, Go</h2>

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



