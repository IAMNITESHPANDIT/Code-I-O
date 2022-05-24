import React from "react";

function FooterComponent() {
  return (
    <div>
      <footer class="container-fluid  font-small text-color-dark pt-4 fixed-bottom">
        <div class="footer-copyright bg-black text-white text-center p-3 ">
          © 2022 Copyright:
          <a className="text-decoration-none text-white" href="/"> @Nitesh Pandey</a>
        </div>
      </footer>
    </div>
  );
}

export default FooterComponent;
