// 3D 태양계 JS - solar3d.js /////

/**************************************** 
    [ 구현내용 ]
    - 축소확대 버튼 클릭시 표기된 배율만큼
    태양계전체를 축소/확대 적용한다!
    - 이때 클릭된 메뉴는 오버시 변경색을
    유지한다!
****************************************/
$('.tit2 a').on('click',function () {
    $('.sc').css({transform:'scale('+$(this).attr('data-num')+')'})
    $(this).addClass('on').siblings().removeClass('on')
})