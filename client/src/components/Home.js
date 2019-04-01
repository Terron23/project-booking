import React, { Component } from 'react';
import Schedule from './Schedule'
import FeaturedStudios from './FeaturedStudios';
import Hero from './hero'


class Home extends Component {

  
  render() {

    return (
      <div>
        <Hero />
      <Schedule block="block-32"  />


      <FeaturedStudios 
      />
    </div>

    );
  }
}


  export default Home;

