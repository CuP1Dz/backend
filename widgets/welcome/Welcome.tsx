import React from "react";
import "./welcome.css"
import Image from "@/node_modules/next/image";
import Line from "@/../../images/line.png"
import Slide from "@/../../images/1_slide.png"
import HandWatch from "@/../../images/watch.png"

const Welcome = () =>{
    return(
<main className="main">
            <div className="main__container">
                <div className="main__text">
                    <h2 className="main__title">Welcome to our collection of premium watches</h2>
                    <p className="main__subtext">Our watches are not just timepieces, but also an expression of your personality and lifestyle. From classic designs to modern ones, we have a watch to suit every taste and occasion.</p>
                </div>
                <div className="main__watch">
                    <div className="mini__watch">
                        <div className="mini_watch__img">
                            <Image src={Slide} alt="watch"/>
                        </div>
                        <div className="mini_watch__slider">
                            <div className="mini_watch__slider-lr">
                                <div className="mini_watch__left">
                                    &lt;
                                </div>
                                <div className="mini_watch__rigth">
                                    &gt;
                                </div>
                            </div>
                            <div className="mini_watch__slider-idk">
                                01
                                <Image src={Line} alt="stick"/>
                                05
                            </div>
                        </div>
                    </div>
                    <Image src={HandWatch} alt="watch on hand"/>
                </div>
            </div>
        </main>
    )}

export default Welcome