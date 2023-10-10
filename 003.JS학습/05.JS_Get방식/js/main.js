// JS 페이지간 데이터 전달하기 : 메인페이지 JS - main.js
console.log("%c👗👚👒","font-size:30px")
/********************************************************* 
[ 웹 페이지간 데이터 전달방식 ]
- 원래 html의 기본특성은 "비연결성"이다.
즉, 한번 요청된 페이지는 스스로 업데이트 되지 않는다!
페이지 간 데이터를 전달하는 방식이 요구되어짐.

1. Get 방식 : url뒤에 ?(물음표) 뒤에 (키=값) 쌍으로
데이터를 전달하는 방식(이 방식은 페이지셋팅에 적합하다!)

2. Post 방식 : 페이지 내부에 form태그로 감싸서
데이터를 입력받고 페이지에 숨겨서 다른 페이지로
전송하는 방식
(포스트방식은 편지처럼 봉투안에 숨겨져서 보내지는 것과 유사!)
-> 회원가입, 로그인 등 민감한 데이터를 전송할때 적합하다!

(참고로 Get방식은 3000byte 까지 데이터 전송이 가능하며
Post방식은 데이터 크기에 제한이 없다!)

[ Get방식으로 다른 페이지에 data전달하기 ]
1. url뒤에 데이터를 (키=값) 쌍으로 전달
2. 형식: url?키=값&키=값&...
3. ?(물음표)는 Get방식으로 데이터를 넘긴다는 시그널한 
    url에는 단 하나의 물음표만 허용됨!!!!
4. &(엔퍼센드)는 키=값 쌍단위를 구분해주는 구분자
*********************************************************/
const gnb=document.querySelectorAll('#gnb a')
gnb.forEach(a=>{
    a.addEventListener('click',ive)
})
function ive() {
    let atxt=this.innerHTML
    location.href='Get02.html?shop='+encodeURIComponent(atxt)
}//encodeURI() and decodeURI() are used for whole URI
// encodeURIComponent() became automatic in recent browser, but use it originally



/********************************************************* 
    [ url로 보낼때 한글깨짐 방지하기! ]

    2byte문자(한글,일본어,한자,아랍어 등)를
    url로 보내면 규칙성 없이 깨져서 전달된다!
    따라서 규칙성 있게 변환하여 보내고
    받는 페이지에서 그 규칙을 풀어서 복원한다!

    1) 보낼때: encodeURIComponent(값)
    - 2byte문자를 변환하여 보냄

    2) 받을때: decodeURIComponent(값)
    - 2byte문자를 변환하여 받음(복원)

    -> 참고로 encodeURIComponent변환은 암호화가 아니다!
    변환하는 규칙이 있고 잘 보면 읽을 수 있다!

    엔코딩 표준에 따라 모든문자는 16진수 2 디짓
    (%xx)이나 4 디짓(%uxxxx) 데이터로 전환된다.
     예를 들어 빈칸(' ')은 %20, 세미콜론(;)은 %3B, 
    '한글'은 %uD55C%uAE00'이 된다.

*********************************************************/
