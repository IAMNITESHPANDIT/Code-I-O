import React from "react";
import './Contact.style.css'
function ContactusComponent() {
  return (
    <div className="contactus m-5">
      <div class="card card-outline-secondary">
        <div class="card-header">
          <h3 class="mb-0">Contact</h3>
        </div>
        <div class="card-body">
          <form autocomplete="off" class="form" role="form">
            <fieldset>
              <label class="mb-0 h5 " for="name2">
                Name
              </label>
              <div class="row mb-1">
                <div class="col-lg-12">
                  <input
                    class="form-control"
                    id="name2"
                    name="name2"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <label class="mb-0 h5" for="email2">
                Email
              </label>
              <div class="row mb-1">
                <div class="col-lg-12">
                  <input
                    class="form-control"
                    id="email2"
                    name="email2"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <label class="mb-0 h5" for="message2">
                Message
              </label>
              <div class="row mb-1">
                <div class="col-lg-12">
                  <textarea
                    class="form-control"
                    id="message2"
                    name="message2"
                    required=""
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <button
                class="btn btn-secondary btn-lg float-right"
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