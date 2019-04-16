import React, { Component } from 'react';
import FeaturedStudios from './FeaturedStudios';
import Hero from './Hero'
import InfoBubbles from './assets/InfoBubbles';
import BG1 from '../images/01.jpg'
import BG2 from '../images/02.jpg'
import BG3 from '../images/03.jpg'
import Title from './assets/Title'
import Portfolio from './assets/Portfolio'

class Home extends Component {

  
  render() {
const classProp = 'img-fluid rounded-circle image-gallery'
const img1 = <img src={`${BG1}`} className={`${classProp}`} style={{borderRadius: '50%'}} alt='img1'/>
const img2 = <img src={`${BG2}`} className={`${classProp}`} style={{borderRadius: '50%'}} alt='img2' />
const img3 = <img src={`${BG3}`} className={`${classProp}`} style={{borderRadius: '50%'}} alt='img3'/>
    return (
      <div>
        <Hero />


<Title header="Featured Offers Near You" subtitle='Explore Top Rated Venues wherever you are!'/>
<FeaturedStudios type="near-you" totalStudios={3} />

<Title header="Explore" subtitle='Check out venues around the world'>
<Portfolio />
</Title>


<Title header="Listings Just for You!" subtitle='Find what you desire' />

<div className="row">
<InfoBubbles 

img = {img3}
infoTitle="Health & Wellness"
infoText="Strengthen your mind, body and soul by searching through our list of yoga classes, fitness gyms, and meditation retreats."
/>
<InfoBubbles 
img = {img2}
infoTitle="Rock Out to A Live Band"
infoText="Find live shows near you and turn up to whatever genre you fancy."
/>

<InfoBubbles 
img = {img1}
infoTitle="Record A Number 1 Hit"
infoText="Don't just think it, write it or freestyle it... Record It! Search through our list of both home and professional recoding studios and make a hit record."
/>

</div>
<div className="text-center">
<a className="btn btn-secondary btn-lg" href="/search-studio">View All</a>

</div>


    </div>

    );
  }
}


  export default Home;

