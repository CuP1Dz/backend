import React from "react"
import "./about_us.css"
import Watch from "@/../../images/big_watch.png"
import Image from "@/node_modules/next/image"

const About = () =>{
    return(
    <div className="about">
        <div className="about_cont">
            <div className="about_txt">
                <h2>About us</h2>
                
            </div>
            <div className="txt">
                <div className="image-txt">
                    <p>Welcome to our premium watch collection, where luxury and style meet functionality and precision. Our selection of timepieces embodies the very best in Swiss craftsmanship and engineering, ensuring that you'll always have a reliable and stylish accessory on your wrist.</p>
                    <p>At our premium watch collection, we believe that a watch is more than just a timekeeping device – it's a statement piece that reflects your personality and style. So why settle for anything less than the best? Browse our collection today and discover the perfect watch for you.</p>
                </div>
                <div className="image-block">
                    <Image className="img" src={Watch} alt="" />  
                </div>
            </div>
        </div>

    </div>
)}
export default About