import React, { Component } from 'react';
import './addUser.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import AddUserCard from './addUserCard';
import {Link } from 'react-router-dom';

class AddUser extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render() { 
        return (
            <div >
                <div className="adduserbkg  center">
                    <h2 className=" adduser_head">Search User here and add prescription here..</h2>
                    <div className="row ">
                    
                        <div className="input-field col s12 m12 l8 offset-l2 " id="adduser_srch">                        
                            <i className="material-icons prefix black-text">search</i>
                            <input type="text" placeholder="Search User here"  className=" black-text" />
                            < br />
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="row" >
                    <div className="col s10 offset-s1">
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                        <div className="col s12 m6 l3">
                            <AddUserCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddUser;