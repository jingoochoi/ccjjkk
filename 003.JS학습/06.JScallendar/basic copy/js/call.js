import aespa from './dom.js'
const week=['日','月','火','水','木','金','土']
const isos=k=>`${k.getFullYear()}.${k.getMonth()+1}.${k.getDate()} ${week[k.getDay()]}`//current month and next
console.log("%c📆🌸☔🍁⛄📆","font-size:30px;background-image:linear-gradient(to top,yellow,red);line-height:100px")
// call()

function call(p) {
    aespa.qs(p).innerHTML=istc()
    const cdate=new Date()
    const today=new Date()
    const yearTit=aespa.qs(p+' .yearTit')
    const monthTit=aespa.qs(p+' .monthTit')
    const dates=aespa.qs(p+' .dates')
    const data=[]
    let ccode=''
    const tial=()=>{
        data.splice(0)
        ccode=''
        let year=cdate.getFullYear()
        let mnth=cdate.getMonth()
        const prev=new Date(year,mnth,0)
        // console.log(isos(prev))
        const htis=new Date(year,mnth,1)
        // console.log(isos(htis))
        const last=new Date(year,mnth+1,0)
        // console.log(isos(last))
        yearTit.innerHTML='이런 '+year+'년'
        monthTit.innerHTML=mnth+1+'월월🐶'
        // console.log(htis.getDay())
        if (htis.getDay()!=0) {
            for (let i = 0; i < htis.getDay(); i++) {
                data.unshift(`<span style="color:#ccc" class="bm">${prev.getDate()-i}</span>`)
                // console.log(data)
            }
        }
        for (let j = 1; j <= last.getDate(); j++) {
            data.push(j)
            
        }
        // console.log(data)
        // <span style="color:#ccc" class="am">8</span>
        for (let m = 1; m <= 19; m++) {
            data.push(`<span style="color:#ccc" class="am">${m}</span>`)
            
        }
        // console.log(data)
        // dates.innerHTML=data.map((u,v)=>v<42?`<div class="date">${u}</div>`:'').join('')
        for (let n = 0; n < 42; n++) {
           if (data[n]==today.getDate()&&cdate.getMonth()==today.getMonth()&&cdate.getFullYear()==today.getFullYear()) {
                // 
               ccode+=`
                <div class="date today">${data[n]}</div>
                `
           }else{
            // 
            ccode+=`<div class="date">${data[n]}</div>`
           }
            
        }
        dates.innerHTML=ccode
        // console.log(data)
        // console.log(ccode)
        let date=aespa.qsa(p+' .date')
        date.forEach(o=>{
            aespa.addEvt(o,'click',()=>{
                let naps=aespa.qsEl(o,'span')
                if (naps) {
                    // 
                    if (naps.classList.contains('bm')) {
                        prem()
                    }
                    if (naps.classList.contains('am')) {
                        nxtm()
                    }
                }
                else  {
                    // 
                    let cldr=aespa.qs(p+' .calender')
                    if (o.classList.contains('today')) {
                        console.log(`oh it is today🎉✨`)
                        cldr.style.opacity=1
                        cldr.style.filter='grayscale(0%)'
                        // 
                    }if (mnth+1==2&&o.innerText==6) {
                        console.log(`${year}-${mnth+1}-${o.innerText} and happy birthday`)
                        cldr.style.opacity=.3
                        cldr.style.filter='grayscale(100%)'
                        window.open('https://www.youtube.com/embed/_z-1fTlSDF0','',`width=${window.innerWidth/2},height=${window.innerHeight/2},top=${window.innerHeight/4},left=${window.innerWidth/4}`)
                    }
                    else{cldr.style.opacity=1;
                        cldr.style.filter='grayscale(0%)'
                    console.log(`${year}-${mnth+1}-${o.innerText}`)}
                }
            })
        })
    }
    tial()
    const prem=()=>{
        cdate.setMonth(cdate.getMonth()-1)
        tial()
    }
    const nxtm=()=>{
        cdate.setMonth(cdate.getMonth()+1)
        tial()
    }
    aespa.addEvt(aespa.qs(p+' .btnL'),'click',prem)
    aespa.addEvt(aespa.qs(p+' .btnR'),'click',nxtm)
}
function istc() {
    return`
    <div class="calender">
    <!-- 달력상단:해당년/월표시 -->
    <header class="header">      
      <!-- 달력이동버튼:이전 -->
      <button class="mbtn btnL">〈</button>
      <div class="title">
        <div class="yearTit"></div>
        <div class="monthTit"></div>
      </div>
      <!-- 달력이동버튼:다음 -->
      <button class="mbtn btnR">〉</button>
    </header>
    <!-- 달력날짜표시박스 -->
    <section class="main">
      <!-- 주단위 구분박스 -->
      <div class="week">
        <div class="day">Sun</div>
        <div class="day">Mon</div>
        <div class="day">Tue</div>
        <div class="day">Wed</div>
        <div class="day">Thu</div>
        <div class="day">Fri</div>
        <div class="day">Sat</div>
      </div>
      <!-- 해당월의 달력날짜 구성박스 -->
      <div class="dates">
        </div>
    </section>
  </div>
    `
}
export default call