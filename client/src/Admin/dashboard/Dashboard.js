import React, { Component } from 'react';
import Header from './layouts/header1';
import './dashboard.css';
import M from 'materialize-css';
import Card1 from './card1'
import Card2 from './card2';
import Card5 from './card5';
import Card6 from './card6';
import Axios from 'axios';

class Adashboard extends Component{
    state={
        total_fir:null,
        total_event : null
    }

    componentDidMount(){
      M.AutoInit();
        const data=localStorage.getItem('user');
        const td=JSON.parse(data);
   
        fetch("http://localhost:8080/fir/countall",{
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
                    total_fir : data
                })   
            }
            })
        
            fetch("http://localhost:8080/event/countall",{
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
                    total_event : data
                })   
           //     console.log(this.state.fir_count)
            }
            })        
    }

    render(){
        return(
            <>
                <Header />
                <div className="dash_land_img">
                    <h2 className="white-text " id="dash_head">Admin Portal...</h2>
                    
                </div>
                <div className="row">
                    <div className="col s12 m6 l6">
                        <Card1 count = {this.state.total_fir} />
                    </div>
                    <div className="col s12 m6 l6">
                        <Card2 count = {this.state.total_event} />
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

export default Adashboard;