import React, { Component } from 'react';
import BG1 from '../.././images/city/ny.jpg'
import BG2 from '../.././images/city/vegas.jpg'
import BG3 from '../.././images/city/la.jpg'
import BG4 from '../.././images/city/seattle.jpg'
import BG5 from '../.././images/city/bklyn.jpg'
import BG6 from '../.././images/city/no.jpg'



export default class Portfolio extends Component {
  render() {
    return (     
      <section id="portfolio">
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="/">
              <img class="img-fluid" src={`${BG1}`} alt="" style={styles.imgStyle} />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  New York
                </div>
                <div class="project-name">
                  
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="/">
            <img class="img-fluid" src={`${BG2}`} alt="" style={styles.imgStyle} />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                 Las Vegas
                </div>
                <div class="project-name">
                  
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="/">
            <img class="img-fluid" src={`${BG3}`} alt="" style={styles.imgStyle} />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                 HollyWood, CA
                </div>
                <div class="project-name">
                  
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="/">
            <img class="img-fluid" src={`${BG4}`} alt="" style={styles.imgStyle} />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Seattle
                </div>
                <div class="project-name">
                
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="/">
            <img class="img-fluid" src={`${BG5}`} alt="" style={styles.imgStyle} />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  Brooklyn
                </div>
                <div class="project-name">
                 
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="/">
            <img class="img-fluid" src={`${BG6}`} alt="" style={styles.imgStyle} />
              <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">
                 New Orleans
                </div>
                <div class="project-name">
                
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
<br />
<br />
              <div className="text-center">
<a className="btn btn-secondary btn-lg" href="/search-studio">Explore More Studios</a>

</div>
    </section>
     

    );
  }
}

const styles={
  imgStyle:{
 height: 300,
 width: 550,
  }
}

