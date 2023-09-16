import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
    // let loginBtnName = "Login";

    const[loginBtnNameReact, setLoginBtnNameReact] = useState("Login");

    // console.log("Header Rendered");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
    
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                    <button className="login" 
                    onClick={()=> {
                        
                        loginBtnNameReact === "Login"?
                        setLoginBtnNameReact("Logout"):
                        setLoginBtnNameReact("Login");
                        
                    }}
                    >{loginBtnNameReact}</button>
                </ul>
            </div>
    
        </div>
    );
    };

export default Header;