import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './doctorlist.css';
import image1 from './img/croods.png';
import Header2 from './layouts/header2';
import Doctorcard from './doctor cards/doctorcard';
class Doctorlist extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(
        <div>
            <Header2 />
            <div className="row d_bkg"  >
                <div className="col s12 l5" id="dlist_col1">
                    <img src={image1}  id="d_img" alt="" />
                </div>
                <div className="col s12 l7  black-text "  >    
                    <div className="input-field col s12" id="d_srch">
                        
                        <i className="material-icons prefix blgs_srch_icon black-text">search</i>
                        <input type="text" placeholder="Search Events here" id="autocomplete-input" className="autocomplete black-text" />
                    
                    </div>
                    <div className="row" >
                        
                            <div className="col s12 m6 l6">
                                <Doctorcard />
                            </div>
                            <div className="col s12 m6 l6">
                                <Doctorcard />
                            </div>
                            <div className="col s12 m6 l6">
                                <Doctorcard />
                            </div>
                            <div className="col s12 m6 l6">
                                <Doctorcard />
                            </div>
                        
                    </div>
                </div>
            
            </div>
            

        </div>
         
        
      );
  }
  
}

export default Doctorlist;  