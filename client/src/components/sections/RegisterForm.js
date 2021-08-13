import React from 'react';

const RegisterForm = (props) => {
  return (
    <form>
      <fieldset>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-name">Hospital Name</label>
          <input id="form-name" className="form-input" type="text" placeholder="Hospital Name" required />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-username">Head Name</label>
          <input id="form-username" className="form-input" type="text" placeholder="Head name" required />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-email">Email</label>
          <input id="form-email" className="form-input" type="email" placeholder="Email" required />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-color">Hospital Type</label>
          <select id="form-color" className="form-select">
            <option hidden>Select</option>
            <option>Private</option>
            <option>Goverment</option>
            <option>Semi-Goverment</option>
          </select>
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-username">State</label>
          <input id="form-username" className="form-input" type="text" placeholder="State" required />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-username">District</label>
          <input id="form-username" className="form-input" type="text" placeholder="District" required />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-username">Tehsil</label>
          <input id="form-username" className="form-input" type="text" placeholder="Tehsil" required />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-message">Address</label>
          <textarea id="form-message" className="form-input" placeholder="Address"></textarea>
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-message">Total Beds</label>
          <input type="number" id="form-message" className="form-input" placeholder="Total Beds" />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-message">Occupied Beds</label>
          <input type="number" id="form-message" className="form-input" placeholder="Occupied beds" />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-message">Contact Number</label>
          <input type="number" id="form-message" className="form-input" placeholder="Contact Number" />
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-message">Photo</label>
          <input type="file" id="form-message" className="form-input" placeholder="Click to upload" />
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

export default RegisterForm;