import { FaStar } from "react-icons/fa6";
import "./Testimonials.css";
import pers1 from "../../Images/person1.jpg";
import pers2 from "../../Images/person2.jpg";
import pers3 from "../../Images/person3.png";
import pers4 from "../../Images/person4.jpg";

function Testimonial() {
  const velocity = 60;
  return (
    <>
      <div className="whoelTestimonialdivv" id="Testimonial">
        <div className="Headingdivtestimonial">
          <h1 className="Testimonialheadingtag">Few Words From Clients</h1>
          <h2 className="sideparagraphhaeadingtagtestimonial">
            Real Stories From Clients Who Trust Our Architectural Vision
          </h2>
        </div>
        <div className="ogtestimonialdivv">
            <Testimonialfullcomp/>
        </div>
      </div>
    </>
  );
}

export default Testimonial;


export function Testimonialfullcomp() {
  return (
    <>
      <div className="fullcompdivvv">
        <TestimonialComp
          name={"Jhon Wick"}
          workname={"Architecture Design"}
          imag={pers2}
        />

        <TestimonialComp
          name={"Lilly Edison"}
          workname={"Interior Space Design"}
          imag={pers1}
        />

        <TestimonialComp
          name={"Jordan"}
          workname={"Architecture Design"}
          imag={pers3}
        />

        <TestimonialComp
          name={"Will Smith"}
          workname={"Interior Work"}
          imag={pers4}
        />
      </div>
    </>
  );
}

export function TestimonialComp({ name, workname, imag }) {
  return (
    <>
      <div className="wholeTestimonialComp">
        <div className="testimonialimageandnamecontentsection">
          <img
            src={imag}
            className="clientimagetag"
            alt="Testimonial Image"
          />
          <h1 className="nameoftheclienttestimonail">{name}</h1>
          <h2 className="WOrknametestimonial">{workname}</h2>
        </div>
        <div className="TestimonialreviewContentsection">
          <h3 className="reviewContenttagtestimonial">
            Working with this architectural team was an exceptional experience.
            They understood our vision perfectly, delivered innovative designs,
            and managed every detail with professionalism. The final outcome
            exceeded expectations and transformed our space beautifully. Highly
            recommended.
          </h3>
        </div>
        <div className="testimonialstarsection">
          <FaStar className="stariconintestimonial" />
          <FaStar className="stariconintestimonial" />
          <FaStar className="stariconintestimonial" />
          <FaStar className="stariconintestimonial" />
          <FaStar className="stariconintestimonial" />
        </div>
      </div>
    </>
  );
}
