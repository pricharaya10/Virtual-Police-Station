import React, { Component } from 'react';
import image from './woman-3169726_1920.jpg';
import {Link} from 'react-router-dom';

class AddUserCard extends Component {
    
    render() { 
        return (
            <div className="card center" >
                <div className=" card-image ">
                    <img src={image} className="circle usercard_img" />
                </div>    
                <div className="card-content">
                    <h4 className="black-text">Anupam Das</h4>
                    <h5 className="grey-text">#12131424</h5>
                    <Link to="/prescription" className="btn">Add Prescription</Link> <br /><br />
                    <Link to="#" className="btn">View report</Link>
                </div> 
            </div>
        );
    }
}
 
export default AddUserCard;