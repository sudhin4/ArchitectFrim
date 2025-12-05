import SplitText from "../MainHerosection/TextcontentComp";
import './Whoweare.css'
function Whoweare(){
    return(
        <>
        <div className="whowearesectiondiv" id="About">
            <h1 className="headingwhowearetag">Who we are?</h1>
            <SplitText
            text="We are a forward-thinking architecture firm dedicated to designing functional, inspiring, and sustainable spaces that blend innovation, aesthetics, and purpose to create meaningful environments for people, businesses, and communities."
            className="Whoweareclassname"
            delay={150}
            duration={1}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        
        
        </>
    )
}

export default Whoweare;