// DC PJ 검색결과 페이지 컴포넌트

import { useLocation } from "react-router-dom";
import { Searching } from "../modules/Searching";

export function SchPage(){
    const loca=useLocation()
    let keyword
    if (loca.state) {
        keyword=loca.state.keyword
    }
    // const word=loca.state.keyword
    return(
        <>
            <h1 className="tit">Search Result</h1>
            <Searching kword={keyword}/>
        </>
    )

} //////////// SchPage 컴포넌트 ///////////