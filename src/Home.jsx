import Marquee from "./Component/Aftermaincomp/Marquee";
import Calltoaction from "./Component/Calltoaction/Calltoaction";
import Centersection from "./Component/Centersection/Centersection";
import { Countersection } from "./Component/Countersection/Countersection";
import Faq from "./Component/Faq/Faq";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Heder";
import Herosection from "./Component/MainHerosection/Herosection";
import RecentWork from "./Component/Recentwork/Recentwork";
import Servicesection from "./Component/ServiceSection/Servicesection";
import Testimonial from "./Component/Testimonials/Testimonials";
import Whoweare from "./Component/Whoare/Whoweare";
import './index.css'

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function Home(){
    return(
        <>
        
        <div className="fullsectionHomedivv">
            
        
        <Herosection/>
        <Marquee/>
        <Whoweare/>
        <Countersection/>
        <Centersection/>
        <Servicesection/>
        <RecentWork/>
        <Testimonial/>
        <Faq/>
        <Calltoaction/>
        <Footer/>

        </div>
        
        
        </>
    )
}

export default Home;