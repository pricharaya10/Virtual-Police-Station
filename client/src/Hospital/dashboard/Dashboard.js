import React, { Component } from 'react';
import Header from './layouts/header1';
import './dashboard.css';
import Card1 from './card1'
import Card2 from './card2';
import M from 'materialize-css';
import Card5 from './card5';
import Card6 from './card6';
import Axios from 'axios';

class Hdashboard extends Component{
    state={
        id:null,
        first_name: null,
        last_name: null,
        address: null,
        Contact: null,
        email: null,
        password: null,
        age: null,
        aadhar_no:null,
        photo: null,
        fir_count : null,
        event_count : null
      }

   async componentDidMount() {
        M.AutoInit();
        const data=localStorage.getItem('user');
        const td=JSON.parse(data);
        console.log(td);
       await this.setState({
            id:td._id,
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
        
        console.log(this.state)
        fetch("http://localhost:8080/fir/countone",{
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
        this.setState({
            fir_count : data
        })   
    }
    })

    fetch("http://localhost:8080/event/countone",{
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
        this.setState({
            event_count : data
        })   
        console.log(this.state.fir_count)
    }
    })


}
    
    
    

    render(){
        return(
            <>
                <Header />
                <div className="dash_land_img">
                    <h2 className="white-text " id="dash_head">Dashboard...</h2>
                </div>
                <div className="row">
                    <div className="col s12 m6 l6">
                        <Card1 count={this.state.fir_count} />
                    </div>
                    <div className="col s12 m6 l6">
                        <Card2 count={this.state.event_count}/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col s12 m12 l6 ">
                        <Card5 />
                    </div>
                    <div className="col s12 m12 l6 ">
                        <Card6 />
                    </div>
                </div>
            </>
        )
    }
}

export default Hdashboard;