import aespa from './dom.js'
/* 생성자 함수로 바꾼다
1.첫글자->대문자
2.수입하는 곳에서 new 키워드 써서 인스턴스 생성
3.속성 및 메서드를 this 키워드 등록하면 호출이 가능(내부 호출에도 this를 사용해야) */
const week=['日','月','火','水','木','金','土']
const isos=k=>`${k.getFullYear()}.${k.getMonth()+1}.${k.getDate()} ${week[k.getDay()]}`//current month and next
console.log("%c📆🌸☔🍁⛄📆","font-size:30px;background-image:linear-gradient(to top,yellow,red);line-height:100px")
// call()

function Call(p) {
    aespa.qs(p).innerHTML=istc()
    const cdate=new Date()
    const today=new Date()
    const yearTit=aespa.qs(p+' .yearTit')
    const monthTit=aespa.qs(p+' .monthTit')
    const dates=aespa.qs(p+' .dates')
    const data=[]
    let ccode=''
    const dateinfo=aespa.qs(p+' .dateinfo')
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
                        this.prem()
                    }
                    if (naps.classList.contains('am')) {
                        this.nxtm()
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
                dateinfo.value=`${year}-${mnth+1}-${o.innerText}`
            })
        })
    }
    tial()
    this.prem=()=>{
        cdate.setMonth(cdate.getMonth()-1)
        tial()
    }
    this.nxtm=()=>{
        cdate.setMonth(cdate.getMonth()+1)
        tial()
    }
    aespa.addEvt(aespa.qs(p+' .btnL'),'click',this.prem)
    aespa.addEvt(aespa.qs(p+' .btnR'),'click',this.nxtm)
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
    <!--hidden field for saving-->
    <input type="hidden" class="dateinfo">
  </div>
    `
}
export default Call