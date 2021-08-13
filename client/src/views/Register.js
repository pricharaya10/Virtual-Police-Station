import React, { Component,useState } from 'react';
import Image from '../components/elements/Image';
import Axios from 'axios';
import M from 'materialize-css';


class Register extends Component {
  state = {
    first_name: null,
    last_name: null,
    address: null,
    Contact: null,
    email: null,
    password: null,
    age: null,
    aadhar_no:null,
    photo: null
  }
   
  changeHandle=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  uploadPic = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file",this.state.image)
    data.append("upload_preset","healthSystem")
    data.append("cloud_name","yashbansal")
    fetch("	https://api.cloudinary.com/v1_1/yashbansal/image/upload",{
      method:"POST",
      body:data
    }).then(res => res.json())
    .then(data=> {
      console.log(data.url)
      this.setState({photo : data.url})
       
    console.log(this.state);
    console.log("123")
    fetch("http://localhost:8080/user/signup",{
      method:"Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)
      }).then(res => res.json())
      
      .then(data => { 
        console.log(data)
        if(data.error){
          M.toast({html: data.error,classes:"#d32f2f red darken-2"})
        }
        else{
          console.log("1234")
          M.toast({html:"Registered Successfully  ",classes:"#43a047 green darken-1"})
     

          this.props.history.push("/hospital/login"); 
        }
      }
        ).catch(err => console.log(err))
        })
      }

  render() {
    return (
      <>
        <section className="section center-content">
          <div className="container">
            <div className="section-inner">
              <div className="split-wrap invert-mobile invert-desktop">
                <div className="split-item">
                  <div className="split-item-content center-content-mobile" style={{ overflowY: "scroll", height: "28rem", overflowX: "hidden" }}>
                    <h3 className="mt-0 mb-16">Register</h3>
                    <p className="m-0">For Complainant</p>
                    <form onSubmit={this.uploadPic}>
                      <fieldset>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="first_name">First Name</label>
                          <input id="first_name" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="First Name" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="last_name">Last Name</label>
                          <input id="last_name" onChange={this.changeHandle} className="form-input white-text" type="text" placeholder="Last name" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="email">Email</label>
                          <input id="email" onChange={this.changeHandle} className="form-input white-text" type="email" placeholder="Email" required />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input type="password" onChange={this.changeHandle} id="password" className="form-input white-text" placeholder="Password" />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="address">Address</label>
                          <textarea id="address" onChange={this.changeHandle} className="form-input black-text" placeholder="Address"></textarea>
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="age">Age</label>
                          <input type="number" onChange={this.changeHandle} id="age" className="form-input white-text" placeholder="Age" />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="Contact">Contact Number</label>
                          <input type="number" onChange={this.changeHandle} id="contact" className="form-input white-text" placeholder="Contact Number" />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="aadhar_no">Aadhar Card Number</label>
                          <input type="number" onChange={this.changeHandle} id="aadhar_no" className="form-input white-text" placeholder="Aadhar Card Number" />
                        </div>
                        <div className="mb-16">
                          <label className="form-label" htmlFor="form-message">Photo</label>
                          <input type="file" id="form-message" className="form-input white-text"
                           onChange={(e)=> {
                            console.log(e.target.files[0])
                             this.state.image = e.target.files[0]
                             console.log(this.state.image )
                            }
                             } placeholder="Click to upload" />
                        </div>
                        <div className="mt-24">
                          <div className="button-group">
                            <button className="button button-primary">Submit</button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div className="split-item-image">
                    <Image
                      className="has-shadow"
                      src={require('../assets/images/hos_blue.png')}
                      alt="Hostpital"
                      width={900}
                      height={700} />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Register;