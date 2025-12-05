import ScrollVelocity from "./Mrqueecomp";
import image1 from '../../Images/archi1.png'
import image2 from '../../Images/archi2.webp'
import image3 from '../../Images/archi3.webp'
import image4 from '../../Images/archi4.webp'
import image5 from '../../Images/archi5.webp'
import image6 from '../../Images/archi6.webp'
import './Marquee.css'

function Marquee() {
    const velocity = 60
  return (
    <>
      <ScrollVelocity
        texts={[<Scrollimagecomp/>]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
}

export default Marquee;

export function Scrollimagecomp(){
    return(
        <>
        <div className="imagemarqueesectiondiv">
            <br />
            <img src={image1} alt="architecture Image 4k" className="imageinscrollimagecomp" />
            <img src={image2} alt="architecture Image 4k" className="imageinscrollimagecomp" />
            <img src={image3} alt="architecture Image 4k" className="imageinscrollimagecomp" />
            <img src={image4} alt="architecture Image 4k" className="imageinscrollimagecomp" />
            <img src={image5} alt="architecture Image 4k" className="imageinscrollimagecomp" />
            <img src={image6} alt="architecture Image 4k" className="imageinscrollimagecomp" />
        </div>
        
        </>
    )
}
