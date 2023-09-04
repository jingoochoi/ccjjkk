// console.log(character)
const qs=(x)=>document.querySelector(x)
const qa=(x)=>document.querySelectorAll(x)
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