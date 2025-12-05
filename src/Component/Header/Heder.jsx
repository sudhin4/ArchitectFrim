import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return(
        <>
        <div className="Headersectindiv">
            <div className="Logoorname">
              <Link to="/">
              <h1 className="Headingtagforlogo">ArchDesign</h1>
              </Link>  
            </div>
            <div className="Routingsectiondiv">
               <a href="#About"><h2 className="routingtagsection">About</h2></a> 
               <a href="#Services"><h2 className="routingtagsection">Service</h2></a> 
               <a href="#Projects"><h2 className="routingtagsection">Projects</h2></a> 
              <a href="#Testimonial"><h2 className="routingtagsection">Testimonials</h2></a>  
            </div>
            <div className="Contactsection">
            <Link to="/Contact"><button className="contactbuttonheading">Contact us</button> </Link>    
            </div>
        </div>
        
        </>
    )
}

export default Header;