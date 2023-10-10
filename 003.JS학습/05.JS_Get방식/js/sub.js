// JS 페이지간 데이터 전달하기 : 서브페이지 JS - sub.js

let pm=location.href
pm=pm.split('?')[1]
pm=pm.split('=')[1]
decodeURIComponent(pm)