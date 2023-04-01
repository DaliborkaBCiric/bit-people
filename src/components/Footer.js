import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container-foot">
        <p className="foot">&copy; {new Date().getFullYear()} Copyright BIT</p>
      </div>
    </div>
  );
}

export default Footer;