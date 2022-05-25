import React from "react";
import './Contact.style.css'
function ContactusComponent() {
  return (
    <div className="contactus m-5">
      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0">Contact</h3>
        </div>
        <div className="card-body">
          <form autoComplete="off" className="form" role="form">
            <fieldset>
              <label className="mb-0 h5 " htmlFor="name2">
                Name
              </label>
              <div className="row mb-1">
                <div className="col-lg-12">
                  <input
                    className="form-control"
                    id="name2"
                    name="name2"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <label className="mb-0 h5" htmlFor="email2">
                Email
              </label>
              <div className="row mb-1">
                <div className="col-lg-12">
                  <input
                    className="form-control"
                    id="email2"
                    name="email2"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <label className="mb-0 h5" htmlFor="message2">
                Message
              </label>
              <div className="row mb-1">
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    id="message2"
                    name="message2"
                    required=""
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <button
                className="btn btn-secondary btn-lg float-right"
                type="submit"
              >
                Send Message
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactusComponent;
