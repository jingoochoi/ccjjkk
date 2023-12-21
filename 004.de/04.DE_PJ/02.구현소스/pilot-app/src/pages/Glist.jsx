import '../css/glist.css'
import gdata from '../data/glist';
export function Glist() {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    const make=()=>
        gdata.map((a,b)=>
        <div key={b}>
        <a href="#" >
          [{b+1}]
          <img src={"./images/goods/"+a.cat+"/"+a.ginfo[0]+".png"} alt="dress" />{" "}
          <aside>
            <h2>{a.ginfo[1]}</h2> <h3>{numberWithCommas(a.ginfo[3])}원</h3>
          </aside>
        </a>
      </div>
        )
    
  return (
    <>
      <main id="cont">
        <section>
          <div id="optbx">
            <label htmlFor="men">남성</label>
            <input type="checkbox" id="men" defaultChecked/>
            <label htmlFor="women">여성</label>
            <input type="checkbox" id="women" defaultChecked/>
            <label htmlFor="style">스타일</label>
            <input type="checkbox" id="style" defaultChecked/>
          </div>
          <div className="grid">
            {make()}
          </div>
        </section>
      </main>
    </>
  );
}
