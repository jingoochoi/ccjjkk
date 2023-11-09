import React from "react";
import { isrc } from "../data/img";
export const Logo=()=>{
    const stys={
        width:"81px",
        height:"81px",
        backgroundImage:"linear-gradient(45deg, #88f62f, #fa8104)",
        borderRadius:"50%"
    }
    return(
        <h1 style={stys}>
            <img src={isrc.logo} style={{width:'80px'}} alt="DC logo" />
        </h1>
    )
}