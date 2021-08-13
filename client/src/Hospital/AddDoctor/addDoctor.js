import React, { Component } from 'react';
import './addDoctor.css';
import image from '../AddDoctor/shiny-happy-people.png'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import M from 'materialize-css';

class AddDoctor extends Component{
       
    state = {
        event_name:null,
        start_date:null,
        start_time:null,
        end_date:null,
        place:null,
        people_count:null,
        subject:null,
        applicant_ID:null
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
            applicant_ID:td._id,        
        })
    
    }
    

    uploadPic = (e) => {
        e.preventDefault();
        console.log(this.state.applicant_ID)
        fetch("http://localhost:8080/user/addEvent",{
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

    render(){
        return(
            <div >
                <div className="row" id="addDocrow">
                    <div className="col s12 m12 l4 offset-l2">
                        <img src={image} className="addDocimg" /> 
                    </div>
                    <div className="col s12 m12 l4">
                        <h4 className="center">Add Event here..</h4>
                        <p className="center">You will be adding Events here...</p>
                        <form className="col s12" >
                        <fieldset>                          
                             <div className="row">
                                <div className="input-field  col s12">
                                <input  id="event_name" onChange={this.changeHandle} type="text" className="validate white-text" />
                                <label for="event_name">Event Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="start_date" onChange={this.changeHandle} type="text" className="validate white-text" />
                                    <label for="start_date">Start Date(DD/MM/YYYY)</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="end_date" onChange={this.changeHandle} type="text" className="validate white-text" />
                                    <label for="end_date">End Date(DD/MM/YYYY)</label>
                                </div>
                            </div> 
                            <div className="row">
                                <div className="input-field col s12">
                                <input id="start_time" onChange={this.changeHandle} type="text" className="validate white-text" />
                                <label for="start_time">Start Time(Ex 5:00 PM)</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12">
                            <input id="place" onChange={this.changeHandle} type="text" className="validate white-text" />
                            <label for="place">Place</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="people_count" onChange={this.changeHandle} type="text" className="validate white-text" />
                            <label for="people_count">People Count</label>
                            </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                        <textarea id="subject"  onChange={this.changeHandle} className="form-input black-text" placeholder="Subject for your Event"></textarea>
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
export default AddDoctor;