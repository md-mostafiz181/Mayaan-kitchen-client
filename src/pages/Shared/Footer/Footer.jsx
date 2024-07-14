import React from "react";
import Container from "../../../components/Container/Container";
import logo from "../../../assets/kitchen_logo.png"
import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div  id="footer-part" className="bg-[#111827] text-white mx-auto">
      <Container>
      <footer className="footer  ">
        <aside>
          
          <img className="w-[80%] h-[80%]" src={logo} alt="logo" />
          <p className="primaryFont text-xl ">
            Mayaan kitchen Ltd.
            <br />
            <span className="secondaryFont">Providing reliable tech since 1992</span>
          </p>
        </aside>
        <nav >
          <h6 >Services</h6>
          <a className="link link-hover">Cooking</a>
          <a className="link link-hover">Taking order</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>

          <div className="footer-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
        </nav>
      </footer>
      </Container>
    </div>
  );
};

export default Footer;
