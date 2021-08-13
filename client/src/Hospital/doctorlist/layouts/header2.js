import React,{ Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import { Link } from 'react-router-dom';

import image1 from '../img/clinic-2921858_1920.jpg';
import image2 from '../img/heart-care-1040250_1280.jpg';
import './nav.css';


class Header2 extends Component {
    componentDidMount(){
        M.AutoInit();
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
                            <Link to="#!user"><img className="circle " src={image2} /></Link>
                            <Link to="#!name"><span className="white-text name">John Doe</span></Link>
                            <Link to="#!email"><span className="white-text email">jdandturk@gmail.com</span></Link>
                        </div>               
                    </li>
                    <li><Link to="hosdash" className="waves-effect" ><i className="material-icons">dashboard</i>Dashboard</Link></li>
                    <li><div className="divider "></div></li>
                    <li><Link to="regcomplain" className="waves-effect" ><i className="fas fa-clipboard-list"></i>Register Complain</Link></li>
                    <li><div className="divider "></div></li>
                    <li><Link to="doclist" className="waves-effect" ><i className="fas fa-clipboard-list"></i>View FIR</Link></li>
                    <li><div className="divider "></div></li>
                    <li><Link className="waves-effect" to="hosprofile"><i className="material-icons">create</i>Edit Profile</Link></li>
                    <li><div className="divider "></div></li>
                    <li><Link to="#" className="header2">Account Controls</Link></li>            
                    <li><Link className="waves-effect" to="index"><i className="material-icons">arrow_back</i>Logout</Link></li>
                    <li><div className="divider "></div></li>
                </ul>
          </nav>
        )
    }
}

export default Header2;