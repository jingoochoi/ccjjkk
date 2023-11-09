// import { Bann } from "./banner";

import { isrc } from "../data/img";

export function Vdos() {
    return(
        <>
            <h1 style={{textAlign:'center'}}>VIDEO page</h1>
            <iframe src={isrc.video} frameborder="0"></iframe>
        </>
    )
}