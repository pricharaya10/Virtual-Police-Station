import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './viewfir.css';
import image1 from './img/croods.png';
import Header5 from './layouts/header5';
import Model1 from './model1'

class Viewfir extends Component {
    state = {
        firs : [],
        view : false,
        index : null,
        curr_fir:{},
        user : {}
    }

    componentDidMount(){
        
        fetch("http://localhost:8080/fir/getall",{
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
                    firs : data       
                })
                console.log(this.state.firs)
                
       }
            }
              ).catch(err => console.log(err))
              
    }
    
    
Model1Ref = ({handleShow}) => {
    this.showModal = handleShow;
  }
  
  onLoginClick = (event,index) => {
    const curr_fir = this.state.firs[index]
   
   this.setState({
       view:true,
       index ,
        curr_fir
       //  comp1: curr_fir
   })
   console.log(index)
 //  console.log(curr_fir)
   
 const id = this.state.firs[index].complainant_ID
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

  
    
    
    render(){
         
    return(
        <div>
            <Header5 />
            
                <div className="row center" id="frow">
                    <div className="input-field col s6 offset-s3 black white-text" id="frow_input">
                    
                    </div>
                </div>
                <div className="row">
                <table className="centered responisve-table">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>FIR no.</th>
                    
                        <th>View FIR</th>
                    </tr>
                    </thead>

                    <tbody>
                  
                    {
                        this.state.firs.map((fir,index) => {
                            return (
                            <tr>
                        <td>{index+1}</td>
                        <td>{fir.fir_num}</td>
                        <td><a className="btn small"     onClick={(event) => {
                            this.onLoginClick(event,index)
                        }} >View FIR</a></td>
                        
               
                        <Model1  ref={this.Model1Ref} view = {this.state.view}  index={this.state.index} comp = {this.state.user} fir={this.state.curr_fir} >     </Model1>
                    </tr>
                         ) })
                    }  </tbody>
                </table>
                </div>
                
           
                
            

        </div>
         
        
      );
  }
  
}

export default Viewfir; 