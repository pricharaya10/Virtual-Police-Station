import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './hosprofile.css';
import Header3 from './layouts/header3';
import Hosform from './hosform';
import {Link}  from 'react-router-dom';

class Hosprofile extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(
        <div>
            <Header3 />
            <div className="row" id="edu_exp_pro_row">
                <div className="exp_img col s12 l6 ">
                    <div className="scrollspy hide-on-med-and-up center" id="scroll_spy">
                        <a href="#exp_scrollspy" className="waves-effect waves-light btn white black-text center z-depth-4" id="scroll_spy_btn"><i className="material-icons left">arrow_downward</i>Show Form</a>
                    </div>
                </div>
                <div className="col s12 l6 profile_col2" id="exp_scrollspy">
                    <Hosform />
                </div>
            </div>
            

        </div>
         
        
      );
  }
  
}

export default Hosprofile;  