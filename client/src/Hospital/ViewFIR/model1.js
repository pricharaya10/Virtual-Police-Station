import React,{Component , useState ,useEffect} from 'react';
import {Modal, Button} from 'react-bootstrap';

import M from 'materialize-css/dist/js/materialize.min.js'; 
  

 const LoadData = (props)=>{
 console.log(props);
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
<div >
   {props.fir &&
    (
      
      
      <Modal show={props.view} centered style={{'max-height': '500px', 'overflow-y': 'scroll'}}>
        <Modal.Header >
          <h4 className="black-text"> Fir Details   </h4>
        </Modal.Header>
        <Modal.Body >
          <p> Fir number  :{props.fir.fir_num} </p> 
          <p> Subject  :{props.fir.subject} </p> 
          <p> Progress Details :  </p> 
            {props.fir.progress_details  &&   props.fir.progress_details.map((detail) => {
              return ( 
              <p>  {detail}   </p>
              )
            })}
          
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
    )}
      </div>
 )
        
}

  
  export default LoadData;