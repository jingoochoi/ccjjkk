// 하단영역 컴포넌트

import { memo } from "react";
import { bmenuData } from "../data/bmenu";
import { Logo } from "../modules/Logo";

export const FooterArea=memo(()=>{
    return(
        <footer className="info">
           <ul>
            <li><Logo logoStyle="bottom"></Logo></li>
            <li>
                <ol className="bmenu">
                    {bmenuData.map((a,b)=>
                        <li key={b}><a href={a.link} target="_blank">{a.txt.toUpperCase()}</a></li>
                    )}
                </ol>
            </li>
            <li>© & ™ DC. ALL RIGHTS RESERVED</li>
           </ul>
        </footer>
    )

}) ///////// FooterArea 컴포넌트 /////////