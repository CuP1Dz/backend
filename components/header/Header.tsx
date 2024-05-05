import React from "react";
import Logo from "@/../../images/logo.svg"
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import {ROUTER} from "../../router/router.enum"
import "./header.css"

const Header = () =>{
    return(
        <div className="header">
            <div className="header_cont">
                <div className="header-wrapper">
                    <Link href={ROUTER.HOME} className="logo"><Image src={Logo} alt="" />thewatchspot</Link>
                <nav className="nav" id="navbar">
                    <Link href={ROUTER.ABOUT}>ABOUT US</Link>
                    <Link href={ROUTER.CATALOG}>CATALOG</Link>
                    <Link href={ROUTER.SALE}>SALE</Link>
                </nav>
                </div>
                
                <button className="contact">+000000000</button>
            </div>
            
        </div>
    )
}
export default Header