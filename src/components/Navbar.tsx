import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <div className="brand-logo center">
          <span className="logo">Weather + API</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
