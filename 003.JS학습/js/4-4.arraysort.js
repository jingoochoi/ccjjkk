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
 */
console.log("%c🚢🚢🚢🚢🚢🚢🚢🚢🚢🚢","font-size:50px")
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