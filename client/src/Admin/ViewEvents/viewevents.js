import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './viewevents.css';
import image1 from './img/croods.png';
import Header7 from './layouts/header7';
import Model1 from './model1'

class Viewcomplain extends Component {
  
    state = {
        events : [],
        view : false,
        index : null,
        curr_event:{},
        user : {}
    }

    componentDidMount(){
          M.AutoInit();
        fetch("http://localhost:8080/event/getall",{
            method:"Post",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(this.state)
            }).then(res => res.json())
            .then(data => { 
                console.log(data)
              if(data.error){
                alert(`err : ${data.error}`);
              }
              else{
                console.log("1234")
                this.setState({
                  events : data       
                })
                console.log(this.state.events)
                
       }
            }
              ).catch(err => console.log(err))
              
    }
    
        
Model1Ref = ({handleShow}) => {
    this.showModal = handleShow;
  }
  
  onLoginClick = (event,index) => {
    const curr_event = this.state.events[index]
   
   this.setState({
       view:true,
       index ,
       curr_event
       //  comp1: curr_fir
   })
   console.log(index)
 //  console.log(curr_fir)
   
 const id = this.state.events[index].applicant_ID
    console.log(id)
    fetch("http://localhost:8080/user/getOne",{
        method:"Post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({id})
        }).then(res => res.json())
        .then(data => { 
            console.log(data)
          if(data.error){
            alert(`err : ${data.error}`);
          }
          else{
            console.log("1234")
         //   setVal(data)
           this.setState({
               user : data
           })
         console.log(this.state)
        
           // console.log(curr_user)                
            
          }})
  }

eventApprove = (event,eve) =>{

  
 var id = eve.applicant_ID
 var user = {}
 fetch("http://localhost:8080/user/getOne",{
  method:"Post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({id})
  }).then(res => res.json())
  .then(data => { 
      console.log(data)
    if(data.error){
      alert(`err : ${data.error}`);
    }
    else{
      console.log("1234")
   //   setVal(data)
    user = data

  console.log(user,1)                
      
     id = eve._id
 console.log(id,2)
 const curr = user
 console.log(curr,3)
 fetch("http://localhost:8080/event/approve",{
     method:"Post",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({id,curr})
     }).then(res => res.json())
     .then(data => { 
         console.log(data)
       if(data.error){
         alert(`err : ${data.error}`);
       }  
       else{
         console.log("1234")
      //   setVal(data)
       window.location.reload()
      console.log(this.state)
     
        // console.log(curr_user)                
         
       }})
      }})

}
    
    
    render(){
    return(
        <div>
            <Header7 />
            
                <div className="row center" id="frow">
                    
                    </div>
                
                <div className="row">
                <table className="centered responisve-table">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Event No</th>
                        <th>Event Name</th>
                        <th>Event Approve</th>
                        <th>View Complain</th>
                    </tr>
                    </thead>

                    <tbody>
                   
                    {
                        this.state.events.map((eve,index) => {
                            return (
                            <tr>
                        <td>{index+1}</td>
                        <td>{eve.event_app_num}</td>
                        <td>{eve.event_name}</td>

                        <td> { eve.permission ? "Yes" : <a className="btn small"     onClick={(event) => {
                          this.eventApprove(event,eve)
                      }}>Click to approve</a>  } </td>




                        <td><a className="btn small"     onClick={(event) => {
                            this.onLoginClick(event,index)
                        }}>View Details</a></td>
                        <Model1  ref={this.Model1Ref} view = {this.state.view}  index={this.state.index} comp = {this.state.user} eve={this.state.curr_event} >     </Model1>
                   
                    </tr>
                         ) })
                    } 
                   
                    </tbody>
                </table>
                </div>
                
           
                
            

        </div>
         
        
      );
  }
  
}

export default Viewcomplain;  