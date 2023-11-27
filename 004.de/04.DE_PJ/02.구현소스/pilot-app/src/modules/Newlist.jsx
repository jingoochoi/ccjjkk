export function Newlist(p) {
    const mm=()=>{let temp=[]
    for (let x = 0; x < 9; x++) {
        temp[x]=<li className={"m"+(x+1)} key={x}>
        <a href="#"><img src={"./images/goods/"+p.cat+"/m"+(x+1)+".png"} alt="신상품" /></a>
      </li>
        
    }}
    return(
        <>      
  <h2 class="c1tit js-reveal">
    NEW {p.cat.toUpperCase()}'S ARRIVAL
    <button onclick="location.href='glist.html'">
        전체리스트
    </button>
  </h2>
  <div class="flowbx">
    <ul class="flist">
      {mm}
    </ul>
  </div>
        </>
    )
}