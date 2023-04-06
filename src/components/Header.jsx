import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center font-semibold shadow-xl mb-4 text-amber-500 p-4 space-x-6">
      <Link to="/">Home</Link>
      <Link to="/review">Order Review</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
