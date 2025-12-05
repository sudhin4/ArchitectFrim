import image from '../../Images/centersection.webp'
import './Centersection.css'
import a1 from '../../Images/ar.webp'
import a2 from '../../Images/ar1.webp'
import a3 from '../../Images/ar2.webp'

function Centersection() {
  return (
    <>
      <div className="fullcentersectiondiv">
        <div className="leftcentersectiondiv">
          <h1 className="headingofthecentersection">
            Transforming Concepts Into Remarkable Architecture With Precision
            and Creative Insight
          </h1>
          <h2 className="secondheadingofthecentersectiondiv">1. Collaborative Design Approach</h2>
          <h2 className="secondheadingofthecentersectiondiv">2. Detail-Driven Planning</h2>
          <h2 className="secondheadingofthecentersectiondiv">3. Innovation-Focused Solutions</h2>
            <div className='imagesectiondivcentersection'>
             <img src={a1} className='arimagesection' alt="archtectimage" />
          <img src={a2} className='arimagesection' alt="archtectimage" />
          <img src={a3} className='arimagesection' alt="archtectimage" />   
            </div>
          
        </div>
        <div className="rightcentersectiondiv">
            <img src={image} className='centersectionrightimage' alt="arcitecture Image" />

        </div>
      </div>
    </>
  );
}

export default Centersection;
