import React from "react";
import './PassWord.style.css';

function PasswordReset() {
  
  return (
    <div className="body">
    <div className="bodyForm">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Reset password</h3>

          <div className="card-text">
            <form >
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1 ">
                  Enter your email address and we will send you a link to reset
                  your password.
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send password reset email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PasswordReset;
