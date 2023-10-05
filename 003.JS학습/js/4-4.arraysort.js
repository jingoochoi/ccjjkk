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
            [ sort() 메서드 비교함수 ]
            -> sort() 메서드 내부에 2개의 전달값을 가지는 함수를 쓰면
            sort메서드 자체에서 값을 비교하여 배열값의 순서를 바꾼다!

            [-> 기준정렬 : 오름차순]
            배열변수.sort() -> 기본정렬

            [-> 기준정렬 : 내림차순]
            배열변수.reverse() -> 기본정렬
 */
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
        raynum.sort()
        shownum.innerHTML=raynum.map(m=>`<img src="./images/num/num_0${m}.png" alt="number">`).join('')
    }
    if (value.value==2) {
        raynum.reverse()
        shownum.innerHTML=raynum.map(m=>`<img src="./images/num/num_0${m}.png" alt="number">`).join('')
    }
})