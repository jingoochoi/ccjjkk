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
            draggable.hide()
        }
    })
})