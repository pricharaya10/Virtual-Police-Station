import React,{Component , useState ,useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';

import M from 'materialize-css/dist/js/materialize.min.js'; 
  

 const LoadData = (props)=>{
 console.log(props)
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
<div >
   {props.comp.user &&
    (
      
                  <div style={{ overflowY: "scroll"}} >
      <Modal show={props.view} centered style={{'max-height': '600px', 'overflow-y': 'scroll'}} >
                 <Modal.Header >
                    <h4 className="black-text"> Complain Details   </h4>
                 </Modal.Header>
                 <Modal.Body >
             <p> Complain number  :{props.complain.complain_num} </p> 
             <p> Complain Against  :{props.complain.complain_against} </p> 
             <p> Subject  :{props.complain.subject} </p> 
             
              
             </Modal.Body>
           <Modal.Header >
           <h4 className="black-text"> Complainant Details   </h4>
        </Modal.Header>
       
                 <Modal.Body >
                   
                   <p> Complainant Name :{props.comp.user.first_name} </p> 
                   <p> Phone No :{props.comp.user.contact} </p> 
                   <p> Email :{props.comp.user.email} </p> 
                   <p> Aadhar No  :{props.comp.user.aadhar_no} </p> 
    
                 </Modal.Body>
                 <div className="row">
                    <div className="col s5">

                    </div>
                    <div className="col s4">
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                 </Button>
                    </div>
                 </div>
              


        </Modal>
      </div> )

      }
      </div>
 )
        
}

  
  export default LoadData;