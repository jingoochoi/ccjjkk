// 3-3 external js
// js외부파일은 html문서에 직접 들어가 동작하므로 utf 인코딩 설정이 불필요
var mini=document.querySelectorAll('.mini');
var bluebox=document.querySelector('.Bcase');
// console.log(mini,bluebox);
for(var i=0;i<mini.length;i++){mini[i].addEventListener('click',insertMini);}
mini[0].addEventListener('click',insertMini);
function insertMini(){
    console.log('mini');
}//insertmini
