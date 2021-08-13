import React, { Component } from 'react';
import image from './woman-3169726_1920.jpg';
import {Link} from 'react-router-dom';
import Model1 from './model1'
import Model2 from './model2'
import M from 'materialize-css/dist/js/materialize.min.js'; 
class AddUserCard extends Component {
    
    state = {
        fir_num : this.props.fir.fir_num,
        detail : null,
        view:false,
         user : {},
    //  index : null,
     // curr_fir : {}
        }

    componentDidMount(){
        
        M.AutoInit();
        // console.log(this.props.fir.complainant_ID)

        // fetch("http://localhost:8080/user/getUser",{
        //     method:"Post",
        //     headers:{
        //       "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(this.state)
        //     }).then(res => res.json())
        //     .then(data => { 
        //         console.log(data)
        //       if(data.error){
        //         alert(`err : ${data.error}`);
        //       }
        //       else{
        //         console.log("1234")
        //         this.setState({
        //             user : data       
        //         })
        //         console.log(this.state.user)
                
      //  }
      //       }
      //         ).catch(err => console.log(err))
              
    }


    changeHandle=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
        
    
Model1Ref = ({handleShow}) => {
  this.showModal = handleShow;
}

onLoginClick = (event) => {
 // const curr_fir = this.state.firs[index]
 
 this.setState({
     view:true,
     //index ,
   //   curr_fir
     //  comp1: curr_fir
 })
// console.log(index)
//  console.log(curr_fir)
 
const id = this.props.fir.complainant_ID
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


  


Model2Ref = ({handleShow}) => {
  this.showModel = handleShow;
}

onclick = () => {
  this.showModel();
 }
 

   
    render() { 
        return (
            <div className="card center" >
                  
                <div className="card-content">
                    <h4 className="black-text">Fir Number</h4>
                    <h5 className="grey-text">{this.props.fir.fir_num}</h5>
                    
                    <button className="waves-effect waves-light btn "  onClick={(event) => {
                      this.onLoginClick(event)
                  }} >View Details</button>

                    <br />
                    <br />

                    <a className="waves-effect waves-light btn " onClick={(event) => {
                      this.onclick(event)}}  >Update</a>
                    
                    
                </div> 
                <Model1  ref={this.Model1Ref} view = {this.state.view}   comp = {this.state.user} fir={this.props.fir} >     </Model1>
                <Model2 ref={this.Model2Ref} fir={this.props.fir} handleShow={this.state.view} ></Model2>
               
            </div>
        );
    }
}
 
export default AddUserCard;