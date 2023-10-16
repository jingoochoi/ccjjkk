import aespa from './dom.js'
/* 
            [ JS 배열의 정렬 ]
            -> 용어의 정의: 정렬이란?
            : 배열의 값을 기준으로 순서를 다시 정하는것!
            배열의 정렬은 sort() 메서드 사용!
            sort() 메서드를 사용하여 배열의값을 오른차순,내림차순으로
            정렬할 수 있음!
            [ sort() 메서드의 특징 ]
            1. 기본정렬 :  오름차순(1,2,3,.../a,b,c,...)
                -> 기본 내림차순 메서드 -> reverse()
            2. 원리 : 배열값을 문자열로 캐스팅(형변환)한후
                    변환된 문자열을 비교하여 순서를 결정함
            (참고: undefined 값일 경우 배열 맨뒤에 배치함)
            warning-use the sort() method comparing function
            [ sort() 메서드 비교함수 ]
            -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
            sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!

            [-> 기준정렬 : 오름차순]
            배열변수.sort() -> 기본정렬

            [-> 기준정렬 : 내림차순]
            배열변수.reverse() -> 기본정렬
             [ sort() 메서드만 사용하여 정렬잡기 ]
            (비교함수사용)
            배열변수.sort(function(x,y){
                if(x>y) return 1;
                if(x<y) return -1;
                return 0;
            })
            
            -> 단순화하기(삼항연산자사용!)

            배열변수.sort(function(x,y){
                return x == y ? 0 : x > y ? 1 : -1;
            })

            -> 리턴값의 의미(오름차순)
            1) if(x>y) return 1; -> x가 y뒤에 옴 (리턴값 양수)
            2) if(x<y) return -1; -> x가 y앞에 옴 (리턴값 음수)
            3) return 0; -> x,y 정렬을 유지 (리턴값 0)

            -> 내림차순은 양수/음수만 반대로 써주면 된다!

            [ 정렬시 데이터 유의사항 ]
            1. 문자형일 경우 대소문자가 섞여있으면 대문자나 소문자중
            하나로 통일하여 비교해야함(toUpperCase()/toLowerCase())
            예)
            배열변수.sort((x,y)=>{
                let a = x.toUpperCase(),
                    b = y.toUpperCase();
                
                return a == b ? 0 : a > b ? 1 : -1;
            })

            2. 날짜정렬도 숫자와 동일함(날짜데이터 자체가 숫자형으로 되어있음)

            3. 특정언어의 특수문자일 경우 localeCompare() 메서드로 
            문자열 비교를 한다!
            예) 특수문자 x변수를 y변수와 변환후 비교 
            x.localeCompare(y)
            *************************************************************

            [ 배열의 검색 : find() / filter() / indexOf() ]

            1. find() 메서드
            (1) 검색후 첫번째 일치값 하나만을 리턴
            (2) 결과가 없으면 undefined 리턴(if문에서 false처리!)
            (3) 콜백함수구성 : function(val,idx,obj){}
                1) val : 처리중 배열의 값
                2) idx : 처리중 배열의 순번
                3) obj : 처리중 배열전체
            (4) 리턴데이터 : 배열의 값 하나(값의 데이터형)
            (5) 활용케이스 : 아이디검사 결과 리턴
            (6) 코드예 :
                변수 = 배열.find(v=>{
                    if(v[속성명].indexOf(검색어)!==-1) return true;
                })
                -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
                return true 하여 할당된 변수에 저장하고 문장이 바로 끝난다!


            2. filter() 메서드
            (1) 검색후 모든 일치값을 리턴
            (2) 결과가 없으면 빈배열 리턴([]->배열.length 값이 0)
            (3) 콜백함수구성 : function(val,idx,obj){}
                1) val : 처리중 배열의 값
                2) idx : 처리중 배열의 순번
                3) obj : 처리중 배열전체
            (4) 리턴데이터 : 배열형데이터(하나여도 배열값으로 넘어옴!)
            (5) 활용케이스 : 검색리스트 결과 리턴
            (6) 코드예 :
                변수 = 배열.filter(v=>{
                    if(v[속성명].indexOf(검색어)!==-1) return true;
                })
                -> 배열을 자동순회하여 if문에 해당되는 데이터가 있으면
                return true 하여 다른값이 계속 나올때까지 배열로 값을
                할당변수에 저장한다!(배열을 전체순회함!)

            3. LIKE 검색방법 : 값의 일부만 넣어도 검색되는 방법
            -> indexOf(값) 을 사용함!
            결과값으로 문자열의 위치순번을 리턴하는데
            만약 없으면 -1을 리턴하므로 이것을 이용하여 
            조건문에 -1이 아닌경우가 검색결과가 있는 경우가 됨!
            예) 
            if(문자열.indexOf(검색문자열)!==-1){결과리턴}

            *************************************************
 */
console.log("%c🚢🚢🚢🚢🚢🚢🚢🚢🚢🚢","font-size:50px")
console.log("%c👊🍓🍓🍓","font-size:30px;background-image:linear-gradient(to bottom,white,white,goldenrod,white,white);")
console.log("%c万韩元四个糖葫芦","font-size:30px;color:red")
// 숫자값 배열
const raynum = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
// 문자값 배열
const raystr = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];
// console.log(raynum,raystr)
// console.log(raynum.reverse(),raystr.reverse())
const shownum=aespa.qs('.showNum')
shownum.innerHTML=raynum.map(m=>`<img src="./images/num/num_0${m}.png" alt="number">`).join('')
const value=aespa.qs('.sel')
aespa.addEvt(value,'change',function () {
    // console.log('b')
    if (value.value==1) {
        raynum.sort(function (m,n) {
            return m-n
        })
        shownum.innerHTML=raynum.map(m=>`<img src="./images/num/num_0${m}.png" alt="number">`).join('')
    }
    if (value.value==2) {
        // raynum.reverse()
        raynum.sort(function (m,n) {
            return n-m
        })
        shownum.innerHTML=raynum.map(m=>`<img src="./images/num/num_0${m}.png" alt="number">`).join('')
    }
})
const shownum2=aespa.qs('.showNum2')
shownum2.innerHTML=raystr.map(m=>`<span>${m}</span>`).join('👨‍🏫')
const value2=aespa.qs('.sel2')
aespa.addEvt(value2,'change',function () {
    // console.log('b')
    if (value2.value==1) {
        raystr.sort()
        // raystr.sort((m,n)=>m==n?0:m>n?1:-1)
        shownum2.innerHTML=raystr.map(m=>`<span>${m}</span>`).join('👨‍🏫')
    }
    if (value2.value==2) {
        raystr.sort()
        raystr.reverse()
        // raystr.sort((m,n)=>m==n?0:m>n?-1:1)
        shownum2.innerHTML=raystr.map(m=>`<span>${m}</span>`).join('👨‍🏫')
    }
})
const list1 = [
    {
        idx: 8,
        tit: "나는 구누?",
        cont: "공동구매) 슬로건 공구 (계좌와 네이버폼)",
    },
    {
        idx: 4,
        tit: "여기는 어디?",
        cont: "총공 공지] 오늘부터 일 2회, 총공 진행합니다",
    },
    {
        idx: 1,
        tit: "나야나",
        cont: "연합 갈라 서포트 계좌오픈",
    },
    {
        idx: 15,
        tit: "이제 얼마나 남은거니?",
        cont: "음악프로그램에 출연 요청글도 써볼까요?",
    },
]; /////////////// list1 /////////////
const showlist3=aespa.qs('.showList3')
const upcode=function (q,w) {
    let hcode=q.map(m=>`<tr>
        <td>${m.idx}</td>
        <td>${m.tit}</td>
        <td>${m.cont}</td>
    </tr>`)
    w.innerHTML=`
        <table>
            <thead>
                <tr>
                    <th>number</th>
                    <th>title</th>
                    <th>content</th>
                </tr>
            </thead>
            <tbody>
                ${hcode.join('📜')}
            </tbody>
        </table>
    `
}
upcode(list1,showlist3)
const sel3=aespa.qs('.sel3')
const cta3=aespa.qs('.cta3')
let tgdt=list1
let tgbx=showlist3
aespa.addEvt(sel3,'change',()=>{
    // 
    tgdt=list1
    tgbx=showlist3
})
aespa.addEvt(sel3,'change',winter)
function winter() {
    let val=this.previousElementSibling.value
    if (this.value==1) {
        tgdt.sort((m,n)=>m[val]==n[val]?0:m[val]>n[val]?1:-1)
        upcode(tgdt,tgbx)
    }
    else if(this.value==2){
        tgdt.sort((m,n)=>m[val]==n[val]?0:m[val]>n[val]?-1:1)
        upcode(tgdt,tgbx)

    }
}
// console.log(list1)
const list2 = [
    {
        idx: 15,
        tit: "당근마켓에 가자",
        cont: "당근마켓이 정말로 싸고 좋다구~!",
    },
    {
        idx: 74,
        tit: "점심에 뭐먹지?",
        cont: "오스틴님 생일 서포트 안내",
    },
    {
        idx: 18,
        tit: "직돌이는 쉬고싶다~!",
        cont: "활동정지에 대한 파생글 무통보 삭제 및 경고",
    },
    {
        idx: 104,
        tit: "올해는 다른 회사로 이직한다!",
        cont: "⚜️갈라콘 서포트에 많은 참여 부탁드립니다!",
    },
]; /////////////// list2 /////////////  
const showList4=aespa.qs('.showList4')
let nlst=list2
upcode(list2,showList4)
const sel4=aespa.qs('.sel4')

aespa.addEvt(sel4,'change',()=>{
    // 
    tgdt=nlst
    tgbx=showList4
})
aespa.addEvt(sel4,'change',winter)
const sbtn=aespa.qs('.sbtn')
aespa.addEvt(sbtn,'click',ning)
function ning() {
    let cta4=aespa.qs('.cta4').value
    let stxt=aespa.qs('#stxt').value
    // console.log(stxt)
    let goal=list2.filter(h=>{
        if (String(h[cta4]).indexOf(stxt)!=-1) {
            return true
        }
        
    })
    // console.log(goal)
    upcode(goal,showList4)
    // list2=goal
    nlst=goal
}
aespa.addEvt(aespa.qs('.fbtn'),'click',()=>{
    nlst=list2
    upcode(nlst,showList4)
    rs()
})
function rs() {
    aespa.qs('.cta4').value='idx'
    aespa.qs('#stxt').value=''
    sel4.value='0'
}
aespa.addEvt(aespa.qs('.sample'),'click',()=>{
    let sult=list2.find(p=>{
        if (p.tit=='당근마켓에 가자') {
            return true
        }
    })
    // console.log(sult)
    let rst2=list2.find(p=>{
        if (p.tit.indexOf('다')!==-1) {
            return true
        }
    })
    // console.log(rst2)
    let rst3=list2.filter(p=>{
        if (p.tit.indexOf('에')!=-1) {
            return true
        }
    })
    // console.log(rst3)
})