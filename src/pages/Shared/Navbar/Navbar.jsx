import React from "react";
import Container from "../../../components/Container/Container";
import "./Navbar.css";

const Navbar = () => {
  const navOptions = (
    <div className="nav-bar lg:flex ">
      <li>
        <a className="uppercase lg:text-[15px] sm:text-[10px] font-bold primaryFont" >
          Home
        </a>
      </li>
      <li>
        <a className="uppercase lg:text-[15px] sm:text-[10px] font-bold primaryFont">
          Contact
        </a>
      </li>
      <li>
        <a className="uppercase lg:text-[15px] sm:text-[10px] font-bold primaryFont">
          our menu
        </a>
      </li>
      <li>
        <a className="uppercase lg:text-[15px] sm:text-[10px] font-bold primaryFont">
         Our shop
        </a>
      </li>
      <li>
        <a className="uppercase lg:text-[15px] sm:text-[10px] font-bold primaryFont">
          dashboard
        </a>
      </li>
    </div>
  );
  return (
    <div id="navbar-part" className="fixed z-30 w-full">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-20 bg-orange-400 rounded-box  mt-3"
              >
                {navOptions}
              </ul>
            </div>
            <a className="lg:text-xl sm:text-[10px] lg:uppercase text-white secondaryFont font-normal  ">
              Mayaan Kitchen
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
