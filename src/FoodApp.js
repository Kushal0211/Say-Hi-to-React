import React from "react";
import ReactDOM  from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";


// ---- Just a style object , going to add this in res-card jsx

const Footer = () => {
  return (
    <div className="Footer">

      <div className="FooterMenuBox">

        <div className="AboutCompany">
        
          <ul className="CompanyList">
              <li className="companyTitle">Company</li>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
          </ul>

        </div>

        

        <div className="AboutContact">

          <ul className="ContactList">
            <li className="contactTitle">Contact</li>
            <li>Help & Support</li>
            <li>Partner With Us</li>
          </ul>
        </div>

        <div className="AboutDeliveryLocations">
        
          <ul className="LocationList">
              <li className="locationTitle">We Deliver To</li>
              <li>Pune</li>
              <li>Mumbai</li>
              <li>Bangaluru</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
              <li>Delhi</li>
          </ul>

        </div>

      </div>
      <p className="copyright">&#169;Made With Love By Kushal Pandita ❤️</p>
    </div>
  );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)