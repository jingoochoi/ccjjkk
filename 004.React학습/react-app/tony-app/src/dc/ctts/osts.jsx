// import { Bann } from "./banner";

import { isrc } from "../data/img";

export function Osts() {
    return(
        <>
            <h1 style={{textAlign:'center'}}>OST page</h1>
            <iframe src={isrc.ost} frameborder="0"></iframe>
        </>
    )
}