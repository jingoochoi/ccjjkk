// import { Bann } from "../ctts/banner";

import { Outlet } from "react-router-dom";

export function Main(p) {
    return(
        <main className="cont">
            <Outlet></Outlet>
        </main>
    )
}