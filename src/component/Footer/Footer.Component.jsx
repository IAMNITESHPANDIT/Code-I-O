import React from "react";
import "./footer.style.css";
function FooterComponent() {
  return (
    <div>
      <div className="footer-copyright bg-black text-white text-center p-3 fixed-bottom row">
        <div className="col-4">
          <a
            className="text-decoration-none text-white"
            href="https://github.com/iamniteshpandit"
          >
            <i class="fa-brands fa-github ms-2"></i>
          </a>

          <a
            className="text-decoration-none text-white"
            href="https://in.linkedin.com/in/iamniteshpandit?original_referer=https%3A%2F%2Fwww.google.com%2F"
          >
            <i class="fa-brands fa-linkedin ms-2"></i>
          </a>

          <a
            className="text-decoration-none text-white"
            href="https://facebook.com/iamniteshpandit"
          >
            <i class="fa-brands fa-facebook ms-2"></i>
          </a>

          <a
            className="text-decoration-none text-white"
            href="https://instagram.com/iamniteshpandit"
          >
            <i class="fa-brands fa-instagram ms-2"></i>
          </a>

          <a
            className="text-decoration-none text-white"
            href="https://twitter.com/iamniteshpandit"
          >
            <i class="fa-brands fa-twitter ms-2"></i>
          </a>
        </div>
        <div className="col-8">
          © 2022 Copyright:
          <a className="text-decoration-none text-white" href="/">
            {" "}
            @Nitesh Pandey
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
