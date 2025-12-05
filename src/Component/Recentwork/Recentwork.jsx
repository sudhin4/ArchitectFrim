import { FaLocationDot } from "react-icons/fa6";
import "./Recentork.css";
import ser1 from "../../Images/service1.webp";
import ser2 from "../../Images/service2.webp";
import ser3 from "../../Images/service3.webp";
import ser4 from "../../Images/service4.webp";
import ser5 from "../../Images/serviceint5.webp";
import ser6 from "../../Images/serviceint7.webp";

function RecentWork() {
  return (
    <>
      <div className="Recentworkdivsextion" id="Projects">
        <div className="headingtaganddiv">
          <h1 className="Ourserviceheading">Our Projects</h1>
          <h2 className="SideheadingforourserviceTag">
            Crafting stylish, functional spaces that elevate comfort and reflect
            you.
          </h2>
        </div>
        <Recentworkcomp
          name={"Modern Building Architect Work"}
          dis={
            " We design modern buildings with innovative planning, structural precision, sustainable materials, and seamless functionality, delivering architectural spaces that enhance comfort, efficiency, aesthetics, and long-term value for residential, commercial, and industrial projects"
          }
          loc={"Berlin Germany"}
          img={ser1}
        />
        <Recentworkcomp
          name={"Modern Building Architect Work"}
          dis={
            " We design modern buildings with innovative planning, structural precision, sustainable materials, and seamless functionality, delivering architectural spaces that enhance comfort, efficiency, aesthetics, and long-term value for residential, commercial, and industrial projects"
          }
          loc={"NY, America"}
          img={ser2}
        />
        <Recentworkcomp
          name={"Modern Building Architect Work"}
          dis={
            " We design modern buildings with innovative planning, structural precision, sustainable materials, and seamless functionality, delivering architectural spaces that enhance comfort, efficiency, aesthetics, and long-term value for residential, commercial, and industrial projects"
          }
          loc={"London"}
          img={ser3}
        />
        <Recentworkcomp
          name={"Modern Building Architect Work"}
          dis={
            " We design modern buildings with innovative planning, structural precision, sustainable materials, and seamless functionality, delivering architectural spaces that enhance comfort, efficiency, aesthetics, and long-term value for residential, commercial, and industrial projects"
          }
          loc={"London"}
          img={ser4}
        />
        <Recentworkcomp
          name={"Modern Interior Design Work"}
          dis={
            " We create functional, beautiful interiors through thoughtful space planning, modern aesthetics, and customized décor solutions that enhance comfort, reflect your style, and transform every room into an inspiring living experience"
          }
          loc={"Texas, America"}
          img={ser5}
        />
        <Recentworkcomp
          name={"Modern Interior Design Work"}
          dis={
            " We create functional, beautiful interiors through thoughtful space planning, modern aesthetics, and customized décor solutions that enhance comfort, reflect your style, and transform every room into an inspiring living experience"
          }
          loc={"United Arab Emirates"}
          img={ser6}
        />
      </div>
    </>
  );
}

export default RecentWork;

export function Recentworkcomp({ name, dis, loc, img }) {
  return (
    <>
      <div className="fullrecentworkcompdivv">
        <div className="rightsiderecentworkdiv">
          <img src={img} alt="Work Image" className="serviceimagetg" />
        </div>
        <div className="leftsiderecentworkdivv">
          <h1 className="headingofthework">{name}</h1>
          <h2 className="paragraphofthework">{dis}</h2>
          <div className="locationdiv">
            <FaLocationDot className="Locationicons" />{" "}
            <h2 className="locationnamesection">{loc}</h2>
          </div>
          <button className="Buttonforviewdetailsection">View Details</button>
        </div>
      </div>
    </>
  );
}
