import React,{ Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import { Link } from 'react-router-dom';
import image1 from '../img/clinic-2921858_1920.jpg';
import './nav.css';



class Header extends Component {

    state = {
        first_name: null,
        last_name: null,
        address: null,
        Contact: null,
        email: null,
        password: null,
        age: null,
        aadhar_no:null,
        photo: null
      }

    componentDidMount(){
        M.AutoInit();
        const data=localStorage.getItem('user');
        const td=JSON.parse(data);
        console.log(td);
        this.setState({
            first_name: td.first_name,
            last_name: td.last_name,
            address: td.address,
            Contact: td.Contact,
            email: td.email,
            password: td.password,
            age: td.age,
            aadhar_no:td.aadhar_no,
            photo: td.photo
          
        })
    }

    logout = ()=>{
        fetch("http://localhost:8080/user/logout",{
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
          window.location.href = '/hospital/login';
        }
      }
        ).catch(err => console.log(err))
        }
    
    

    render(){
        return (<nav key="fwefwe" className="log_nav " >
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
                            <img src={image1} className="responsive-img center" alt="dw" />
                        </div>
                        <Link to="#!user"><img className="circle " src={this.state.photo} /></Link>
                        <Link to="#!name"><span className="white-text name">{this.state.first_name}</span></Link>
                        <Link to="#!email"><span className="white-text email">{this.state.email}</span></Link>
                    </div>               
                </li>
                <li><Link to="regcomplain" className="waves-effect" ><i className="fas fa-clipboard-list"></i>Register Complain</Link></li>
                <li><div className="divider "></div></li>
                <li><Link to="viewfir" className="waves-effect" ><i className="fas fa-clipboard-list"></i>View FIR</Link></li>
                <li><div className="divider "></div></li>
                <li><Link className="waves-effect" to="hosprofile"><i className="material-icons">create</i>Edit Profile</Link></li>
                <li><div className="divider "></div></li>
                            
                <li><Link className="waves-effect"  onClick={this.logout}><i className="material-icons">arrow_back</i>Logout</Link></li>
                <li><div className="divider "></div></li>
            </ul>
      </nav>) 
    }
}

export default Header;