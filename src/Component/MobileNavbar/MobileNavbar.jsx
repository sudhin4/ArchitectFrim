import { useState } from "react";
import "./MobileNavbar.css";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const [isopen, setopen] = useState(false);

  return (
    <>
      <div
        className={
          isopen ? "LogoNameforMobileNavbar" : "LogoNameforMobileNavbar_active"
        }
      >
        <div className="contentforheadinggg">
          <RxHamburgerMenu
            className="menubariconsformobilenavbar"
            onClick={() => setopen(true)}
          />
          <h1 className="LogoNameforMobilenavbarheading">ArchDesign</h1>
        </div>
      </div>
      <div
        className={
          isopen
            ? " fullsidebarmon MobileNavbarfulldivsection_active"
            : " fullsidebarmon MobileNavbarfulldivsection"
        }
      >
        <div className="ContentforroutemobileNavbar">
          <IoClose
            className="closeiconinmobilenavbar"
            onClick={() => setopen(false)}
          />
          <div className="contentforatagformobilenav">
            <a href="/" onClick={() => setopen(false)}>
              <h1 className="MobileNavbarHeading">HOME</h1>
            </a>
            <a href="#About" onClick={() => setopen(false)}>
              <h1 className="MobileNavbarHeading">ABOUT</h1>
            </a>
            <a href="#Projects" onClick={() => setopen(false)}>
              <h1 className="MobileNavbarHeading">PROJECTS</h1>
            </a>
            <a href="#Services" onClick={() => setopen(false)}>
              <h1 className="MobileNavbarHeading">SERVICES</h1>
            </a>
            <a href="#FAQ" onClick={() => setopen(false)}>
              <h1 className="MobileNavbarHeading">FAQ</h1>
            </a>
            <a href="#Testimonial" onClick={() => setopen(false)}>
              <h1 className="MobileNavbarHeading">TESTIMONIAL</h1>
            </a>
            <Link to="/Contact" onClick={() => setopen(false)}>
              <button className="Enquirybuttoninmobilenavbar">Enquiry</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
