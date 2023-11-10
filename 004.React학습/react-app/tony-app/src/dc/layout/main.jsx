// import { Bann } from "../ctts/banner";
import { Comi } from "../ctts/comi";
import { Crts } from "../ctts/crts";
import { Game } from "../ctts/game";
import { Mani } from "../ctts/mani";
import { Move } from "../ctts/move";
import { News } from "../ctts/news";
import { Osts } from "../ctts/osts";
import { Vdos } from "../ctts/vdos";
import { Swps } from "../plugin/swps";
export function Main(p) {
    return(
        <main className="cont">
            {
                p.meno=='main'&&
                <Mani ctgr={p.meno}/>
            }
            {
                p.meno=='CHARACTERS'&&
                <Crts ctgr={p.meno}/>
            }
            {
                p.meno=='COMICS'&&
                <Comi ctgr={p.meno}/>
            }
            {
                p.meno=='MOVIES'&&
                <Move ctgr={p.meno}/>
            }
            {
                p.meno=='GAMES'&&
                <Game ctgr={p.meno}/>
            }
            {
                p.meno=='NEWS'&&
                <News ctgr={p.meno}/>
            }
            {
                p.meno=='VIDEO'&&
                <Vdos ctgr={p.meno}/>
            }
            {
                p.meno=='SWIPER'&&
                <Swps ctgr={p.meno}/>
            }
            {
                p.meno=='OST'&&
                <Osts ctgr={p.meno}/>
            }
        </main>
    )
}