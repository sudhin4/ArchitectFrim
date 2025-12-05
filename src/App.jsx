import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header/Heder";
import MobileNavbar from "./Component/MobileNavbar/MobileNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="HeaderdivinHome">
          <Header />
        </div>
        <div className="mobileheaderHome">
          <MobileNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
