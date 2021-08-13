import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';

class Model extends Component {

  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        show: false,
        fir_num : this.props.fir.fir_num,
        detail : null,
        fird:this.props.fir
    }
    console.log("yash",this.props)
}
handleShow() {
    this.setState({ show: true })
}
handleClose(){
    this.setState({ show: false })
}
   
changeHandle=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

SubmitHandle=(e)=>{
  console.log(this.state)
    e.preventDefault();
      fetch("http://localhost:8080/fir/addProgress",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)
      }).then(res => res.json())
      .then(data => { 
        if(data.error){
          alert("error")
        }
        else{
            console.log(this.state)
            console.log("added")
            // this.props.history.push('/hosdash');
        }
      }
        )
  }
  

render() {

    return (
       <div className = "text-center">
          <Modal show={this.state.show} onHide={this.handleClose}>
             <Modal.Header >
             <h4 className="black-text text-center center">Update FIR here</h4>
             <p className="black-text center" >Add  Progress details for fir no  {this.state.fird.fir_num}  </p>
             
             </Modal.Header>
             <Modal.Body style={{'max-height': '450px', 'overflow-y': 'scroll'}} className="black-text ">
          
             <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="detail" onChange={this.changeHandle} className="materialize-textarea"></textarea>
                            <label for="detail">Update Information about FIR here</label>
                        </div>
                    </div>
                    
                
                </form>
             </div>
     
     
             </Modal.Body>
            <div className="row ">
              <div className="col s5">

              </div>
            <div className=" col s4 button-group center">
                 <button className="button button-primary " onClick={this.SubmitHandle}>Submit</button>
            </div> 
            </div>
             
          </Modal>
        </div>
    )
  }
}
  
  export default Model;