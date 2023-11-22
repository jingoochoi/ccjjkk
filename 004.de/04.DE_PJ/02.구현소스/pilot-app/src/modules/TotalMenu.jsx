// Pilot PJ 전체메뉴 컴포넌트
import { useContext } from "react";
import { pcon } from "./pilotContext";
export function TotalMenu() {
    const mycon=useContext(pcon)
    const gopage=(txt)=>{
      mycon.chgPgName(txt)
      document.querySelector('.ham').style.display='none'
    }
    return (
      <>
        <div className="mbox">
          <video
            src="./images/disc2018.mp4"
            loop="loop"
            muted="muted"
            className="bgm"
          ></video>
          <nav className="mlist">
            <dl>
              <dt>
                <a href="#" onClick={()=>gopage('men')}>MEN</a>
              </dt>
              <dd>
                <a href="#">T-SHIRT</a>
              </dd>
              <dd>
                <a href="#">JACKET</a>
              </dd>
              <dd>
                <a href="#">TRAINING WARE</a>
              </dd>
              <dd>
                <a href="#">BEACH WARE</a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#" onClick={()=>gopage('women')}>WOMEN</a>
              </dt>
              <dd>
                <a href="#">T-SHIRT</a>
              </dd>
              <dd>
                <a href="#">JACKET</a>
              </dd>
              <dd>
                <a href="#">TRAINING WARE</a>
              </dd>
              <dd>
                <a href="#">BEACH WARE</a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#" onClick={()=>gopage('style')}>STYLE</a>
              </dt>
              <dd>
                <a href="#">COLLECTION</a>
              </dd>
              <dd>
                <a href="#">SEASON AD</a>
              </dd>
              <dd>
                <a href="#">STAR &amp; NEWS</a>
              </dd>
              <dd>
                <a href="#">MAIN ITEM</a>
              </dd>
            </dl>
          </nav>
        </div>
      </>
    );
  } ///////// TotalMenu 컴포넌트 //////////