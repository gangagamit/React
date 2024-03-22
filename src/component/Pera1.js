import React from "react"
import "../component/Style.css";
import Style1 from "../component/Style1.module.css";
function Pera1(){
    return (
    <>
    <h1 style={{color:"royalblue"}}>This is Heading Tag-1</h1>
    <h2>This is Heading Tag-2</h2>
    <h3>This is Heading Tag-3</h3>
    <h4 className={Style1.Tag}>This is Heading Tag-4</h4>
    <h5>This is Heading Tag-5</h5>
    <h6>This is Heading Tag-6</h6>
    </>
    )
}
export default Pera1;