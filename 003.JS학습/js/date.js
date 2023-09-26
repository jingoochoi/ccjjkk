import dd from './dom.js'
console.log("%c📆","font-size:30px")
// console.log(dd)
let tt=dd.qsa('.tt')
const day=['日','月','火','水','木','金','土']
setInterval(() => {
    show()
}, 1000);
show()
function show() {
    const today=new Date()
    // 
    tt[0].innerHTML=today.getFullYear()
    tt[1].innerHTML=today.getMonth()+1
    tt[2].innerHTML=today.getDate()
    tt[3].innerHTML=day[today.getDay()]
    tt[4].innerHTML=today.getHours()>11?'오후':'오전'
    tt[5].innerHTML=today.getHours()>12?today.getHours()-12:today.getHours()
    tt[6].innerHTML=today.getMinutes()
    tt[7].innerHTML=today.getSeconds()
}
// setTimeout(() => {
//     location.reload()
// }, 1000);
/*************************************** 
                    [ Math 객체 ]
                    - 수학객체로써 다른 객체와 달리
                    new키워드 없이 바로 사용할 수 있게 설계됨
                    - 이런객체를 정적객체(Static Object)라고함
                    -> 정적객체들!
                        Array(), Object(), Math()
                    ______________________________

                    [ 주요 Math 객체의 메서드들 ]
                    Math.min(값들) - 최소값
                    Math.max(값들) - 최대값
                    Math.round(실수값) - 반올림
                    Math.floor(실수값) - 내림
                    Math.ceil(실수값) - 올림
                    Math.abs(양수나 음수값) - 절대값
                    ______________________________

                    Math.random() - 난수발생
                    -> 0~1  사이의 소수점값 17자리수
                
                ***************************************/
const imbx=dd.qs('.imbx')
let random=Math.ceil(Math.random()*3)
// console.log(random)
// console.log(Math.ceil(Math.random()*9+3))
/**************************************** 
                    [ 내가 원하는 난수 만들기 ]

                    1. 먼저 난수를 발생시킨다!
                    Math.random()

                    2. 1부터 원하는 최대수일 경우 최대수를 곱한다
                    Math.random() * 최대수

                    3. 원하는 범위의 난수를 올림처림함
                    Math.ceil(Math.random() * 최대수)

                    ________________________________

                    [ 중간 범위의 난수 만들기 ]

                    1. 1부터 최대수 랜던수를 먼저구한다
                    Math.random() * 최대수

                    2. 원하는 범위의 시작수 만큼 더함
                    Math.ceil(Math.random() * 최대수) + 시작수만큼

                    (만약 0부터 시작수로 하면 내림을 적용!
                    -> Math.floor())
                    ___________________________________

                    예) 4~9 사이의 난수 구하기 : 1~6먼저구함
                    -> 최대수는 6, 시작수 만큼 더할 수는 3
                    Math.ceil(Math.random() * 최대수) + 시작수만큼
                    Math.ceil(Math.random() * 6) + 3
                    ________________________________

                    [ 중간범위 수 계산 ]
                    작은수 ~ 큰수
                    1. 최대수 = 큰수 - 작은수 + 1
                    2. 시작수차이 = 작은수 - 1;


                ****************************************/