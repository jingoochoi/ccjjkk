$(()=>{
    const draggable=$('.draggable')
    const dropshow=$('.dropshow')
    draggable.mouseenter().css({cursor:'grab'})
    // draggable.mousemove().css({cursor:'grabbing'})
    draggable.draggable({cursor:'grabbing',opacity:'.3',stack:'.draggable'})//stack=z-index high
    draggable.on('dragstart',function () {
        $(this).addClass('invert').css({cursor:'grabbing'})
    })
    draggable.on('dragstop',function () {
        $(this).removeClass('invert').css({cursor:'grab'})
    })
    dropshow.droppable({
        drop:function (a,b) {
            $(this).css({backgroundImage:`url(${b.draggable.find('img').attr('src')})`}).html(`🎉${b.draggable.find('p').html()}🎉`)
            b.draggable.hide()
            $('.tube').html(`
                <div id="mbox"><a href="#">x</a></div>
            `)
            let mbox=$('#mbox')
            mbox.css({position:'fixed',top:0,left:0,width:'100%',height:'100%',zIndex:3333,backgroundColor:'black'}).find('a').css({position:'absolute',top:0,right:0,fontSize:'100px',textDecoration:'none',color:'white'})
            mbox.append(`<iframe src="https://www.youtube.com/embed/${b.draggable.attr('data-mv')}?autoplay=1" allow="autoplay" style="border:none;height:100%;width:100%"></iframe>`).hide().delay(1000).slideDown(1000)
            mbox.find('a').click(function () {
                mbox.slideUp(1000,function () {
                    $(this).remove()
                })
                b.draggable.show().css({top:0,left:0})
            })
        }
    })
})