import React, { Component } from 'react';
import './adduserprofile.css';
import image from './EcYTq93px20ptlPRSq1C.png';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class AddUserProfile extends Component {
    
    state = {
        subject:null,
        complainant_ID:null
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    componentDidMount(){
        const data=localStorage.getItem('user');
        const td=JSON.parse(data);
        console.log(td);
        this.setState({
            complainant_ID:td._id,
            
        })
    
    }
    

    uploadPic = (e) => {
        e.preventDefault();
        console.log(this.state.complainant_ID)
        fetch("http://localhost:8080/user/addFir",{
            method:"Post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
            }).then(res => res.json())
            .then(data => { 
              if(data.error){
                alert(`err : ${data.error}`);
              }
              else{
                console.log("1234")
            //    this.props.history.push("/hosdash"); 
         window.location.href = "/viewfir"; 
              }
            }
              ).catch(err => console.log(err))
              
          

    }

    render() {
        return (
            <div>
                <div className="row" id="addUp">
                    <div className="col s12 m12 l4 offset-l2">
                        <img src={image} className="addUp_img white-text" />
                    </div>
                    <div className="col s12 m12 l4">
                        <h4 className="center">Add new FIR here..</h4>
                        <p className="center">You will be adding a new here...</p>
                        <form className="col s12" >
                        
                        <div className="mb-16">
                        <textarea id="subject" rows="18" onChange={this.changeHandle} className="form-input black-text" placeholder="Subject of your Fir"></textarea>
                      </div>
                      
                            <div className="center ">  <button className="btn addDocbtn" onClick={this.uploadPic} >Submit</button> </div>
                            

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUserProfile;
