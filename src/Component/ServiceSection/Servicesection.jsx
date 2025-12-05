import "./Servicesection.css";

import spacedesign from '../../Images/spaceplanning.webp'
import spaceinterior from '../../Images/spaceinterior.webp'
import archi from "../../Images/archii.webp";
import spacedecor from '../../Images/spacedecortation.webp'

function Servicesection() {
  return (
    <>
      <div className="fullservicesectiondivvv" id="Services">
        <div className="headingdivsection">
          <h1 className="serviceheadingtag">Our services</h1>
        <h2 className="serviceparagraphsectiontag">Our services transform ideas into functional, beautiful spaces built for life.</h2>

        </div>
        
        <div className="firstsectionservicesection">
            <SerivcecardComp img={archi} name={"Architectural design"} disc={"Expert architecture services focused on creativity, precision,sustainability and client satisfaction."} />
            <SerivcecardComp img={spaceinterior} name={"Interior Design"} disc={"We craft elegant interior spaces that combine comfort, style, and functionality"} />
           
        </div>
        <div className="secondsectionservicesection">
            <SerivcecardComp img={spacedesign} name={"Space Planning"} disc={"Strategically organizing spaces to maximize functionality, flow, comfort, and efficiency"} />
            <SerivcecardComp img={spacedecor} name={"Space Decoration"} disc={"Enhancing spaces with thoughtful décor that brings style, personality, and harmony."} />

        </div>
      </div>
    </>
  );
}

export default Servicesection;



export function SerivcecardComp({img,name,disc}) {
  return (
    <>
      <div className="fullservicecompdivvv">
        <img
          src={img}
          className="imagesectionforServicecardcomp"
          alt="archiimage"
        />
        <h1 className="nameoftheservicesectionheading">{name}</h1>
        <h2 className="servicesideheadingtag">
          {disc}
        </h2>
        <button className="detailsbtnsection">View Details</button>
      </div>
    </>
  );
}
