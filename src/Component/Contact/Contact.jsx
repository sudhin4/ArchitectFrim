import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="fullcontactsectionheadingandsideheadingdivv">
        <div className="contactheadingggg">
          <h1 className="contactheadingsss">Let’s Connect and Bring Your Vision to Life</h1>
          <h2 className="sideheadingforcontactsection">Get in touch with our experts to discuss your project needs and ideas clearly.</h2>
        </div>
        <div className="fullcontactsectiondivv">
          <div className="firstcontactsection">
            <div className="firstinputsection">
              <div className="inputsectionnn">
                <label htmlFor="" className="inputlabell">
                  Name
                </label>
                <input
                  type="text"
                  className="inputforusername"
                  placeholder="Will Jacks"
                />
              </div>
              <div className="inputsectionnn">
                <label htmlFor="" className="inputlabell">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="inputforusername"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
            <div className="firstinputsection">
              <div className="inputsectionnn">
                <label htmlFor="" className="inputlabell">
                  Email address
                </label>
                <input
                  type="text"
                  className="inputforusername"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="inputsectionnn">
                <label htmlFor="" className="inputlabell">
                  Service Type
                </label>
                <input
                  type="text"
                  className="inputforusername"
                  placeholder="Interior Design"
                />
              </div>
            </div>
          </div>
          <div className="firstcontactsection">
            <div className="firstinputsection">
              <div className="messagesectiondivvv">
                <label htmlFor="" className="inputlabell">
                  Message
                </label>
                <textarea
                  name=""
                  className="inputformessagesection"
                  id=""
                  placeholder="Let us know how we can help you.."
                ></textarea>
              </div>
            </div>
          </div>
          <button className="submitbtnincontactsection">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
