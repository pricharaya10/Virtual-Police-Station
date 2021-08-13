import React, { Component } from 'react';
import image from './img/happy-bunch.png';
import image2 from './img/happy-bunch (2).png';
import Header from './header/Header';
import './lab.css';
import AddUserCard from './addUserCard';
import M from 'materialize-css';

class Lab extends Component {
    
    
    state = {
        firs : [],
        police_ID : JSON.parse(localStorage.getItem('police'))._id,
    }

    componentDidMount(){
        M.AutoInit();
        console.log(this.state.police_ID)

        fetch("http://localhost:8080/police/myfirs",{
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

    render() { 
        return (
            <div>
                <div className="row">
                    <Header />
                    <div className="row ">                        
                            <h3 className="center" id="labhead"> update FIR here!</h3>
                            <h4 className="center" id="labhead">You can add progress here!! &nbsp;<i class="far fa-hand-point-down"></i></h4>
                        
                        <div className="col s12 m12 l4  offset-l1">                            
                            <img src={image} className="responsive-img img1" />
                        </div>
                      
                        
                         <div className="col s12 m12 l4  offset-l1" id="lab_img2">
                            <img src={image2} className="responsive-img lab_im2" /> 
                         </div> 
                    
                    </div>
                    
                    
                </div>
                
 
                <div className="row">
                     {   this.state.firs.map((fir,index) => {
                            return (        
                                <div>
                                
                                <div key={index} className="col m3"> <AddUserCard fir={fir} /> </div>    
                               </div>
                         ) })
                    }
                    </div>
                    
            </div>
        );
    }
}
 
export default Lab;