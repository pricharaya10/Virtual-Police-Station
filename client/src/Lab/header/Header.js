import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './header.css';
import {Link } from 'react-router-dom';

class Header extends Component {
    
    componentDidMount(){
     
        M.AutoInit();
    }

    
    logout = ()=>{
        fetch("http://localhost:8080/police/logout",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      }
      }).then(res => res.json())
      .then(data => { 
          console.log(data)
        if(data.error){
          alert(`err : ${data.error}`);
        }
        else{
          console.log("1234")
          localStorage.clear()
          window.location.href = '/lab/login';
        }
      }
        ).catch(err => console.log(err))
        }


    render() { 
        return (
            <nav className="transparent">
                <div className="nav-wrapper">
                <a href="#" className="brand-logo center" id="lab_head">Virtual Police Station</a>
                <ul id="nav-mobile" className="right ">
                    <li><Link to="/labprofile">Edit Profile</Link></li>
                    <li><Link onClick={this.logout}>Logout</Link></li>
                </ul>
                </div>
            </nav>
        );
    }
}
 
export default Header;