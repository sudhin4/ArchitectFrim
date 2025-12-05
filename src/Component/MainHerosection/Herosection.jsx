import mainimage from "../../Images/mainheading1.png";
import "./Herosection.css";
import person1 from "../../Images/person1.jpg";
import person2 from "../../Images/person2.jpg";
import person3 from "../../Images/person3.png";
import person4 from "../../Images/person4.jpg";
import SplitText from "./TextcontentComp";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <>
      <div className="herosectionmaindiv">
        <div className="leftsideherosection">
          <SplitText
            text="Designing bold architecture that transforms spaces and lifestyles."
            className="mainherosectionheading"
            delay={150}
            duration={1}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
          />
          <h2 className="sideherosectionheading">
            We create innovative architectural designs that blend beauty,
            function, and sustainability to elevate every client’s space.
          </h2>

          <div className="buttonsmainherosection">
        <Link to="/Contact"><button className="herosectionbtn1">Get in touch</button></Link> 
          <a href="#Services"><button className="herosectionbtn2">View services</button></a>  
          </div>
        </div>
        <div className="Rightsideherosection">
          <img
            src={mainimage}
            alt="Architect Hero Image"
            className="herosectionImage"
          />
          <div className="customercomposetion">
            <Customerstar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;

export function Customerstar() {
  return (
    <>
      <div className="customerstarimagesection">
        <div className="imagesectioncustomersection">
          <img
            src={person1}
            className="customerimagetag image1class"
            alt="customerimage1"
          />
          <img
            src={person2}
            className="customerimagetag image2class"
            alt="customerimage2"
          />
          <img
            src={person3}
            className="customerimagetag image3class"
            alt="customerimage3"
          />
          <img
            src={person4}
            className="customerimagetag image4class"
            alt="customerimage4"
          />
        </div>
        <div className="headingcustomerstarsection">
          <h1 className="headingtagforcustomersection">
            Rated 5 Stars 700+ Happy clients
          </h1>
        </div>
      </div>
    </>
  );
}
