import React from "react";
import Logo from "@/../../images/logo.svg"
import "./footer.css"
import Image from "@/node_modules/next/image";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-cont">

                <div className="logo">
                    <Image src={Logo} alt="" />
                </div>

                <div className="links">
                    <p>About Us</p>
                    <p>Catalog</p>
                    <p>Sale</p>
                </div>

                <div className="privacy">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                
            </div>
        </div>
    )
}
export default Footer