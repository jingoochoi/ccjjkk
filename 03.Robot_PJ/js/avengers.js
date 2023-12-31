// console.log(character)
const qs=(x)=>document.querySelector(x)
const qa=(x)=>document.querySelectorAll(x)
setTimeout(() => {
    window.scrollTo(0,0)
}, 300);
const avengers=qs('.avengersbox')
// console.log(avengers)
let hcode=''
let num=1;
for(let x in character){
    // console.log(x)
    hcode+=`
    <div class="hero">
    <!-- 이미지 -->
    <img src="./ab_img/${character[x]['이미지명']}.png" alt="${x}">
    <!-- 소개글박스 -->
    <article class="txt ${num>=3?'right':''}">
        <div>
            <h3>${x}</h3>
            <p>${character[x]['설명']}</p>
        </div>
    </article>
</div>
    `
    num++
}
// console.log(hcode)
 /************************************************* 
                [ 객체를 위한 for in 문 ]

                - 구문: 
                for(변수 in 객체){코드}

                - 작동원리:
                객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

                - 변수는 객체의 속성명이다!

                - 객체의 값을 사용하려면 for in 문 안에
                    객체[변수] 로 쓰면됨!

            *************************************************/
avengers.innerHTML=hcode
setTimeout(() => {
    avengers.classList.add('on')
}, 2000);
setTimeout(() => {
    avengers.classList.add('active')
}, 5000);
let mytit=qs('.t1')
let tit1=''
for (let x of mytit.innerHTML) {
    // console.log(x)
    tit1+=`<span>${x}</span>`
    // console.log(tit1)
    mytit.innerHTML=tit1
}
let show=qs('.down')
show.onclick=function () {
    window.scrollTo(0,window.innerHeight)
    qs('.trailerbox iframe').src='https://www.youtube.com/embed/Ko2NWhXI9e8?autoplay=1';
}
let up=qs('.up')
up.onclick=function () {
    window.scrollTo(0,-window.innerHeight)
    qs('.trailerbox iframe').src='https://www.youtube.com/embed/Ko2NWhXI9e8';
}
window.addEventListener('wheel',wft)
function wft(e) {
    let dt=e.wheelDelta
    // console.log(dt)
    if (dt<0) {
        window.scrollTo(0,window.innerHeight)
    }
    else window.scrollTo(0,-window.innerHeight)
    if (dt<0) {
        qs('.trailerbox iframe').src='https://www.youtube.com/embed/Ko2NWhXI9e8?autoplay=1';
    }
    else {qs('.trailerbox iframe').src='https://www.youtube.com/embed/Ko2NWhXI9e8';}
}
qs('iframe').addEventListener('wheel',e=>e.stopPropagation())