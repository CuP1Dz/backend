import React from "react";
import Image from "@/node_modules/next/image";
import Sale1 from "@/images/Sale1.png"
import Sale2 from "@/images/Sale2.png"
import Sale3 from "@/images/Sale3.png"
import Sale4 from "@/images/Sale4.png"
import Sale5 from "@/images/Sale5.png"
import "./sale.css"

const Sale = () =>{
    return(
    <div className="sale">
        <div className="sale-cont">
            <h2>
                Sale
            </h2>
            <div className="sale-block">
                <div className="wrapper">
                    <div className="sale-left">
                        <div className="sale-imgs">
                            <Image src={Sale1} alt="" />
                            <Image src={Sale2} alt="" />
                            <Image src={Sale3} alt="" />
                            <Image src={Sale4} alt="" />
                        </div>
                        <div className="sale-big-img">
                            <Image src={Sale5} alt="" />
                        </div>
                    </div>

                    <div className="sale-right">
                        <div className="upper-txt">
                            <h3>
                                Greenlane Watch By Police For MenHT
                            </h3>
                            <p className="upper-txt-p">
                                Product tag: PEWJK2227003
                            </p>
                            <p>€700 <span>€1000</span></p>
                        </div>
                        <div className="middle-txt">
                            <h3>Description</h3>
                            <p>Richly detailed with an understated design - the Police Men’s Greenlane watch features a versatile multifunction design that fits effortlessly into work and play. The steel case is adorned with a semi-transparent black dial. The timepiece exhibits a contrast through a black IP bracelet with matching crown and pushers.</p>
                        </div>
                        <div className="under-txt">
                            <h3>DETAILS & FEATUREStion</h3>
                            <p>
                                Gender: man <br />
                                Size: 46x54.5mm <br />
                                Case Colour: Steel <br />
                                Band Material: Metal <br />
                                Case Material: Metal <br />
                                Features: Multifunction <br />
                                Water Resistant: 5 (ATM) <br />
                                Band Colour: Steel <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Sale