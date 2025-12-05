import "./Footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <div className="Fullfootersectiondiv">
        <div className="firstsectionfooter">
          <h1 className="websitenameinfootersection">ArchDesign</h1>
          <h2 className="getintouchwithusfootersection">
            Connect with our team today to start building your dream project.
          </h2>
          <button className="GetIntouchbtnfooter">Get in touch</button>
          <div className="contactinfootersection">
<h3 className="contactNumber"> <FaPhoneAlt className="emailiconsss" /> +91 6383965891</h3>
          <h3 className="contactNumber"> <MdOutlineEmail className="emailiconssss"/> emailtov1rtual@gmail.com</h3>
          

          </div>
          
        </div>
        <div className="linkesectionflll">
          <div className="Secondsectorfooter">
            <h1 className="Linksheadingtag">Links</h1>
           <a href="#About"><h2 className="linktagh2section">About</h2></a> 
           <a href="#Services"><h2 className="linktagh2section">Services</h2></a> 
          <a href="#Projects"><h2 className="linktagh2section">Projects</h2></a>  
          <a href="#Contact"><h2 className="linktagh2section">Contact</h2></a>  
          </div>
          <div className="Secondsectorfooter">
            <h1 className="Linksheadingtag">Social</h1>
            <h2 className="linktagh2section">Instagram</h2>
            <h2 className="linktagh2section">X</h2>
            <h2 className="linktagh2section">Facebook</h2>
            <h2 className="linktagh2section">Linkedin</h2>
          </div>
        </div>
        <h1 className="copyrights"> < FaRegCopyright className="copyrigthfooter"/>  Copyrights are all claimed</h1>
      </div>
    </>
  );
}

export default Footer;
