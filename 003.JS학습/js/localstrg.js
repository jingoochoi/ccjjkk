import aespa from './dom.js'
console.log("%c🕴VS🕴","font-size:30px")
window.localStorage
            /*************************************************************** 
            [ JS 로컬스토리지 : localStorage ]
            - window하위객체 window.localStorage
            -> window는 주로 생략함!

            1. 정의 : 
                브라우저별 로컬 어플리케이션 영역에 저장되는 
                스트링데이터 저장소(JS API)
            2. 유지 : 같은 PC, 같은 브라우저(재설치없이사용) 일 경우 계속유지됨
                (단, 같은파일일 지라도 여는 경로에 따라 같은 변수도
                따로 관리된다! - 기준이 도메인경로/주소)
            3. 특징 : 모드 데이터는 키,값 쌍으로 구성되며 
                데이터값은 반드시 문자형으로 사용됨
            4. 응용 : 데이터로 배열/객체를 사용할 경우 문자형 변환하여 넣고
                        다시 객체형으로 파싱하여 사용한다!
                    (1) 입력시 : JSON.stringify(배열/객체)
                    (2) 사용시 : JSON.parse(문자형배열/객체)
                    -> JS의 제이슨 데이터 파싱 메서드 : 
                        JSON.parse()
                    -> JS의 제이슨 형식 데이터를 문자열로 변환하는 메서드:   
                        JSON.stringify()
            5. 사용메서드 : 
                (1) 값설정 : setItem(키명,값)
                (2) 값읽기 : getItem(키명)
                (3) 전체지우기 : clear()
                (4) 키번호읽기 : key(순번) -> 0부터 (키이름리턴)
                (5) 개별항목삭제 : removeItem(키명)
                (6) 개수 : length

            [ JS 세션 스토리지 : sessionStorage ]
            -> methods are same as local storage
            -> 로컬스토리지와 차이점은?
            -> 브라우저가 닫히면 데이터가 사라진다!
            (로컬세션의 개념은 서버세션과 달리 하나의 브라우저탭을
            단위로 한다!)
            -> 서버세션은 접속된 로그인정보세션을 서버에서 관리하는 단위임

            [ JS 로컬 스토리지 / 세션 스토리지 장단점 ]
            (1) 장점: 간단한 프론트엔드 데이터를 DB없이 테스트해보는데 탁월함
            (2) 단점: 데이터의 지속 보장이 없다!
                (그나마 로컬 스토리지는 브라우저 경로가 같고 PC가 같고
                브라우저종류가 같다면 지우기 전까지는 데이터를 유지한다!)


            -> w3 schools 참고
            https://www.w3schools.com/js/js_api_web_storage.asp
        ***************************************************************/
const btlc=aespa.qsa('.lcbx button')
btlc.forEach(p=>{
    aespa.addEvt(p,'click',lcft)
})
aespa.qsa('.local ol li').forEach((p,q)=>{
    const kname=['lname','lrole','lcat']
    p.onclick=function () {
        
            localStorage.removeItem(kname[q])
        
    }
})
function lcft() {
    //  console.log(this)
    let bttt=this.innerHTML
    if (bttt=='처음') {
        // console.log(localStorage.getItem('lname'))
        localStorage.setItem('lname','이정재')
        localStorage.setItem('lrole','박평호')
        localStorage.setItem('lcat','해외팀 안기부 팀장')
    }
    else if (bttt=='보여줘') {
        aespa.qs('.local .nm').innerHTML=localStorage.getItem('lname')
        aespa.qs('.local .role').innerHTML=localStorage.getItem('lrole')
        aespa.qs('.local .cat').innerHTML=localStorage.getItem('lcat')
    }
    else if (bttt=='전체삭제') {
        localStorage.clear()
        bind()
        bdmd()
    }
    else if (bttt=='처리') {
        if (!localStorage.getItem('minfo')||localStorage.getItem('minfo')=='[]') {
            make()
        }
        bind()
        bdmd()
    }
}
bind()
function make() {
    let objt=[
        {id:1,tit:'업경을 들라',cont:'저승법 1조 1항에 의거, 저승은 이승에서 용서를 받은 일은 더이상 묻지 않는다'},
    ]
    // JSON.stringify(objt)
    localStorage.setItem('minfo',JSON.stringify(objt))
    // 
}
function bind() {
    let lcdt=localStorage.getItem('minfo')
    let bcode=''
    if (lcdt) {
        lcdt=JSON.parse(lcdt)
        bcode=lcdt.map((p,q)=>`
            <tr>
                <td>${p.id}</td>
                <td>${p.tit}</td>
                <td>${p.cont}</td>
                <td class="link"><a href="#" data-id="${q}">x</a></td>
            </tr>
        `).join('')
    }
    else{bcode=`<tr>
        <td colspan="4" style="text-align:center">no data here</td>
    </tr>`}
    let hcode=`
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>삭제</th>
            </tr>
            ${bcode}
        </table>
    `
    aespa.qs('.board').innerHTML=hcode
    aespa.qsa('.link a').forEach(p=>{
        aespa.addEvt(p,'click',()=>{dlt1(p.getAttribute('data-id'))})
    })
}
aespa.addEvt(aespa.qs('#sbtn'),'click',istd)
function istd() {
    let tit=aespa.qs('#tit').value
    let cont=aespa.qs('#cont').value
    if (tit.trim()==''||cont.trim()=='') {
        alert('insert data all')
        return
    }
    let orgn=localStorage.getItem('minfo')
    if (!orgn) {
        localStorage.setItem('minfo','[]')
        orgn=localStorage.getItem('minfo')
    }
    orgn=JSON.parse(orgn)
    if (orgn.length!=0) {
        // 
        orgn.sort((p,q)=>{return p.id-q.id})
    }
    orgn.push({id:orgn.length==0?0:orgn[orgn.length-1].id+1,tit:tit,cont:cont})
    localStorage.setItem('minfo',JSON.stringify(orgn))
    bind()
    bdmd()
}
function dlt1(p) {
    event.preventDefault()
    let orgn=localStorage.getItem('minfo')
    orgn=JSON.parse(orgn)
    if (confirm('삭제하시겠습니까')) {
        orgn.splice(p,1)
        localStorage.setItem('minfo',JSON.stringify(orgn))
        bind()
    }
    bdmd()
}
const slt1=aespa.qs('#slt1')
const tit2=aespa.qs('#tit2')
const cont2=aespa.qs('#cont2')
const sbtn2=aespa.qs('#sbtn2')
function bdmd() {
    let orgn=localStorage.getItem('minfo')
    if (!orgn) {
        localStorage.setItem('minfo','[]')
        orgn=localStorage.getItem('minfo')
    }
    orgn=JSON.parse(orgn)
    slt1.innerHTML=`<option value="show">항목선택</option>`
    orgn.forEach(p=>{
        slt1.innerHTML+=`<option value="${p.id}">${p.tit}</option>`
    })
}
bdmd()
aespa.addEvt(slt1,'change',smd1)
function smd1() {
    let orgn=localStorage.getItem('minfo')
    if (!orgn) {
        localStorage.setItem('minfo','[]')
        orgn=localStorage.getItem('minfo')
    }
    orgn=JSON.parse(orgn)
    let sltr=orgn.find((p)=>{
        if (p.id==this.value) {
            return true
        }
    })
    tit2.value=sltr.tit
    cont2.value=sltr.cont
}
aespa.addEvt(sbtn2,'click',function () {
    let orgn=localStorage.getItem('minfo')
    orgn.tit=tit2.value
    orgn.cont=cont2.value
    localStorage.setItem('minfo',JSON.stringify(orgn))
})

const btss=aespa.qsa('.ssbx button')
btss.forEach(p=>{
    aespa.addEvt(p,'click',ssft)
})
aespa.qsa('.session ol li').forEach((p,q)=>{
    const kname=['sname','srole','scat']
    p.onclick=function () {
        
            sessionStorage.removeItem(kname[q])
        
    }
})
function ssft() {
    //  console.log(this)
    let bttt=this.innerHTML
    if (bttt=='처음') {
        // console.log(sessionStorage.getItem('lname'))
        sessionStorage.setItem('sname','정우성')
        sessionStorage.setItem('srole','김정도')
        sessionStorage.setItem('scat','국내팀 안기부 팀장')
    }
    else if (bttt=='보여줘') {
        aespa.qs('.session .nm').innerHTML=sessionStorage.getItem('sname')
        aespa.qs('.session .role').innerHTML=sessionStorage.getItem('srole')
        aespa.qs('.session .cat').innerHTML=sessionStorage.getItem('scat')
    }
    else if (bttt=='전체삭제') {
        sessionStorage.clear()
    }
}