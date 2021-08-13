import React from 'react';

const LoginForm = (props) => {
  return (
    <form>
      <fieldset>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-email">Email</label>
          <div className="has-icon-left">
            <input className="form-input" id="form-email" type="text" placeholder="Username" />
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" fill="#909CB5" />
            </svg>
          </div>
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-pass">Password</label>
          <div className="has-icon-left">
            <input className="form-input" id="form-pass" type="password" placeholder="Password" />
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" fill="#909CB5" />
            </svg>
          </div>
        </div>
        <div className="mt-24">
          <div className="button-group">
            <button className="button button-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default LoginForm;