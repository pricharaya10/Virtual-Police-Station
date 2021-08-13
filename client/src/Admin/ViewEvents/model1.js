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
    <Modal show={props.view} centered  style={{'max-height': '500px', 'overflow-y': 'scroll'}}>
               <Modal.Header >
                  <h4 className="black-text"> Event Details   </h4>
               </Modal.Header>
               <Modal.Body >
           <p> Event number  :{props.eve.event_app_num} </p> 
           <p> Event name  :{props.eve.event_name} </p> 
           <p> Subject  :{props.eve.subject} </p> 
           <p> Start date :{props.eve.start_date} </p> 
           <p> Start time  :{props.eve.start_time} </p> 
           <p> End date  :{props.eve.end_date} </p> 
           <p> Place  :{props.eve.place} </p> 
           <p> No of Peoples  :{props.eve.people_count} </p> 
            
           </Modal.Body>
         <Modal.Header >
         <h4 className="black-text"> Applicant Details   </h4>
      </Modal.Header>
     
               <Modal.Body >
                 
                 <p> Complainant Name :{props.comp.user.first_name} </p> 
                 <p> Phone No :{props.comp.user.contact} </p> 
                 <p> Email :{props.comp.user.email} </p> 
                 <p> Address  :{props.comp.user.address} </p> 
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