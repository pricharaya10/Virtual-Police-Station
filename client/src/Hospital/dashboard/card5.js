import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './dashboard.css';
import {Link} from 'react-router-dom';


class Card5 extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(
        
        <div className="card z-depth-4" id="r2_cards" >
            <div className="row">
                <div className="col s6 center" id="r2_cards_c"  >
                    <i className="fas fa-edit large " id="r2_icon"></i><br />
                    <Link to="/adduserprofile" className="btn z-depth-3" id="r2_btn">Register FIR</Link>&nbsp;
                    
                </div>
                <div className="col s6 " id="r2_c_cimg">

                </div>
            </div>
        </div>
        
      );
  }
  
}

export default Card5;  