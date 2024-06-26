import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className="bg-slate-200 p-6 shadow-lg">
      <div className="flex justify-between  items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-6 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/signin">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
