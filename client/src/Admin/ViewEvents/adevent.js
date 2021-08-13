import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';

import image1 from './img/nature-2608599_1920.jpg';
import image2 from  './img/woman-3169726_1920.jpg';

class AdEvent extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(

                <div className="card" >
                  <div className="card-image">
                    <img src={image1} className="team_teamsec_bkg" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p className="carddes">I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">Grant permission</a>
                  </div>
                  
                  
                </div>
                
         
        
      );
  }
  
}

export default AdEvent;  