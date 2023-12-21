// 일반적으로 요인에 값을 할당 후 다른 요인에 할당하면 값이 할당된다
let kk=10
let tt=kk
// console.log(kk,tt)
tt=200
// console.log(kk,tt)
// 배열이나 객체일 경우 컬렉션 집합을 만들고 주소로 관리가 되기 때문에 할당할 때 값이 아닌 주소가 복사된다
// 1.얕은복사
console.log('1.일반배열의 얕은복사');
let aa = [11, 22, 33];
console.log("원본aa", aa);

let bb = aa;
console.log("원본aa", aa,bb);
// 단순할당은 얕은복사임!

bb[0] = 777;

console.log("aa:", aa, "\nbb:", bb);
// 2.깊은복사(recommend)
console.log('\n2.일반배열의 깊은복사');
let cc = [55, 66, 77];
console.log("원본cc", cc);

let dd = [...cc];

dd[0] = 888;

console.log("cc:", cc, "\ndd:", dd);
// 3.객체 배열의 얕은복사
console.log('\n3.객체 배열의 얕은복사');
let ee = [{ 김: 55 }, { 이: 66 }, { 박: 77 }];
console.log("원본ee", ee);
let ff = ee;

ff[0]["김"] = 999;

console.log("ee:", ee, "\nff:", ff);
// 4.객체 배열의 깊은복사(recommend)-parse&stringify
// 객체값을 가지는 배열로 검색 혹은 정렬할 때 깊은 복사를 해야 원본이 유지된다
console.log('\n4.객체 배열의 깊은복사');
let gg = [{ 송: 99 }, { 정: 87 }, { 최: 54 }];
console.log("원본gg", gg);
let hh = JSON.parse(JSON.stringify(gg))

hh[0]["송"] = 888;

console.log("gg:", gg, "\nhh:", hh);