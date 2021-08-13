import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import image2 from './one.png';
import './prescription.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';

class UserPrescription  extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() { 
        return (
            <div>
                <div className="row" id="addPrcptn">
                    <div className="col s12 m12 l4 offset-l2">
                        <img src={image2} className="press_img" /> 
                    </div>
                    <div className="col s12 m12 l4">
                        <h4 className="center">Add Prescription here..</h4>
                        <p className="center">You will be adding prescripttion here...</p>
                        <form className="col s12" id="press_form">
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                <input  id="name_of_hospital" type="text" className="validate white-text " />
                                <label for="name_of_hospital">Name of Hospital</label>
                                </div>
                            </div>    
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                <input id="name_of_patient" type="text" className="validate white-text " />
                                <label for="name_of_patient">Name of Patient</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Age" type="text" className="validate white-text " />
                                    <label for="Age">Age</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Dateofconsultation" type="text" className="validate white-text " />
                                    <label for="Dateofconsulation">Qualification</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="howmanymed" type="text" className="validate white-text " />
                                    <label for="howmanymed">How many medicines are there?</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="medicine_name" type="text" className="validate white-text " />
                                    <label for="medicine_name">Medicine Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="strengthofmed" type="text" className="validate white-text " />
                                    <label for="strengthofmed">Strength of medicine</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Doseofmeditation" type="text" className="validate white-text " />
                                    <label for="Doseofmeditation">Dose</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="Durmed" type="text" className="validate white-text " />
                                    <label for="Durmed">Duration of Medicine</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="DoctorEmail" type="email" className="validate white-text " />
                                    <label for="DoctorEmail">Doctor Email </label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12 prescp">
                                <input id="DoctorKey" type="text" className="validate white-text " />
                                <label for="DoctorKey">Doctor Key</label>
                            </div>
                        </div>
                            <div className="center"><Link to="/hosdash" className="btn ">Submit</Link></div>
                            
                        </form>
                    </div>
                </div>                    
            </div>
        );
    }
}
 
export default UserPrescription;    