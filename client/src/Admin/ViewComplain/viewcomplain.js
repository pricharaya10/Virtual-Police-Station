import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import './viewcomplain.css';
import image1 from './img/croods.png';
import Header5 from './layouts/header6';
import Model1 from './mode1'

class Viewcomplain extends Component {
  
    state = {
        complains : [],
        view : false,
        index : null,
        curr_complain:{},
        user : {}
    }

    componentDidMount(){
        M.AutoInit();
        fetch("http://localhost:8080/complain/getall",{
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
                    complains : data       
                })
                console.log(this.state.complains)
                
       }
            }
              ).catch(err => console.log(err))
              
    }
    
        
Model1Ref = ({handleShow}) => {
    this.showModal = handleShow;
  }
  
  onLoginClick = (event,index) => {
    const curr_complain = this.state.complains[index]
   
   this.setState({
       view:true,
       index ,
       curr_complain
       //  comp1: curr_fir
   })
   console.log(index)
 //  console.log(curr_fir)
   
 const id = this.state.complains[index].complainant_ID
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
                    
                    </div>
                
                <div className="row">
                <table className="centered responisve-table">
                    <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Complain No</th>
                        <th>Complain Against</th>
                        <th>View Complain</th>
                    </tr>
                    </thead>

                    <tbody>
                   
                    {
                        this.state.complains.map((complain,index) => {
                            return (
                            <tr>
                        <td>{index+1}</td>
                        <td>{complain.complain_num}</td>
                        <td>{complain.complain_against}</td>
                        <td><a className="btn small"     onClick={(event) => {
                            this.onLoginClick(event,index)
                        }}>View Complain</a></td>
                        <Model1  ref={this.Model1Ref} view = {this.state.view}  index={this.state.index} comp = {this.state.user} complain={this.state.curr_complain} >     </Model1>
                   
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