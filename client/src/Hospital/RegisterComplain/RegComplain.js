import React, { Component } from 'react';
import './RegComplain.css';
import image from './EcYTq93px20ptlPRSq1C.png';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import Header2 from './layouts/header4';
//import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class RegComplain extends Component {
   
    state = {
        complain_against:null,
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
        fetch("http://localhost:8080/user/addComplain",{
            method:"Post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
            }).then(res => res.json())
            .then(data => { 
              if(data.error){
                M.toast({html: data.error,classes:"#d32f2f red darken-2"})
              }
              else{
                console.log("1234")
            //    this.props.history.push("/hosdash"); 
          M.toast({html:"Registered Successfully  ",classes:"#43a047 green darken-1"})
         window.location.href = "/hosdash"; 
              }
            }
              ).catch(err => console.log(err))
              
          

    }

    

    render() {
        return (
            <div>
                <Header2 />

                <div className="row" id="addUp">
                    <div className="col s12 m12 l4 offset-l2">
                        <img src={image} className="addUp_img white-text" />
                    </div>
                    <div className="col s12 m12 l4">
                        <h4 className="center">Register a complain here..</h4>
                        <form className="col s12"  onSubmit={this.uploadPic}>
                        <fieldset>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                    <input id="complain_against" type="text" className="validate white-text " onChange={this.changeHandle} />
                                    <label htmlFor="complain_against">Complain Against</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 prescp">
                                <textarea id="subject" rows="14" onChange={this.changeHandle} className="form-input black-text" placeholder="What is your complain"></textarea>
                                </div>
                            </div>
                            
                            <div className="center ">  <button className="btn addDocbtn" onClick={this.uploadPic}>Submit</button> </div>
                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegComplain;
