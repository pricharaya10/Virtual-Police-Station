import React,{ Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import { Link } from 'react-router-dom';

import image1 from '../img/clinic-2921858_1920.jpg';
import image2 from '../img/heart-care-1040250_1280.jpg';
import './nav.css';


class Header6 extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    
    logout = ()=>{
        fetch("http://localhost:8080/admin/logout",{
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
          window.location.href = '/';
        }
      }
        ).catch(err => console.log(err))
        }
    

    render(){
        return(
            <nav className="log_nav " >
            <div className="navbar-fixed">
                <div className="nav-wrapper ">
                    <Link to="#!" className="brand-logo center " id="navh">Virtual Police Station</Link>
                    <ul id="nav-mobile " className="right" >
                        <li><Link to="#" data-target="slide-out"  className=" sidenav-trigger show-on-large  right"><i className="material-icons">menu</i></Link></li>
                    </ul>
                    
                </div>
            </div>
    
            
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src={image1} className="responsive-img center" />
                        </div>
                        <Link ><span className="white-text name">Admin</span></Link>
                        <Link ><span className="white-text email">You are an admin</span></Link>
                    </div>               
                </li>
                <li><Link to="admindash" className="waves-effect" ><i className="material-icons">dashboard</i>Dashboard</Link></li>
                <li><div className="divider "></div></li>
                <li><Link to="/adviewcomplain" className="waves-effect" ><i className="fas fa-clipboard-list"></i>View Complain   </Link></li>
                <li><div className="divider "></div></li>
                <li><Link to="/adviewevents" className="waves-effect" ><i className="fas fa-clipboard-list"></i>View Events</Link></li>
                <li><div className="divider "></div></li>
                
                <li><Link className="waves-effect" onClick={this.logout}><i className="material-icons">arrow_back</i>Logout</Link></li>
                <li><div className="divider "></div></li>
            </ul>
      </nav>
        )
    }
}

export default Header6;