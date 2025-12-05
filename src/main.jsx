import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Component/Header/Heder.jsx'
import Herosection, { Customerstar } from './Component/MainHerosection/Herosection.jsx'
import Home from './Home.jsx'
import { Countersection } from './Component/Countersection/Countersection.jsx'
import Centersection from './Component/Centersection/Centersection.jsx'
import Servicesection, { SerivcecardComp } from './Component/ServiceSection/Servicesection.jsx'
import RecentWork, { Recentworkcomp } from './Component/Recentwork/Recentwork.jsx'
import Testimonial, { TestimonialComp, Testimonialfullcomp } from './Component/Testimonials/Testimonials.jsx'
import Faq, { FaqComp } from './Component/Faq/Faq.jsx'
import Calltoaction from './Component/Calltoaction/Calltoaction.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Contact from './Component/Contact/Contact.jsx'
import MobileNavbar from './Component/MobileNavbar/MobileNavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
