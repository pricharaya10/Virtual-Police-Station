import React from 'react';
import Image from '../components/elements/Image'
import { Link } from 'react-router-dom';
const Both =( props )=>{
  
  
  return(
    <>
    <section className="section center-content">
      <div className="hero-content mt-32">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Virtual Police <span className="text-color-primary">Station</span>
            </h1>
      </div>
      <div className="container">
          <div className="section-inner mt-0">
              <div className="split-wrap">
                  <div className="row ">
                      <div className="col s4 content center-content-mobile">
                        <h3 className="mt-0 mb-16">Complainant</h3>
                        <Image
                         className="has-shadow"
                         src={require('../assets/images/shiny-happy-people.png')}
                         alt="Hero"
                         width={223}
                         height={256} />
                        <button className="button button-primary m-16"><Link to="/hospital/login">SignIn</Link></button>
                        <button className="button button-secondary m-16"><Link to="/hospital/register">Register</Link></button>
                      </div>
                      <div className=" col s4 content center-content-mobile">
                        <h3 className="mt-0 mb-16">Police Officer</h3>
                        <Image
                              className="has-shadow"
                              src={require('../assets/images/humaaans.png')}
                              alt="Hero"
                              width={200}
                              height={256} />
                            <button className="button button-primary m-16"><Link to="/lab/login">SignIn</Link></button>
                            <button className="button button-secondary m-16"><Link to="/lab/register">Register</Link></button>
                      </div>
                      <div className="col s4 content center-content-mobile">
                        <h3 className="mt-0 mb-16">Admin</h3>
                        <Image
                              className="has-shadow"
                              src={require('../assets/images/humaans1.png')}
                              alt="Hero"
                              width={273}
                              height={236} />
                            <button className="button button-primary m-16"><Link to="/lab/admin">SignIn</Link></button>
                            
                      </div>
                  </div>
              </div>
                     
            </div>
        </div>
    </section>
    </>
  )
}

export default Both;