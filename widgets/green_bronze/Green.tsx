import React from "react"
import Image from "@/node_modules/next/image"
import handwatch from "@/images/green2.png"
import watch from "@/images/green1.png"
import "./green.css"

const Green = () =>{
    return(
    <div className="green">
        <div className="green_cont">
            <p className="green-p">New watches</p>
            <h2 className="green-h2">Green And Bronze—The Match Made In Heaven</h2>
            <div className="green-imgs">
                <Image src={handwatch} alt="" />
                <Image src={watch} alt="" />
            </div>
        </div>
    </div>
)}
export default Green