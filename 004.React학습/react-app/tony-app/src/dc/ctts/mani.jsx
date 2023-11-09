import { Bann } from "./banner";

export function Mani(p) {
    return(
        <>
            <h1 style={{textAlign:'center'}}>main page</h1>
            <Bann ctgr={p.ctgr}></Bann>
        </>
    )
}